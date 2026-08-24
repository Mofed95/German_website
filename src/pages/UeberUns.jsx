import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiCompass,
  FiHeart,
  FiMapPin,
  FiShield,
  FiUsers,
} from "react-icons/fi";

import "./UeberUns.css";

function UeberUns() {
  // GitHub Pages / Vite-safe image path
  const image = (path) =>
    `${import.meta.env.BASE_URL}images/${path}`;

  const services = [
    "Private Rundreisen",
    "Tagestouren",
    "Safari-Touren",
    "Wandertouren",
    "Abenteuertouren",
    "Kulturtouren",
    "Deutschsprachige Reiseleitung",
    "Hotelbuchungen",
    "Flughafentransfers",
    "Sansibar-Ausflüge",
  ];

  const experiences = [
    "Stone Town Tour",
    "Gewürzfarm-Tour",
    "Gefängnisinsel-Tour",
    "Dorftour Sansibar",
    "Schnorcheltour auf der Mnemba-Insel",
    "Blue Safari Tour",
    "Delfintour in Kizimkazi",
    "Jozani-Wald-Tour",
    "Besuch des Rock Restaurants",
    "Festland-Safari",
    "Kurztrip Sansibar",
    "Panorama Sansibar",
  ];

  const reasons = [
    {
      icon: <FiCompass />,
      title: "Langjährige Erfahrung",
      text:
        "Langjährige Erfahrung im Tourismus und umfassende Kenntnisse über Sansibar.",
    },
    {
      icon: <FiUsers />,
      title: "Deutsch & Englisch",
      text:
        "Deutsch- und englischsprachige Reiseleiter für eine verständliche und entspannte Reise.",
    },
    {
      icon: <FiShield />,
      title: "Sicher & zuverlässig",
      text:
        "Sichere und zuverlässige Transfers sowie komfortable und klimatisierte Fahrzeuge.",
    },
    {
      icon: <FiHeart />,
      title: "Persönlicher Service",
      text:
        "Freundliche und persönliche Betreuung – von der Ankunft bis zur Abreise.",
    },
    {
      icon: <FiMapPin />,
      title: "Lokale Ortskenntnis",
      text:
        "Als lokaler Reiseveranstalter kennen wir Sansibar und seine besonderen Orte.",
    },
    {
      icon: <FiClock />,
      title: "Jederzeit erreichbar",
      text:
        "Wir sind für Ihre Fragen und Reiseplanung jederzeit erreichbar.",
    },
  ];

  return (
    <main className="ueber-uns-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="ueber-uns-hero">

        <img
          src={image("forodhani-garden.png")}
          alt="Sansibar Küste"
          className="ueber-uns-hero-image"
        />

        <div className="ueber-uns-hero-overlay"></div>

        <div className="ueber-uns-hero-content">

          <span className="ueber-uns-eyebrow">
            ÜBER KARL INSEL TOUR
          </span>

          <h1>
            Sansibar
            <span>persönlich erleben.</span>
          </h1>

          <p>
            Ihr Reisespezialist für private und
            deutschsprachige Reisen auf Sansibar
            und in Tansania.
          </p>

        </div>

      </section>


      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="ueber-uns-intro">

        <div className="ueber-uns-container">

          <div className="ueber-uns-intro-image">

            <img
              src={image("stone-town-experience.jpeg")}
              alt="Karl – deutschsprachiger Reiseleiter auf Sansibar"
            />

            <div className="ueber-uns-image-caption">
              <strong>Karl</strong>
              <span>Gründer &amp; lizenzierter Reiseleiter</span>
            </div>

          </div>

          <div className="ueber-uns-intro-content">

            <span className="ueber-uns-section-eyebrow">
              UNSER UNTERNEHMEN
            </span>

            <h2>
              Ihr lokaler
              <span>Reisespezialist.</span>
            </h2>

            <p>
              Karl Insel Tour ist ein lokaler Reiseveranstalter
              auf Sansibar und spezialisiert auf private
              Rundreisen mit deutsch- oder
              englischsprachiger Reiseleitung.
            </p>

            <p>
              Unser erfahrenes Team bietet Ihnen individuelle
              Touren und unvergessliche Erlebnisse auf Sansibar
              und dem tansanischen Festland.
            </p>

            <p>
              Wenn Sie Ihre Reise individuell gestalten
              möchten, senden Sie uns einfach Ihre Wünsche
              und Ideen. Gemeinsam planen wir Ihren
              persönlichen Traumurlaub auf Sansibar.
            </p>

            <div className="ueber-uns-intro-signature">
              <span>Beste Grüße aus Sansibar</span>
              <strong>Karl</strong>
              <small>Gründer &amp; lizenzierter Reiseleiter</small>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          OWNER MESSAGE
      ========================================= */}

      <section className="ueber-uns-owner">

        <div className="ueber-uns-owner-image">

          <img
            src={image("sele-jozani.png")}
            alt="Deutschsprachige Reisebegleitung auf Sansibar"
            loading="lazy"
          />

        </div>

        <div className="ueber-uns-owner-content">

          <span className="ueber-uns-section-eyebrow">
            NACHRICHT VOM EIGENTÜMER
          </span>

          <h2>
            Hallo und
            <span>herzlich willkommen!</span>
          </h2>

          <blockquote>
            „Mein Name ist Karl. Ich bin ein
            deutschsprachiger und lizenzierter Reiseleiter
            auf Sansibar.“
          </blockquote>

          <p>
            Wir richten uns besonders an Gäste, die Deutsch
            sprechen und ihre Ausflüge und Rundreisen gerne
            mit einem deutschsprachigen Reiseleiter erleben
            möchten.
          </p>

          <p>
            Wenn Sie Wert auf persönliche Betreuung,
            verständliche Erklärungen und eine entspannte
            Reise in deutscher Sprache legen, sind Sie bei
            uns genau richtig.
          </p>

          <p>
            Gemeinsam mit meinem erfahrenen Team organisiere
            ich unvergessliche Reisen auf Sansibar und dem
            tansanischen Festland.
          </p>

          <Link
            to="/kontakt"
            className="ueber-uns-owner-button"
          >
            Persönlich anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>


      {/* =========================================
          SERVICES
      ========================================= */}

      <section className="ueber-uns-services">

        <div className="ueber-uns-container">

          <div className="ueber-uns-section-header">

            <span className="ueber-uns-section-eyebrow">
              UNSERE LEISTUNGEN
            </span>

            <h2>
              Alles für Ihren
              <span>Traumurlaub.</span>
            </h2>

            <p>
              Von der individuellen Rundreise bis zum
              Flughafentransfer – wir begleiten Sie bei
              der Planung Ihres Aufenthalts.
            </p>

          </div>

          <div className="ueber-uns-services-grid">

            {services.map((service, index) => (
              <div
                className="ueber-uns-service-item"
                key={service}
              >

                <span className="ueber-uns-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="ueber-uns-service-check">
                  <FiCheck />
                </span>

                <span>{service}</span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          EXPERIENCES
      ========================================= */}

      <section className="ueber-uns-experiences">

        <div className="ueber-uns-container">

          <div className="ueber-uns-section-header">

            <span className="ueber-uns-section-eyebrow">
              SANSIBAR ENTDECKEN
            </span>

            <h2>
              Besondere
              <span>Erlebnisse.</span>
            </h2>

            <p>
              Entdecken Sie die Vielfalt Sansibars mit
              unseren geführten Ausflügen und Touren.
            </p>

          </div>

          <div className="ueber-uns-experiences-grid">

            {experiences.map((experience) => (
              <div
                className="ueber-uns-experience-item"
                key={experience}
              >
                <FiCheck />
                <span>{experience}</span>
              </div>
            ))}

          </div>

          <div className="ueber-uns-experiences-link">

            <Link to="/reisen">
              Alle Reisen &amp; Touren entdecken
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="ueber-uns-reasons">

        <div className="ueber-uns-container">

          <div className="ueber-uns-section-header">

            <span className="ueber-uns-section-eyebrow">
              WARUM SIE UNS WÄHLEN SOLLTEN
            </span>

            <h2>
              Persönlich.
              <span>Erfahren.</span>
            </h2>

          </div>

          <div className="ueber-uns-reasons-grid">

            {reasons.map((reason) => (
              <article
                className="ueber-uns-reason-card"
                key={reason.title}
              >

                <div className="ueber-uns-reason-icon">
                  {reason.icon}
                </div>

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          OUR PROMISE
      ========================================= */}

      <section className="ueber-uns-promise">

        <div className="ueber-uns-container">

          <div className="ueber-uns-promise-content">

            <span className="ueber-uns-section-eyebrow">
              UNSER ZIEL
            </span>

            <h2>
              Ihr Urlaub.
              <span>Ihre Wünsche.</span>
            </h2>

            <p>
              Unser Ziel ist es, Ihren Urlaub ganz nach
              Ihren Wünschen zu gestalten. Dank unserer
              langjährigen Erfahrung im Tourismus bieten
              wir Ihnen persönlichen Service – von der
              Abholung am Flughafen bis zu Ihrer Abreise.
            </p>

            <p>
              Ob Strandurlaub, Rundreise, Safari oder
              individuelle Ausflüge – wir planen Ihren
              Traumurlaub mit großer Sorgfalt und
              Leidenschaft.
            </p>

            <Link
              to="/kontakt"
              className="ueber-uns-promise-button"
            >
              Persönliches Angebot anfragen
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="ueber-uns-cta">

        <div className="ueber-uns-cta-content">

          <span className="ueber-uns-section-eyebrow">
            KARL INSEL TOUR
          </span>

          <h2>
            Wir freuen uns,
            <span>Sie auf Sansibar zu begrüßen.</span>
          </h2>

          <p>
            Senden Sie uns Ihre Wünsche und Vorstellungen
            von Ihrem Traumurlaub. Wir erstellen Ihnen
            gerne ein persönliches Angebot.
          </p>

          <Link
            to="/kontakt"
            className="ueber-uns-cta-button"
          >
            Reise planen
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default UeberUns;