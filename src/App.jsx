import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Sansibar from "./pages/Sansibar.jsx";
import Tours from "./pages/Tours.jsx";
import TourDetails from "./pages/TourDetails.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Safari from "./pages/Safari.jsx";
import UeberUns from "./pages/UeberUns.jsx";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/reisen"
          element={<Tours />}
        />

        <Route
          path="/reisen/:slug"
          element={<TourDetails />}
        />

        <Route
          path="/sansibar"
          element={<Sansibar />}
        />

        <Route
          path="/safari"
          element={<Safari />}
        />

        <Route
          path="/ueber-uns"
          element={<UeberUns />}
        />

        <Route
          path="/kontakt"
          element={<Kontakt />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;