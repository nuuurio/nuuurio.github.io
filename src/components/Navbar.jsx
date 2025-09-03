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
        <div className={`bg-white rounded-3xl shadow-sm border border-gray-200 px-6 py-3 flex justify-between items-center text-sm font-medium text-gray-800 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white/80"}`}>
          <div className="text-lg font-bold">Núria Balaguer</div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Work</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
