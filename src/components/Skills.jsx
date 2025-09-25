/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function Skills() {
  const skills = ["Figma", "Sketch", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Usability Testing"];

  return (
    <section id="skills" className="py-20 px-8 bg-white">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-saffron text-plum px-4 py-2 rounded-full lg:text-sm xl:text-lg">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
