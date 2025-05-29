/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-100">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center">
          <img
            src="/profile_photo.jpg"
            alt="Núria Balaguer"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About me:</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Hi! I'm <strong>Núria Balaguer</strong>, a passionate <strong>UX/UI Designer</strong> dedicated to crafting
            thoughtful, intuitive, and emotionally engaging digital experiences.
            <br /><br />
            With a background in <strong>web development</strong> and a love for clean, human-centered interfaces, I bridge
            the gap between design and technology to create solutions that are both beautiful and functional. I thrive on
            collaboration and curiosity—whether it's exploring a new prototyping tool, digging into user behavior insights,
            or sketching out ideas before they become pixels.
            <br /><br />
            I believe design is more than aesthetics—it’s about building <strong>meaningful interactions</strong> that
            empower users. My experience ranges from wireframing and usability testing to building scalable design systems
            and aligning teams around a shared vision.
            <br /><br />
            Currently based in <strong>Cambridge, UK</strong>, I'm always on the lookout for inspiring projects, creative
            collaborators, and new challenges.
            <br /><br />
            When I’m not designing, you’ll find me discovering cozy cafes, getting lost in a book, or illustrating for fun.
            <br /><br />
            <em>Let’s create something beautiful together ✨</em>
          </p>
        </div>
      </motion.div>
    </section>
  );
}