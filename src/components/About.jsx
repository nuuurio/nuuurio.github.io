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
        <h2 className="text-4xl font-bold mb-6">Sobre mi</h2>
        <p className="text-lg leading-relaxed">
          Sóc una UX Designer apassionada per entendre els usuaris i crear experiències digitals úniques. 
          Experiència en user research, wireframes, prototips i test de usabilitat.
        </p>
      </motion.div>
    </section>
  );
}
