import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

import "./KarlAbout.css";

function KarlAbout() {
  // GitHub Pages / Vite-safe image path
  const image = (path) =>
    `${import.meta.env.BASE_URL}images/${path}`;

  const qualities = [
    "Deutschsprachige Reiseleitung",
    "Lizenzierter Reiseleiter",
    "Langjährige Erfahrung im Tourismus",
    "Lokale Ortskenntnis auf Sansibar",
  ];

  return (
    <section className="karl-about">

      <div className="karl-about-container">

        {/* =========================================
            LEFT — IMAGE
        ========================================= */}

        <div className="karl-about-visual">

          <div className="karl-about-image">

            <img
              src={image("sele3.jpeg")}
              alt="Karl - Ihr Reiseleiter auf Sansibar"
              loading="lazy"
            />

          </div>

          <div className="karl-about-badge">

            <span>
              Ihr Gastgeber
            </span>

            <strong>
              Karl
            </strong>

          </div>

        </div>


        {/* =========================================
            RIGHT — CONTENT
        ========================================= */}

        <div className="karl-about-content">

          <span className="karl-about-eyebrow">
            PERSÖNLICH FÜR SIE DA
          </span>

          <h2>
            Lernen Sie Karl
            <span>kennen.</span>
          </h2>

          <p className="karl-about-lead">
            Hallo und herzlich willkommen!
          </p>

          <p>
            Mein Name ist Karl. Ich bin ein deutschsprachiger und
            lizenzierter Reiseleiter auf Sansibar und arbeite mit
            Gästen aus Deutschland, Österreich und der Schweiz.
          </p>

          <p>
            Gemeinsam mit meinem erfahrenen Team möchte ich Ihnen
            einen unvergesslichen Urlaub auf Sansibar ermöglichen.
            Dabei legen wir besonderen Wert auf persönliche Betreuung,
            verständliche Erklärungen und eine entspannte Reise.
          </p>


          {/* =========================================
              QUALITIES
          ========================================= */}

          <div className="karl-qualities">

            {qualities.map((quality) => (

              <div
                className="karl-quality"
                key={quality}
              >

                <span>
                  <FiCheck />
                </span>

                <p>
                  {quality}
                </p>

              </div>

            ))}

          </div>


          {/* =========================================
              FOOTER
          ========================================= */}

          <div className="karl-about-footer">

            <Link
              to="/ueber-uns"
              className="karl-about-link"
            >
              Mehr über Karl Sansibar
              <FiArrowUpRight />
            </Link>

            <div className="karl-signature">

              <span>
                Beste Grüße aus Sansibar
              </span>

              <strong>
                Karl
              </strong>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default KarlAbout;