import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 font-sans text-gray-800">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
