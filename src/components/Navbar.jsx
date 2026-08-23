import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import "./Navbar.css";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Reisen & Touren", path: "/reisen" },
  { label: "Sansibar", path: "/sansibar" },
  { label: "Safari", path: "/safari" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMenuOpen(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarClassName = [
    "navbar",
    location.pathname === "/" ? "navbar-home" : "",
    scrolled ? "navbar-scrolled" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={navbarClassName}>
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="KARL INSEL TOUR Startseite"
        >
          <span className="logo-main">KARL</span>
          <span className="logo-sub">INSEL TOUR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-menu">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link to="/kontakt" className="navbar-cta">
          Reise anfragen
          <FiArrowRight />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/kontakt"
            className="mobile-nav-cta"
            onClick={closeMenu}
          >
            Reise anfragen
            <FiArrowRight />
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;