import { Link } from "react-router-dom";
import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>Ryze</h3>
          <p>AI-powered ad optimization for modern teams.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Contact</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ryze. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
