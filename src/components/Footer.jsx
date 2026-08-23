import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { label: "Startseite", path: "/" },
    { label: "Reisen & Touren", path: "/reisen" },
    { label: "Sansibar", path: "/sansibar" },
    { label: "Safari", path: "/safari" },
    { label: "Über uns", path: "/ueber-uns" },
    { label: "Kontakt", path: "/kontakt" },
  ];
  const experiences = [
    { label: "Stone Town", path: "/reisen/stone-town-tour" },
    { label: "Gewürzfarm", path: "/reisen/gewuerzfarm-tour" },
    { label: "Prison Island", path: "/reisen/prison-island" },
    { label: "Mnemba Island", path: "/reisen/mnemba-island" },
    { label: "Blue Safari", path: "/reisen/blue-safari" },
    { label: "Safari in Tansania", path: "/reisen/safari-tansania" },
  ];

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span>KARL</span>
              <strong>INSEL TOUR</strong>
            </Link>

            <p>
              Persönliche Reiseerlebnisse auf Sansibar für
              deutschsprachige Reisende.
            </p>

            <div className="footer-socials">

              <span className="footer-social-placeholder" aria-label="Instagram">
                <FiInstagram />
              </span>

              <span className="footer-social-placeholder" aria-label="Facebook">
                <FiFacebook />
              </span>

            </div>

          </div>

          {/* Navigation */}
          <div className="footer-column">

            <h3>Navigation</h3>

            {navItems.map((item) => (
              <Link to={item.path} key={item.path}>
                {item.label}
              </Link>
            ))}

          </div>

          {/* Experiences */}
          <div className="footer-column">

            <h3>Erlebnisse</h3>

            {experiences.map((experience) => (
              <Link to={experience.path} key={experience.path}>
                {experience.label}
              </Link>
            ))}

          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">

            <h3>Kontakt</h3>

            <span>
              Sansibar, Tansania
            </span>

            <a href="mailto:issashaame95@gmail.com">
              E-Mail senden
            </a>

            <a
              href="https://wa.me/255625287895"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
              <FiArrowUpRight />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © {currentYear} KARL INSEL TOUR. Alle Rechte vorbehalten.
          </span>

          <a
            className="footer-developer"
            href="https://wa.me/255625287895"
            target="_blank"
            rel="noreferrer"
          >
            Developed by: Mofed Digital Solution
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;