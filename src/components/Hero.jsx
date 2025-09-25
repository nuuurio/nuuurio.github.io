/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Button from "./Button";

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-left bg-sand">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-abril-fatface text-plum 2xl:text-9xl lg:text-6xl font-bold mb-6">UX with a twist of code and AI.</h1>
        <p className="font-asap-condensed text-plum/70 2xl:text-5xl lg:text-2xl mb-6">Because knowing how things are built makes designing them smarter, faster, and more human.</p>
        <p className="font-asap-condensed text-plum/70 2xl:text-4xl lg:text-2xl mb-6">I’m <strong>Núria</strong> — nice to meet you!</p>
        <div className="flex justify-self-center my-20">
          <Button variant="primary" className="mx-4">Go to my projects</Button>
          <Button variant="secondary" className="mx-4">Download my CV</Button>
        </div>
      </motion.div>
    </section>
  );
}
