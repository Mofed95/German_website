import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiCompass,
  FiHeart,
  FiMapPin,
  FiShield,
} from "react-icons/fi";

import "./Safari.css";

function Safari() {
  const safariServices = [
    {
      icon: <FiCompass />,
      title: "Safari-Touren",
      text:
        "Entdecken Sie die faszinierende Tierwelt Tansanias mit einer individuell geplanten Safari.",
    },
    {
      icon: <FiMapPin />,
      title: "Festland-Safari",
      text:
        "Erleben Sie einen Tagesausflug von Sansibar zu einer Safari auf dem tansanischen Festland.",
    },
    {
      icon: <FiHeart />,
      title: "Individuelle Planung",
      text:
        "Teilen Sie uns Ihre Wünsche mit und wir planen Ihr persönliches Safari-Erlebnis.",
    },
    {
      icon: <FiShield />,
      title: "Persönliche Begleitung",
      text:
        "Profitieren Sie von persönlicher Betreuung und deutsch- oder englischsprachiger Reiseleitung.",
    },
  ];

  const safariFeatures = [
    "Private und individuell geplante Reise",
    "Deutschsprachige Reiseleitung",
    "Englischsprachige Reiseleitung",
    "Komfortable und klimatisierte Fahrzeuge",
    "Sichere und zuverlässige Transfers",
    "Persönlicher und freundlicher Service",
    "Lokale Ortskenntnis",
  ];

  /*
   * Major Tanzania safari destinations.
   *
   * These are presented as safari DESTINATIONS,
   * not as confirmed KARL INSEL TOUR packages.
   */
  const safariDestinations = [
    {
      name: "Serengeti National Park",
      subtitle: "Die große Wildnis",
      description:
        "Eine der bekanntesten Safari-Regionen Afrikas mit beeindruckenden Landschaften und einer außergewöhnlichen Tierwelt.",
      image: "/images/safari/serengeti.jpg",
    },
    {
      name: "Ngorongoro",
      subtitle: "Krater & Tierwelt",
      description:
        "Eine außergewöhnliche Landschaft mit einer beeindruckenden Konzentration verschiedener Wildtiere.",
      image: "/images/safari/ngorongoro.jpg",
    },
    {
      name: "Tarangire National Park",
      subtitle: "Elefanten & Baobabs",
      description:
        "Bekannt für seine großen Elefantenherden, charakteristischen Baobab-Bäume und abwechslungsreiche Landschaft.",
      image: "/images/safari/tarangire.jpg",
    },
    {
      name: "Lake Manyara National Park",
      subtitle: "See & Natur",
      description:
        "Eine abwechslungsreiche Region mit See, Waldgebieten, Landschaften und einer vielfältigen Tierwelt.",
      image: "/images/safari/lake-manyara.jpg",
    },
    {
      name: "Arusha National Park",
      subtitle: "Natur am Kilimanjaro",
      description:
        "Ein vielseitiges Naturgebiet mit Bergen, Wäldern und unterschiedlichen Landschaften.",
      image: "/images/safari/arusha.jpg",
    },
    {
      name: "Nyerere National Park",
      subtitle: "Flüsse & Wildnis",
      description:
        "Eine weitläufige Wildnis im Süden Tansanias mit beeindruckenden Landschaften und Flussgebieten.",
      image: "/images/safari/nyerere.jpg",
    },
    {
      name: "Ruaha National Park",
      subtitle: "Unberührte Wildnis",
      description:
        "Ein weitläufiges und weniger dicht besuchtes Safari-Gebiet mit beeindruckender Landschaft.",
      image: "/images/safari/ruaha.jpg",
    },
    {
      name: "Mikumi National Park",
      subtitle: "Safari im Süden",
      description:
        "Ein gut erreichbares Safari-Gebiet mit offenen Landschaften und vielfältiger Tierwelt.",
      image: "/images/safari/mikumi.jpg",
    },
    {
      name: "Katavi National Park",
      subtitle: "Abenteuer abseits der Wege",
      description:
        "Eine abgelegene Wildnis für Reisende, die ein besonders ursprüngliches Safari-Erlebnis suchen.",
      image: "/images/safari/katavi.jpg",
    },
    {
      name: "Mahale Mountains",
      subtitle: "Berge & Tanganyika-See",
      description:
        "Eine außergewöhnliche Kombination aus Berglandschaft, tropischer Natur und dem Tanganyika-See.",
      image: "/images/safari/mahale.jpg",
    },
  ];

  return (
    <main className="safari-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="safari-hero">

        <img
          src="/images/safari-hero.jpg"
          alt="Safari in Tansania"
          className="safari-hero-image"
        />

        <div className="safari-hero-overlay"></div>

        <div className="safari-hero-content">

          <span className="safari-eyebrow">
            SAFARI IN TANSANIA
          </span>

          <h1>
            Afrika
            <span>hautnah erleben.</span>
          </h1>

          <p>
            Entdecken Sie die faszinierende Tierwelt
            Tansanias und verbinden Sie Ihren
            Sansibar-Aufenthalt mit einem besonderen
            Safari-Erlebnis.
          </p>

          <Link
            to="/kontakt?tour=Festland-Safari"
            className="safari-hero-button"
          >
            Safari anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="safari-intro">

        <div className="safari-container">

          <div className="safari-intro-heading">

            <span className="safari-section-eyebrow">
              SAFARI-ERLEBNIS
            </span>

            <h2>
              Von Sansibar
              <span>in die Wildnis.</span>
            </h2>

          </div>

          <div className="safari-intro-text">

            <p>
              Karl Insel Tour bietet Safari-Touren für
              Reisende, die ihren Aufenthalt auf Sansibar
              mit einem besonderen Erlebnis auf dem
              tansanischen Festland verbinden möchten.
            </p>

            <p>
              Besonders interessant ist der{" "}
              <strong>
                Tagesausflug zur Festland-Safari
              </strong>
              . Ihre Reise kann dabei individuell nach
              Ihren Wünschen geplant werden.
            </p>

            <p>
              Senden Sie uns einfach Ihre Vorstellungen
              und wir erstellen Ihnen ein persönliches
              Angebot.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================
          SAFARI SERVICES
      ========================================= */}

      <section className="safari-experiences">

        <div className="safari-container">

          <div className="safari-section-header">

            <span className="safari-section-eyebrow">
              UNSERE SAFARI-ANGEBOTE
            </span>

            <h2>
              Safari
              <span>nach Ihren Wünschen.</span>
            </h2>

            <p>
              Wir planen Safari-Erlebnisse individuell
              und persönlich für unsere Gäste.
            </p>

          </div>

          <div className="safari-experiences-grid">

            {safariServices.map((service) => (
              <article
                className="safari-experience-card"
                key={service.title}
              >

                <div className="safari-experience-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          SAFARI DESTINATIONS
      ========================================= */}

      <section className="safari-destinations">

        <div className="safari-container">

          <div className="safari-section-header">

            <span className="safari-section-eyebrow">
              SAFARI-ZIELE IN TANSANIA
            </span>

            <h2>
              Entdecken Sie
              <span>Tansanias Wildnis.</span>
            </h2>

            <p>
              Tansania bietet eine außergewöhnliche
              Vielfalt an Safari-Landschaften. Entdecken
              Sie mögliche Reiseziele für Ihr persönliches
              Safari-Erlebnis.
            </p>

          </div>

          <div className="safari-destinations-grid">

            {safariDestinations.map((destination) => (
              <article
                className="safari-destination-card"
                key={destination.name}
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                />

                <div className="safari-destination-overlay">

                  <div>

                    <span>
                      {destination.subtitle}
                    </span>

                    <h3>
                      {destination.name}
                    </h3>

                    <p>
                      {destination.description}
                    </p>

                  </div>

                  <Link
                    to={`/kontakt?tour=${encodeURIComponent(
                      destination.name
                    )}`}
                    className="safari-destination-arrow"
                    aria-label={`${destination.name} anfragen`}
                  >
                    <FiArrowRight />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          FEATURED SAFARI
      ========================================= */}

      <section className="safari-featured">

        <div className="safari-featured-image">

          <img
            src="/images/safari/festland-safari.jpg"
            alt="Festland-Safari in Tansania"
            loading="lazy"
          />

        </div>

        <div className="safari-featured-content">

          <span className="safari-section-eyebrow">
            UNSER SAFARI-ERLEBNIS
          </span>

          <h2>
            Tagesausflug zur
            <span>Festland-Safari.</span>
          </h2>

          <p>
            Erleben Sie die tansanische Tierwelt bei
            einem besonderen Ausflug vom Inselparadies
            Sansibar auf das Festland.
          </p>

          <p>
            Die Reise wird individuell auf Ihre
            Vorstellungen abgestimmt. Teilen Sie uns
            einfach mit, was Sie sich wünschen.
          </p>

          <Link
            to="/kontakt?tour=Festland-Safari"
            className="safari-featured-button"
          >
            Diese Safari anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>

      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="safari-features">

        <div className="safari-container">

          <div className="safari-section-header">

            <span className="safari-section-eyebrow">
              IHRE VORTEILE
            </span>

            <h2>
              Persönlich.
              <span>Sicher. Komfortabel.</span>
            </h2>

          </div>

          <div className="safari-features-layout">

            <div className="safari-features-list">

              {safariFeatures.map((feature) => (
                <div
                  className="safari-feature-item"
                  key={feature}
                >
                  <span>
                    <FiCheck />
                  </span>

                  <p>{feature}</p>
                </div>
              ))}

            </div>

            <div className="safari-features-text">

              <p>
                Karl Insel Tour ist ein lokaler
                Reiseveranstalter auf Sansibar mit
                langjähriger Erfahrung im Tourismus.
              </p>

              <p>
                Deutsch- und englischsprachige
                Reiseleiter, komfortable klimatisierte
                Fahrzeuge und persönliche Betreuung
                gehören zu unserem Service.
              </p>

              <Link
                to="/ueber-uns"
                className="safari-features-link"
              >
                Mehr über uns
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          ZANZIBAR + SAFARI
      ========================================= */}

      <section className="safari-combination">

        <div className="safari-combination-image">

          <img
            src="/images/zanzibar-safari-combination.jpg"
            alt="Sansibar und Safari"
            loading="lazy"
          />

        </div>

        <div className="safari-combination-content">

          <span className="safari-section-eyebrow">
            INSEL & FESTLAND
          </span>

          <h2>
            Sansibar
            <span>plus Safari.</span>
          </h2>

          <p>
            Genießen Sie zunächst die Strände und
            besonderen Erlebnisse Sansibars und
            erweitern Sie Ihre Reise um ein
            Safari-Abenteuer auf dem Festland.
          </p>

          <Link
            to="/kontakt?tour=Festland-Safari"
            className="safari-combination-button"
          >
            Reise anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="safari-cta">

        <div className="safari-cta-content">

          <span className="safari-section-eyebrow">
            IHRE SAFARI BEGINNT HIER
          </span>

          <h2>
            Erzählen Sie uns von
            <span>Ihrem Safari-Wunsch.</span>
          </h2>

          <p>
            Senden Sie uns Ihre Vorstellungen und
            wir erstellen Ihnen gerne ein persönliches
            Angebot für Ihre Safari.
          </p>

          <Link
            to="/kontakt?tour=Festland-Safari"
            className="safari-cta-button"
          >
            Persönliches Angebot anfragen
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Safari;