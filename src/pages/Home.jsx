import Hero from "../components/Hero.jsx";
import WhyKarl from "../components/WhyKarl.jsx";
import PopularTours from "../components/PopularTours.jsx";
import DreamTrip from "../components/DreamTrip.jsx";
import KarlAbout from "../components/KarlAbout.jsx";
import Gallery from "../components/Gallery.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FinalCTA from "../components/FinalCTA.jsx";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Why Karl Insel Tour */}
      <WhyKarl />

      {/* Popular Tours */}
      <PopularTours />

      {/* Individual Travel Planning */}
      <DreamTrip />

      {/* About Karl */}
      <KarlAbout />

      {/* Zanzibar Gallery */}
      <Gallery />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Final Call To Action */}
      <FinalCTA />
    </main>
  );
}

export default Home;