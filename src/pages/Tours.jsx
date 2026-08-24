import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import { tours, tourCategories } from "../data/tours.js";

import "./Tours.css";

function Tours() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredTours = useMemo(() => {
    if (activeCategory === "Alle") {
      return tours;
    }

    return tours.filter(
      (tour) => tour.category === activeCategory
    );
  }, [activeCategory]);

  // GitHub Pages / Vite image base path
  const image = (path) =>
    `${import.meta.env.BASE_URL}images/${path}`;

  return (
    <main className="tours-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="tours-hero">

        <img
          src={image("stone-town3.jpg")}
          alt="Sansibar Reise und Tour"
          className="tours-hero-image"
        />

        <div className="tours-hero-overlay"></div>

        <div className="tours-hero-content">

          <span className="tours-hero-eyebrow">
            KARL INSEL TOUR
          </span>

          <h1>
            Reisen &amp;
            <span>Erlebnisse.</span>
          </h1>

          <p>
            Entdecken Sie Sansibar mit persönlichen Touren,
            besonderen Erlebnissen und deutschsprachiger
            Reiseleitung.
          </p>

        </div>

      </section>


      {/* =========================================
          TOUR CATALOGUE
      ========================================= */}

      <section className="tours-catalogue">

        <div className="tours-container">

          {/* Header */}

          <div className="tours-catalogue-header">

            <div>

              <span className="tours-section-eyebrow">
                IHRE AUSWAHL
              </span>

              <h2>
                Entdecken Sie
                <span>Ihre Reise.</span>
              </h2>

            </div>

            <p>
              Wählen Sie eine Kategorie und entdecken Sie
              unsere Erlebnisse auf Sansibar und in Tansania.
            </p>

          </div>


          {/* Filters */}

          <div className="tour-filters">

            {tourCategories.map((category) => (

              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "tour-filter active"
                    : "tour-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>


          {/* Results */}

          <div className="tour-results">

            <div className="tour-results-count">

              {filteredTours.length}{" "}

              {filteredTours.length === 1
                ? "Erlebnis"
                : "Erlebnisse"}

            </div>


            <div className="tours-grid">

              {filteredTours.map((tour) => (

                <article
                  className="tour-list-card"
                  key={tour.id}
                >

                  {/* Tour image */}

                  <div className="tour-list-image">

                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />

                    <span className="tour-category">
                      {tour.category}
                    </span>


                    <Link
                      to={`/reisen/${tour.slug}`}
                      className="tour-card-arrow"
                      aria-label={`${tour.title} entdecken`}
                    >
                      <FiArrowUpRight />
                    </Link>

                  </div>


                  {/* Tour content */}

                  <div className="tour-list-content">

                    <div className="tour-location">
                      <FiMapPin />
                      {tour.location}
                    </div>

                    <h3>
                      {tour.title}
                    </h3>

                    <p>
                      {tour.shortDescription}
                    </p>


                    <div className="tour-list-footer">

                      <span>
                        {tour.duration}
                      </span>

                      <Link
                        to={`/reisen/${tour.slug}`}
                      >
                        Entdecken
                        <FiArrowUpRight />
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CUSTOM TRIP CTA
      ========================================= */}

      <section className="tours-custom">

        <div className="tours-custom-image">

          <img
            src={image("nungwi.jpg")}
            alt="Individuelle Reise nach Sansibar"
            loading="lazy"
          />

        </div>


        <div className="tours-custom-content">

          <span className="tours-section-eyebrow">
            NICHT DAS RICHTIGE DABEI?
          </span>

          <h2>
            Ihre Reise.
            <span>Ihre Wünsche.</span>
          </h2>

          <p>
            Sie möchten Ihre Reise ganz individuell gestalten?
            Erzählen Sie uns, was Sie sich vorstellen – wir
            helfen Ihnen bei der Planung.
          </p>

          <Link
            to="/kontakt"
            className="tours-custom-button"
          >
            Individuelle Reise anfragen
            <FiArrowUpRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Tours;