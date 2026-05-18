import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">

      {/* SLIGHTLY MORE PADDING */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Adarsh P
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm">

          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-5 text-lg">

          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;