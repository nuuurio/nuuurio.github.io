import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-abril-fatface text-plum">Project not found</h1>
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
      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pt-14 pb-8">
        <Link
          to="/"
          className="inline-flex items-center text-plum/70 hover:text-brand-700"
        >
          ← Back to work
        </Link>

        <h1 className="mt-4 text-4xl md:text-5xl font-abril-fatface text-plum">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-plum/80 font-asap-condensed whitespace-pre-line">{project.description}</p>
        <a className="font-asap-condensed mt-3 max-w-3xl text-cyan-700 hover:text-cyan-900 transition-colors" target="_blank" href={`${project.projectLink}`}>Full Use Case</a>
        <a className="font-asap-condensed mt-3 max-w-3xl text-cyan-700 hover:text-cyan-900 transition-colors" target="_blank" href={`${project.prototypeLink}`}> Prototype</a>

        {/* Hero image with fixed ratio & crop */}
        <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/9] bg-brand-50 border border-brand-100">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Meta chips */}
        <div className="mt-6 flex flex-wrap gap-2">
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
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-4 pb-20 space-y-10">
        {project.problem && (
          <div>
            <h2 className="text-2xl font-abril-fatface text-plum">Problem</h2>
            <p className="mt-2 text-plum/80 font-asap-condensed whitespace-pre-line">{project.problem}</p>
          </div>
        )}

        {project.approach && (
          <div>
            <h2 className="text-2xl font-abril-fatface text-plum">Approach</h2>
            <p className="mt-2 text-plum/80 font-asap-condensed whitespace-pre-line">{project.approach}</p>
          </div>
        )}

        {project.outcome && (
          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
            <h2 className="text-2xl font-abril-fatface text-plum">Outcome</h2>
            <p className="mt-2 text-plum/80 font-asap-condensed whitespace-pre-line">{project.outcome}</p>
          </div>
        )}

        {project.gallery?.length > 0 && (
          <div>
            <h2 className="text-2xl font-abril-fatface text-plum mb-4">Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] bg-brand-50 border border-brand-100">
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
