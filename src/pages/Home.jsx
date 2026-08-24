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
    <main className="home-page">

      <Hero />

      <WhyKarl />

      <PopularTours />

      <DreamTrip />

      <KarlAbout />

      <Gallery />

      <Testimonials />

      <FinalCTA />

    </main>
  );
}

export default Home;