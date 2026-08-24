import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMapPin,
  FiCompass,
  FiSun,
  FiHeart,
} from "react-icons/fi";

import "./Sansibar.css";

function Sansibar() {
  // GitHub Pages / Vite-safe image path
  const image = (path) =>
    `${import.meta.env.BASE_URL}images/${path}`;

  const highlights = [
    {
      icon: <FiMapPin />,
      title: "Stone Town",
      text:
        "Historische Gassen, beeindruckende Architektur und die kulturelle Vielfalt Sansibars.",
    },
    {
      icon: <FiSun />,
      title: "Traumstrände",
      text:
        "Weiße Sandstrände, Palmen und türkisblaues Wasser entlang der Küste.",
    },
    {
      icon: <FiCompass />,
      title: "Meer & Inseln",
      text:
        "Entdecken Sie die faszinierende Welt rund um Mnemba, Prison Island und den Indischen Ozean.",
    },
    {
      icon: <FiHeart />,
      title: "Kultur & Tradition",
      text:
        "Erleben Sie die Gewürzkultur, lokale Traditionen und das besondere Lebensgefühl der Insel.",
    },
  ];

  const places = [
    {
      title: "Stone Town",
      image: image("stone-town.png"),
      description: "Geschichte & Kultur",
    },
    {
      title: "Nungwi",
      image: image("nungwi.jpg"),
      description: "Strand & Meer",
    },
    {
      title: "Paje",
      image: image("paje.png"),
      description: "Küste & Atmosphäre",
    },
    {
      title: "Kizimkazi",
      image: image("kizimkazi.jpg"),
      description: "Meer & Delfine",
    },
  ];

  return (
    <main className="sansibar-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="sansibar-hero">

        <img
          src={image("ozean.png")}
          alt="Sansibar Strand und Indischer Ozean"
          className="sansibar-hero-image"
        />

        <div className="sansibar-hero-overlay"></div>

        <div className="sansibar-hero-content">

          <span className="sansibar-eyebrow">
            KARL INSEL TOUR
          </span>

          <h1>
            Willkommen
            <span>auf Sansibar.</span>
          </h1>

          <p>
            Die Insel der Gewürze, des türkisblauen Meeres
            und unvergesslicher Erlebnisse.
          </p>

          <a
            href="#entdecken"
            className="sansibar-hero-button"
          >
            Sansibar entdecken
            <FiArrowRight />
          </a>

        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section
        className="sansibar-intro"
        id="entdecken"
      >

        <div className="sansibar-container">

          <div className="sansibar-intro-header">

            <span className="sansibar-section-eyebrow">
              DIE INSEL ENTDECKEN
            </span>

            <h2>
              Mehr als nur ein
              <span>Traumziel.</span>
            </h2>

          </div>

          <div className="sansibar-intro-text">

            <p>
              Sansibar verbindet traumhafte Strände mit einer
              faszinierenden Geschichte, einzigartiger Natur und
              einer lebendigen Kultur.
            </p>

            <p>
              Entdecken Sie die Insel auf Ihre persönliche Art –
              von den historischen Straßen Stone Towns bis zu den
              türkisblauen Gewässern des Indischen Ozeans.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          HIGHLIGHTS
      ========================================= */}

      <section className="sansibar-highlights">

        <div className="sansibar-container">

          <div className="sansibar-section-header">

            <span className="sansibar-section-eyebrow">
              WAS SANSIBAR BESONDERS MACHT
            </span>

            <h2>
              Eine Insel voller
              <span>Erlebnisse.</span>
            </h2>

          </div>

          <div className="sansibar-highlights-grid">

            {highlights.map((item) => (

              <article
                className="sansibar-highlight-card"
                key={item.title}
              >

                <div className="sansibar-highlight-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          PLACES
      ========================================= */}

      <section className="sansibar-places">

        <div className="sansibar-container">

          <div className="sansibar-section-header places-header">

            <div>

              <span className="sansibar-section-eyebrow">
                DIE SCHÖNSTEN ORTE
              </span>

              <h2>
                Entdecken Sie
                <span>Sansibar.</span>
              </h2>

            </div>

            <p>
              Von historischen Städten bis zu paradiesischen
              Küsten – jeder Ort erzählt seine eigene Geschichte.
            </p>

          </div>

          <div className="sansibar-places-grid">

            {places.map((place) => (

              <article
                className="sansibar-place-card"
                key={place.title}
              >

                <img
                  src={place.image}
                  alt={place.title}
                  loading="lazy"
                />

                <div className="sansibar-place-overlay">

                  <div>

                    <span>
                      {place.description}
                    </span>

                    <h3>
                      {place.title}
                    </h3>

                  </div>

                  <div className="sansibar-place-arrow">
                    <FiArrowRight />
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          EXPERIENCE
      ========================================= */}

      <section className="sansibar-experience">

        <div className="sansibar-experience-image">

          <img
            src={image("ozean.png")}
            alt="Dhow auf dem Indischen Ozean"
            loading="lazy"
          />

        </div>

        <div className="sansibar-experience-content">

          <span className="sansibar-section-eyebrow">
            SANSIBAR ERLEBEN
          </span>

          <h2>
            Das Meer.
            <span>Die Insel.</span>
            Das Erlebnis.
          </h2>

          <p>
            Entdecken Sie die Küste Sansibars bei individuellen
            Ausflügen und erleben Sie die besondere Verbindung
            von Meer, Natur und Inselkultur.
          </p>

          <Link
            to="/reisen"
            className="sansibar-experience-button"
          >
            Reisen &amp; Touren entdecken
            <FiArrowRight />
          </Link>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="sansibar-cta">

        <div className="sansibar-cta-content">

          <span className="sansibar-section-eyebrow">
            IHRE REISE BEGINNT HIER
          </span>

          <h2>
            Bereit für
            <span>Sansibar?</span>
          </h2>

          <p>
            Lassen Sie uns gemeinsam Ihre persönliche
            Sansibar-Reise planen.
          </p>

          <Link
            to="/kontakt"
            className="sansibar-cta-button"
          >
            Persönliches Angebot anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Sansibar;