/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-left bg-gradient-to-b from-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display text-5xl font-bold mb-4">UX with a twist of code and AI.</h1>
        <p className="font-sans text-xl mb-6">Because understanding how things are built makes designing them smarter, faster, and more human.</p>
        <p className="font-sans text-m mb-6">I'm Núria, btw</p>
        <a href="#projects" className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          My projects
        </a>
      </motion.div>
    </section>
  );
}
