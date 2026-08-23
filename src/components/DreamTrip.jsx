import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./DreamTrip.css";

function DreamTrip() {
  const highlights = [
    "Individuell nach Ihren Wünschen geplant",
    "Persönliche Betreuung vor Ort",
    "Deutschsprachige Reiseleitung",
    "Organisation von Flughafentransfers",
  ];

  return (
    <section className="dream-trip">

      <div className="dream-trip-container">

        {/* Image */}
        <div className="dream-trip-image">

          <img
            src="/images/sele2.jpeg"
            alt="Traumurlaub auf Sansibar"
          />

          <div className="dream-trip-image-caption">
            <span>Ihre Reise</span>
            <strong>Ihre Geschichte</strong>
          </div>

        </div>

        {/* Content */}
        <div className="dream-trip-content">

          <span className="dream-trip-eyebrow">
            IHRE REISE
          </span>

          <h2>
            Ihr Traumurlaub.
            <span>Unsere Planung.</span>
          </h2>

          <p className="dream-trip-intro">
            Sie haben Ihre eigenen Vorstellungen von einem perfekten
            Urlaub? Erzählen Sie uns von Ihren Wünschen – gemeinsam
            gestalten wir Ihre persönliche Reise auf Sansibar.
          </p>

          <div className="dream-trip-list">

            {highlights.map((highlight) => (
              <div
                className="dream-trip-item"
                key={highlight}
              >
                <span className="dream-trip-check">
                  <FiCheck />
                </span>

                <span>{highlight}</span>
              </div>
            ))}

          </div>

          <p className="dream-trip-text">
            Ob erholsamer Strandurlaub, Rundreise, Safari oder
            individuelle Ausflüge – wir planen Ihre Reise mit
            persönlicher Betreuung und lokaler Erfahrung.
          </p>

          <Link
            to="/kontakt"
            className="dream-trip-button"
          >
            Persönliches Angebot anfragen
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default DreamTrip;