/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi! I'm Núria</h1>
        <p className="text-xl mb-6">UX Designer passionate about creating unique experiences.</p>
        <a href="#projects" className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          My projects
        </a>
      </motion.div>
    </section>
  );
}
