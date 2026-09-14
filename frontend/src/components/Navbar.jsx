import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Iffah<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </nav>
  );
}

export default Navbar;
