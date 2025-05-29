/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-100">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">About me:</h2>
        <p className="text-lg leading-relaxed">
          I am a creative, dynamic, and highly adaptable professional with a passion for generating innovative, 
          out-of-the-box ideas. As a fast learner, I thrive in collaborative environments and enjoy connecting with 
          people to drive meaningful interactions.

          While I strive for structure in my day-to-day activities, my focus is always on achieving the objectives and 
          goals I set for myself, ensuring high-quality results. My ability to balance creativity with practical 
          problem-solving enables me to excel in dynamic and fast-paced environments.
        </p>
      </motion.div>
    </section>
  );
}
