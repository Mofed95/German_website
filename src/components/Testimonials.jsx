import { FiStar } from "react-icons/fi";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      text: "Unsere Reise nach Sansibar wurde ganz nach unseren Wünschen geplant. Die persönliche Betreuung hat unseren Urlaub zu etwas ganz Besonderem gemacht.",
      name: "Kundenstimme",
      location: "Deutschland",
    },
    {
      text: "Eine wunderschöne Reise mit persönlicher Betreuung und vielen besonderen Erlebnissen. Wir haben uns von Anfang bis Ende gut aufgehoben gefühlt.",
      name: "Kundenstimme",
      location: "Österreich",
    },
    {
      text: "Sansibar auf eine persönliche und entspannte Art zu erleben – genau das haben wir gesucht und gefunden.",
      name: "Kundenstimme",
      location: "Schweiz",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-container">

        <div className="testimonials-header">
          <span className="testimonials-eyebrow">
            GÄSTE & ERLEBNISSE
          </span>

          <h2>
            Schöne Reisen.
            <span>Schöne Erinnerungen.</span>
          </h2>

          <p>
            Persönlicher Service und unvergessliche Erlebnisse
            stehen bei uns im Mittelpunkt.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.location}
            >
              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} />
                ))}
              </div>

              <blockquote>
                „{testimonial.text}“
              </blockquote>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.location.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;