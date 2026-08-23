import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">

          <span className="hero-eyebrow">
            KARL INSEL TOUR
          </span>

          <h1>
            Sansibar erleben.
            <span>Persönlich geplant.</span>
          </h1>

          <p className="hero-description">
            Entdecken Sie Sansibar mit persönlicher Betreuung, individuellen Reisen und deutschsprachiger Reiseleitung.
          </p>

          <div className="hero-actions">

            <Link to="/reisen" className="hero-primary-button">
              Reisen entdecken
              <FiArrowRight />
            </Link>

            <Link to="/kontakt" className="hero-secondary-button">
              Angebot anfragen
            </Link>

          </div>

          <div className="hero-trust">
            <span className="trust-line"></span>

            <span>
              Deutschsprachiger & lizenzierter Reiseleiter
            </span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#entdecken" className="hero-scroll">
        <span>Mehr entdecken</span>
        <span className="scroll-line"></span>
      </a>

    </section>
  );
}

export default Hero;