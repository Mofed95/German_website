import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

import { tours } from "../data/tours.js";

import "./TourDetails.css";

function TourDetails() {
  const { slug } = useParams();

  const tour = tours.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    return (
      <main className="tour-not-found">

        <div>
          <span>KARL INSEL TOUR</span>

          <h1>
            Reise nicht gefunden
          </h1>

          <p>
            Diese Reise konnte leider nicht gefunden werden.
          </p>

          <Link to="/reisen">
            Zurück zu Reisen & Touren
          </Link>
        </div>

      </main>
    );
  }

  return (
    <main className="tour-details">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="tour-details-hero">

        <img
          src={tour.image}
          alt={tour.title}
          className="tour-details-hero-image"
        />

        <div className="tour-details-hero-overlay"></div>

        <div className="tour-details-hero-content">

          <Link
            to="/reisen"
            className="tour-back-link"
          >
            <FiArrowLeft />
            Alle Reisen
          </Link>

          <span className="tour-details-category">
            {tour.category}
          </span>

          <h1>{tour.title}</h1>

          <div className="tour-details-meta">

            <span>
              <FiMapPin />
              {tour.location}
            </span>

            <span>
              <FiClock />
              {tour.duration}
            </span>

          </div>

        </div>

      </section>

      {/* =========================================
          INTRO
      ========================================= */}
      <section className="tour-details-intro">

        <div className="tour-details-container">

          <div className="tour-details-intro-main">

            <span className="tour-section-eyebrow">
              IHR ERLEBNIS
            </span>

            <h2>
              Sansibar
              <span>entdecken.</span>
            </h2>

            <p>
              {tour.description}
            </p>

            <p>
              Lassen Sie sich von der Schönheit Sansibars
              inspirieren und erleben Sie diese Reise mit
              persönlicher Betreuung.
            </p>

          </div>

          <div className="tour-details-intro-side">

            <div className="tour-quick-info">

              <span>REISEINFORMATION</span>

              <div>
                <FiMapPin />
                <strong>{tour.location}</strong>
              </div>

              <div>
                <FiClock />
                <strong>{tour.duration}</strong>
              </div>

            </div>

            <Link
              to="/kontakt"
              className="tour-inquiry-button"
            >
              Reise anfragen
              <FiMessageCircle />
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================
          HIGHLIGHTS
      ========================================= */}
      <section className="tour-highlights">

        <div className="tour-details-container">

          <div className="tour-section-heading">

            <span className="tour-section-eyebrow">
              HIGHLIGHTS
            </span>

            <h2>
              Das erwartet
              <span>Sie.</span>
            </h2>

          </div>

          <div className="tour-highlights-grid">

            {tour.highlights.map((highlight) => (
              <div
                className="tour-highlight"
                key={highlight}
              >

                <span>
                  <FiCheck />
                </span>

                <p>{highlight}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          GALLERY
      ========================================= */}
      {tour.gallery?.length > 0 && (
        <section className="tour-details-gallery">

          <div className="tour-details-container">

            <div className="tour-section-heading">

              <span className="tour-section-eyebrow">
                IMPRESSIONEN
              </span>

              <h2>
                Erleben Sie
                <span>Sansibar.</span>
              </h2>

            </div>

            <div className="tour-gallery-grid">

              {tour.gallery.map((image, index) => (
                <div
                  className="tour-gallery-image"
                  key={`${image}-${index}`}
                >
                  <img
                    src={image}
                    alt={`${tour.title} ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* =========================================
          CTA
      ========================================= */}
      <section className="tour-details-cta">

        <div className="tour-details-cta-content">

          <span className="tour-section-eyebrow">
            IHRE REISE BEGINNT HIER
          </span>

          <h2>
            Möchten Sie dieses
            <span>Erlebnis entdecken?</span>
          </h2>

          <p>
            Kontaktieren Sie uns und erzählen Sie uns
            von Ihren Wünschen. Wir planen Ihre Reise
            persönlich mit Ihnen.
          </p>

          <Link
            to="/kontakt"
            className="tour-details-cta-button"
          >
            Persönliches Angebot anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default TourDetails;