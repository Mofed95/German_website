import { FiArrowUpRight } from "react-icons/fi";
import "./Gallery.css";

function Gallery() {
  const images = [
    {
      image: "/images/stone-town1.jpg",
      title: "Stone Town",
      category: "Kultur",
      className: "gallery-large",
    },
    {
      image: "/images/prison-island.jpg",
      title: "Prison Island",
      category: "Insel",
      className: "gallery-tall",
    },
    {
      image: "/images/spice-picture.jpeg",
      title: "Gewürzfarm",
      category: "Tradition",
      className: "gallery-small",
    },
    {
      image: "/images/beach-ocean.jpg",
      title: "Indischer Ozean",
      category: "Meer",
      className: "gallery-small",
    },
    {
      image: "/images/jozani-znz.jpeg",
      title: "Jozani-Wald",
      category: "Natur",
      className: "gallery-wide",
    },
  ];

  return (
    <section className="gallery-section">

      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">

          <div>
            <span className="gallery-eyebrow">
              SANSIBAR ENTDECKEN
            </span>

            <h2>
              Sansibar in
              <span>Bildern.</span>
            </h2>
          </div>

          <p>
            Von historischen Gassen bis zu traumhaften Stränden –
            entdecken Sie die Vielfalt der Insel.
          </p>

        </div>

        {/* Gallery */}
        <div className="gallery-grid">

          {images.map((item) => (
            <div
              className={`gallery-item ${item.className}`}
              key={item.title}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-overlay">

                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <div className="gallery-arrow">
                  <FiArrowUpRight />
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;