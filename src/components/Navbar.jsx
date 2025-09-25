import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className={`px-6 py-3 flex justify-between items-center text-sm font-medium transition-all duration-300 ${scrolled ? "bg-cyan-500/50 rounded-3xl shadow-sm border border-gray-200 backdrop-blur-sm shadow-md" : "bg-sand/75"}`}>
          <div className={`2xl:text-2xl xl:text-xl lg:text-lg font-bold font-abril-fatface px-3 ${scrolled ? "text-white" : "text-cyan-700"}`}>Núria Balaguer</div>
          <div className="hidden md:flex gap-6 px-3">
            <a href="#home" className={`font-asap-condensed 2xl:text-2xl xl:text-xl lg:text-lg ${scrolled ? "text-white hover:text-saffron transition-colors" : "text-cyan-700 hover:text-cyan-900 transition-colors"}`}>Home</a>
            <a href="#projects" className={`font-asap-condensed 2xl:text-2xl xl:text-xl lg:text-lg ${scrolled ? "text-white hover:text-saffron transition-colors" : "text-cyan-700 hover:text-cyan-900 transition-colors"}`}>Work</a>
            <a href="#about" className={`font-asap-condensed 2xl:text-2xl xl:text-xl lg:text-lg ${scrolled ? "text-white hover:text-saffron transition-colors" : "text-cyan-700 hover:text-cyan-900 transition-colors"}`}>About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
