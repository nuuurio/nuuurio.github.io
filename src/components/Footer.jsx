/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaLinkedin, FaDribbble, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-10 px-8 bg-gray-800 text-white">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4">Vols treballar junts? Envia'm un missatge!</p>
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a href="https://linkedin.com/nuuurio" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          {/* <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaDribbble />
          </a> */}
          <a href="mailto:nuria174@hotmail.com" className="hover:text-gray-400">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Núria Balaguer. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
