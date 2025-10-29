import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { About } from './About';
import { Footer } from './Footer';

export function Home() {
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
