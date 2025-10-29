/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-sand">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-abril-fatface text-4xl font-bold text-center mb-12 text-plum">Projects</h2>
        {projects.length === 0 ? (
          <p className="text-center text-gray-500">There are no projects yet. Come back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Link to={`/projects/${project.slug}`}>
                <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-2xl font-abril-fatface mb-2 text-plum">{project.title}</h3>
                    <p className="lg:text-lg text-plum">{project.thumbnail}</p>
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
