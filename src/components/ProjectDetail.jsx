import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchProjects } from "../data/fetchProjects";

/* ---------- small hook: scrollspy for the TOC ---------- */
function useScrollSpy(ids = [], offset = 120) {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids, offset]);

  return active;
}

/* ---------- animations ---------- */
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const fadeScale = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

export function ProjectDetail() {
  const { slug } = useParams();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1) Fetch all projects once
  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data || []);
      })
      .finally(() => setLoading(false));
  }, []);

  // 2) Always compute project via useMemo (even if undefined)
  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [projects, slug]
  );

  // 3) Always compute TOC via useMemo (can be empty when project is undefined)
  const toc = useMemo(() => {
    if (!project) return [];
    const items = [];
    if (project.problem) items.push({ id: "problem", label: "Problem" });
    if (project.approach) items.push({ id: "approach", label: "Approach" });
    if (project.outcome) items.push({ id: "outcome", label: "Outcome" });
    if (project.gallery?.length) items.push({ id: "gallery", label: "Gallery" });
    return items;
  }, [project]);

  // 4) Always call useScrollSpy (even if toc is empty)
  const activeId = useScrollSpy(toc.map((t) => t.id), 128);

  // 5) NOW we can conditionally return JSX

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-plum">
        Loading project…
      </div>
    );
  }

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-abril-fatface text-plum">
          Project not found
        </h1>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-white hover:bg-brand-700"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-sand min-h-screen">
      {/* Top link + two-column hero */}
      <header className="mx-auto max-w-6xl px-4 pt-14 pb-8">
        <Link
          to="/"
          className="inline-flex items-center text-plum/70 hover:text-brand-700"
        >
          ← Back to work
        </Link>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image left */}
          <motion.div
            {...fadeScale}
            className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] bg-brand-50 border border-brand-100"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text right */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              {...fadeUp}
              className="text-4xl md:text-5xl font-abril-fatface text-plum"
            >
              {project.title}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-3 text-plum/80 font-asap-condensed whitespace-pre-line"
            >
              {project.description}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-4 flex flex-wrap gap-4"
            >
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-asap-condensed max-w-3xl text-cyan-700 hover:text-cyan-900 text-cyan-700 hover:underline hover:decoration-cyan-700 hover:decoration-2 hover:underline-offset-4 transition-all inline-flex items-center gap-2"
                >Full Case Study</a>
              )}

              {project.prototypeLink && (
                <a
                  href={project.prototypeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-asap-condensed max-w-3xl text-cyan-700 hover:text-cyan-900 text-cyan-700 hover:underline hover:decoration-cyan-700 hover:decoration-2 hover:underline-offset-4 transition-all inline-flex items-center gap-2"
                >Prototype</a>
              )}
            </motion.div>

            {/* Meta chips */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.roles?.map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-brand-100 text-plum text-xs px-3 py-1 border border-brand-300"
                >
                  {r}
                </span>
              ))}
              {project.tools?.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-saffron text-plum text-xs px-3 py-1"
                >
                  {t}
                </span>
              ))}
              {project.timeline && (
                <span className="rounded-full bg-brand-50 text-plum text-xs px-3 py-1 border border-brand-100">
                  {project.timeline}
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Body with sticky TOC on the right (desktop) */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            {project.problem && (
              <motion.section
                id="problem"
                {...fadeUp}
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-abril-fatface text-plum">
                  Problem
                </h2>
                <p className="mt-2 text-plum/80 font-asap-condensed whitespace-pre-line">
                  {project.problem}
                </p>
              </motion.section>
            )}

            {project.approach && (
              <motion.section
                id="approach"
                {...fadeUp}
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-abril-fatface text-plum">
                  Approach
                </h2>
                <p className="mt-2 text-plum/80 font-asap-condensed whitespace-pre-line">
                  {project.approach}
                </p>
              </motion.section>
            )}

            {project.outcome && (
              <motion.section
                id="outcome"
                {...fadeUp}
                className="scroll-mt-28 rounded-2xl border border-brand-200 bg-brand-50 p-5"
              >
                <h2 className="text-2xl font-abril-fatface text-plum">
                  Outcome
                </h2>
                <p className="mt-2 text-plum/80 font-asap-condensed whitespace-pre-line">
                  {project.outcome}
                </p>
              </motion.section>
            )}

            {project.gallery?.length > 0 && (
              <section id="gallery" className="scroll-mt-28">
                <motion.h2
                  {...fadeUp}
                  className="text-2xl font-abril-fatface text-plum mb-4"
                >
                  Gallery
                </motion.h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((src, i) => (
                    <motion.div
                      key={i}
                      {...fadeScale}
                      className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-50 border border-brand-100"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 rounded-2xl border border-brand-100 bg-offwhite p-5">
                <h3 className="text-plum font-abril-fatface text-xl">
                  On this page
                </h3>
                <nav className="mt-3 grid gap-2">
                  {toc.map(({ id, label }) => {
                    const isActive = activeId === id;
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={
                          "font-asap-condensed transition-colors " +
                          (isActive
                            ? "text-brand-700"
                            : "text-plum/75 hover:text-brand-700")
                        }
                      >
                        {label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </section>
    </article>
  );
}
