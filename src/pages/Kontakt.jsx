import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FiArrowRight,
  FiMail,
  FiMessageCircle,
  FiMapPin,
} from "react-icons/fi";

import { tours } from "../data/tours.js";

import "./Kontakt.css";

function Kontakt() {
  const [searchParams] = useSearchParams();

  const requestedTour = searchParams.get("tour") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    persons: "2",
    tour: requestedTour,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Create the message that will be sent through
  // WhatsApp or prepared in the customer's email app.
  const createMessage = () => {
    return `Hallo Karl Insel Tour,

ich interessiere mich für eine Reise nach Sansibar.

Name: ${formData.name}
E-Mail: ${formData.email}
Telefon / WhatsApp: ${formData.phone}
Gewünschtes Reisedatum: ${formData.date || "Noch offen"}
Personen: ${formData.persons}
Gewünschte Tour: ${formData.tour || "Noch offen"}

Meine Wünsche:
${formData.message || "Keine weiteren Angaben"}

Vielen Dank!

Mit freundlichen Grüßen
${formData.name}`;
  };

  // =========================================
  // WHATSAPP
  // =========================================

  const handleWhatsApp = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.phone) {
      alert(
        "Bitte geben Sie mindestens Ihren Namen und Ihre Telefonnummer / WhatsApp-Nummer ein."
      );

      return;
    }

    const message = encodeURIComponent(createMessage());

    // KARL INSEL TOUR WhatsApp number
    const whatsappNumber = "255625287895";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // =========================================
  // EMAIL
  // =========================================

  const handleEmail = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email) {
      alert(
        "Bitte geben Sie mindestens Ihren Namen und Ihre E-Mail-Adresse ein."
      );

      return;
    }

    const subject = encodeURIComponent(
      `Reiseanfrage – ${
        formData.tour || "Sansibar"
      }`
    );

    const body = encodeURIComponent(createMessage());

    const businessEmail =
      "issashaame95@gmail.com";

    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="kontakt-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="kontakt-hero">

        <img
          src="/images/contact-hero.jpg"
          alt="Sansibar Strand"
          className="kontakt-hero-image"
        />

        <div className="kontakt-hero-overlay"></div>

        <div className="kontakt-hero-content">

          <span className="kontakt-eyebrow">
            KARL INSEL TOUR
          </span>

          <h1>
            Ihre Reise.
            <span>Ihre Geschichte.</span>
          </h1>

          <p>
            Erzählen Sie uns von Ihren Wünschen und
            gemeinsam planen wir Ihr persönliches
            Sansibar-Erlebnis.
          </p>

        </div>

      </section>

      {/* =========================================
          CONTACT CONTENT
      ========================================= */}

      <section className="kontakt-section">

        <div className="kontakt-container">

          {/* =====================================
              INFORMATION
          ===================================== */}

          <aside className="kontakt-info">

            <span className="kontakt-section-eyebrow">
              PERSÖNLICH FÜR SIE DA
            </span>

            <h2>
              Lassen Sie uns
              <span>sprechen.</span>
            </h2>

            <p>
              Sie haben Fragen zu Sansibar, einer
              bestimmten Tour oder möchten eine
              individuelle Reise zusammenstellen?
            </p>

            <div className="kontakt-details">

              {/* WhatsApp */}

              <div className="kontakt-detail">

                <div className="kontakt-detail-icon">
                  <FiMessageCircle />
                </div>

                <div>
                  <strong>
                    WhatsApp
                  </strong>

                  <span>
                    Schnell und persönlich
                  </span>
                </div>

              </div>

              {/* Email */}

              <div className="kontakt-detail">

                <div className="kontakt-detail-icon">
                  <FiMail />
                </div>

                <div>
                  <strong>
                    E-Mail
                  </strong>

                  <span>
                    Reiseanfrage per E-Mail
                  </span>
                </div>

              </div>

              {/* Location */}

              <div className="kontakt-detail">

                <div className="kontakt-detail-icon">
                  <FiMapPin />
                </div>

                <div>
                  <strong>
                    Sansibar
                  </strong>

                  <span>
                    Tansania
                  </span>
                </div>

              </div>

            </div>

          </aside>

          {/* =====================================
              FORM
          ===================================== */}

          <div className="kontakt-form-wrapper">

            <div className="kontakt-form-header">

              <span>
                REISEANFRAGE
              </span>

              <h2>
                Erzählen Sie uns von
                <em>Ihrer Reise.</em>
              </h2>

            </div>

            <form>

              {/* =================================
                  BASIC INFORMATION
              ================================= */}

              <div className="kontakt-form-grid">

                {/* Name */}

                <div className="kontakt-field">

                  <label htmlFor="name">
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    required
                  />

                </div>

                {/* Email */}

                <div className="kontakt-field">

                  <label htmlFor="email">
                    E-Mail *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    required
                  />

                </div>

                {/* Phone */}

                <div className="kontakt-field">

                  <label htmlFor="phone">
                    Telefon / WhatsApp *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 ..."
                    required
                  />

                </div>

                {/* Date */}

                <div className="kontakt-field">

                  <label htmlFor="date">
                    Reisedatum
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                </div>

                {/* Persons */}

                <div className="kontakt-field">

                  <label htmlFor="persons">
                    Personen
                  </label>

                  <select
                    id="persons"
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                  >

                    <option value="1">
                      1 Person
                    </option>

                    <option value="2">
                      2 Personen
                    </option>

                    <option value="3">
                      3 Personen
                    </option>

                    <option value="4">
                      4 Personen
                    </option>

                    <option value="5">
                      5 Personen
                    </option>

                    <option value="6">
                      6 Personen
                    </option>

                    <option value="7">
                      7 Personen
                    </option>

                    <option value="8">
                      8 Personen
                    </option>

                    <option value="9">
                      9 Personen
                    </option>

                    <option value="10+">
                      10+ Personen
                    </option>

                  </select>

                </div>

                {/* Tour */}

                <div className="kontakt-field">

                  <label htmlFor="tour">
                    Gewünschte Tour
                  </label>

                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                  >

                    <option value="">
                      Bitte auswählen
                    </option>

                    {tours.map((tour) => (
                      <option
                        key={tour.id}
                        value={tour.title}
                      >
                        {tour.title}
                      </option>
                    ))}

                    <option value="Individuelle Reise">
                      Individuelle Reise
                    </option>

                  </select>

                </div>

              </div>

              {/* =================================
                  MESSAGE
              ================================= */}

              <div className="kontakt-field kontakt-message-field">

                <label htmlFor="message">
                  Ihre Wünsche
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Erzählen Sie uns, was Sie sich für Ihre Reise wünschen..."
                  rows="6"
                />

              </div>

              {/* =================================
                  CONTACT BUTTONS
              ================================= */}

              <div className="kontakt-form-actions">

                {/* WhatsApp */}

                <button
                  type="button"
                  className="kontakt-whatsapp"
                  onClick={handleWhatsApp}
                >

                  <FiMessageCircle />

                  Anfrage über WhatsApp

                  <FiArrowRight />

                </button>

                {/* Email */}

                <button
                  type="button"
                  className="kontakt-email"
                  onClick={handleEmail}
                >

                  <FiMail />

                  Anfrage per E-Mail

                </button>

              </div>

              <p className="kontakt-form-note">
                Wählen Sie WhatsApp oder E-Mail für
                Ihre Reiseanfrage. Ihre eingegebenen
                Daten werden nicht auf dieser Website
                gespeichert.
              </p>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Kontakt;