import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-slate-800">
   
    <div className="bg-slate-800 text-white flex w-full items-center justify-between px-8 py-6 ">
      <Link to="/" className="font-bold text-sm md:text-xl">
        Bibek Kunwar
      </Link>

      {/* react route links */}

      <nav className="hidden md:flex gap-4 text-md md:text-base ">
        <Link className="hover:text-gray-400 transition-colors " to="/">
          Home
        </Link>
        <Link className="hover:text-gray-400 transition-colors " to="/about">
          about
        </Link>
        <Link className="hover:text-gray-400 transition-colors " to="/projects">
          projects
        </Link>
        <Link className="hover:text-gray-400 transition-colors " to="/contact">
          contact
        </Link>
      </nav>

     <button
  className="md:hidden text-white text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>


    </div>

     

      {menuOpen && (
        <div className="md:hidden bg-slate-800 flex flex-col items-center gap-4 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}

 </div>
  );
}

export default Navbar;
