import {
  FiGlobe,
  FiCompass,
  FiHeart,
  FiMapPin,
  FiTruck,
  FiShield
} from "react-icons/fi";

import "./WhyKarl.css";

function WhyKarl() {
  const advantages = [
    {
      icon: <FiGlobe />,
      title: "Deutschsprachige Reiseleitung",
      text: "Erleben Sie Sansibar mit einem deutschsprachigen und lizenzierten Reiseleiter."
    },
    {
      icon: <FiCompass />,
      title: "Individuell geplant",
      text: "Ihre Reise wird nach Ihren persönlichen Wünschen und Vorstellungen gestaltet."
    },
    {
      icon: <FiHeart />,
      title: "Persönlicher Service",
      text: "Wir begleiten Sie persönlich und sorgen für eine entspannte Reise."
    },
    {
      icon: <FiMapPin />,
      title: "Lokale Ortskenntnis",
      text: "Als lokaler Reiseveranstalter kennen wir Sansibar und seine besonderen Orte."
    },
    {
      icon: <FiTruck />,
      title: "Komfortable Fahrzeuge",
      text: "Für Ihre Touren und Transfers stehen komfortable und klimatisierte Fahrzeuge zur Verfügung."
    },
    {
      icon: <FiShield />,
      title: "Sicher & zuverlässig",
      text: "Von der Abholung am Flughafen bis zu Ihrem Rücktransfer – zuverlässig organisiert."
    }
  ];

  return (
    <section className="why-karl" id="entdecken">

      <div className="why-karl-container">

        {/* Section Header */}
        <div className="why-karl-header">

          <span className="section-eyebrow">
            KARL INSEL TOUR
          </span>

          <h2>
            Warum mit uns
            <span>reisen?</span>
          </h2>

          <p>
            Ihr Urlaub auf Sansibar soll etwas Besonderes sein.
            Deshalb verbinden wir lokale Erfahrung mit persönlicher
            Betreuung und individuell geplanten Reisen.
          </p>

        </div>

        {/* Advantages */}
        <div className="advantages-grid">

          {advantages.map((advantage, index) => (
            <div
              className="advantage-card"
              key={advantage.title}
            >

              <div className="advantage-number">
                0{index + 1}
              </div>

              <div className="advantage-icon">
                {advantage.icon}
              </div>

              <h3>
                {advantage.title}
              </h3>

              <p>
                {advantage.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyKarl;