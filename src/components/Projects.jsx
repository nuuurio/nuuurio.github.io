/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fetchProjects } from "../data/fetchProjects";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-8 bg-saffron">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-abril-fatface text-4xl font-bold text-center mb-12 text-sand">Projects</h2>
        {projects === null && (
          <div className="text-center text-plum/60 mt-10 font-asap-condensed">
            <div className="mx-auto w-8 h-8 border-2 border-plum/30 border-t-brand rounded-full animate-spin mb-4"></div>
            <p>Loading your projects…</p>
          </div>
        )}
        {projects?.length === 0 && (
          <p className="text-center text-gray-500">
            There are no projects yet. Come back soon!
          </p>
        )}
        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Link to={`/projects/${project.slug}`}>
                <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-2xl font-abril-fatface mb-2 text-plum">{project.title}</h3>
                    <p className="lg:text-lg text-plum">{project.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
