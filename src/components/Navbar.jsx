import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">Ryze</div>

        {/* Desktop + Mobile links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          </li>
        </ul>

        {/* Hamburger icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

