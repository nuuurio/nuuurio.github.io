import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-sand">
      <div className="max-w-6xl mx-auto font-asap-condensed">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}
