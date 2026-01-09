import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* Logo */}
        <Link to="/" className="logo">
          Ryze
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        {/* CTA */}
        <Link to="/pricing" className="btn-primary nav-cta">
          Book a Demo
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
