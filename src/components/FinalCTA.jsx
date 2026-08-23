import { Link } from "react-router-dom";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="final-cta-background"></div>

      <div className="final-cta-overlay"></div>

      <div className="final-cta-content">

        <span className="final-cta-eyebrow">
          KARL INSEL TOUR
        </span>

        <h2>
          Bereit für
          <span>Sansibar?</span>
        </h2>

        <p>
          Erzählen Sie uns von Ihrem Traumurlaub.
          Gemeinsam planen wir Ihre persönliche Reise
          nach Sansibar.
        </p>

        <div className="final-cta-actions">

          <Link
            to="/reisen"
            className="final-cta-primary"
          >
            Reisen entdecken
            <FiArrowRight />
          </Link>

          <Link
            to="/kontakt"
            className="final-cta-secondary"
          >
            <FiMessageCircle />
            Persönliches Angebot
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;