import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { tours } from "../data/tours.js";
import "./PopularTours.css";

function PopularTours() {
  return (
    <section className="popular-tours">

      <div className="popular-tours-container">

        {/* Header */}
        <div className="popular-tours-header">

          <div>
            <span className="tours-eyebrow">
              KARL INSEL TOUR
            </span>

            <h2>
              Unsere beliebtesten
              <span>Erlebnisse</span>
            </h2>
          </div>

          <div className="tours-header-text">
            <p>
              Von historischen Gassen bis zu türkisblauem Wasser –
              entdecken Sie Sansibar auf Ihre persönliche Art.
            </p>

            <Link to="/reisen" className="all-tours-link">
              Alle Reisen entdecken
              <FiArrowUpRight />
            </Link>
          </div>

        </div>

        {/* Tours */}
        <div className="popular-tours-grid">

          {tours.map((tour, index) => (
            <Link
              to="/reisen"
              className={`tour-card tour-card-${index + 1}`}
              key={tour.title}
            >

              <img
                src={tour.image}
                alt={tour.title}
                className="tour-card-image"
              />

              <div className="tour-card-overlay"></div>

              <div className="tour-card-content">

                <span className="tour-card-subtitle">
                  {tour.subtitle}
                </span>

                <h3>{tour.title}</h3>

                <p>{tour.description}</p>

                <span className="tour-card-link">
                  Erlebnis entdecken
                  <FiArrowUpRight />
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularTours;