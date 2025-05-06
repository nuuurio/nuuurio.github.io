import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
