import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectRacc from "./components/projects/ProjectRacc";
import Fun from "./components/Fun.jsx";
import Resume from "./components/Resume";
import Cursor from "./components/Cursor"; // Import the custom cursor
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact"; // Import the new Contact page
import About from "./components/About.jsx";

// ScrollToTop Component that triggers scrolling to the top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the location (route) changes
  }, [location]);

  return null;
};

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Default to show the Navbar
  const location = useLocation(); // useLocation is valid inside Router component

  // Conditionally hide Navbar on the /contact page
  useEffect(() => {
    if (location.pathname === "/contact") {
      setShowNavbar(false); // Hide Navbar on /contact
    } else {
      setShowNavbar(true); // Show Navbar on all other pages
    }
  }, [location]);

  return (
    <div className="overflow-y-auto h-screen">
      {/* This ScrollToTop component will ensure the page scrolls to top on route change */}
      <ScrollToTop />

      {/* Conditionally render Navbar based on the location */}
      {showNavbar && <Navbar />}

      {/* Include the custom cursor */}
      <Cursor /> 

      <Routes>
        {/* Redirect root path to /hero */}
        <Route path="/" element={<Navigate to="/hero" />} /> 

        <Route
          path="/hero"
          element={
            <>
              <div id="hero">
                <Hero setShowNavbar={setShowNavbar} />
              </div>
              <div id="projects">
                <Projects />
              </div>
            </>
          }
        />
        <Route path="/projects/racctracc" element={<ProjectRacc />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} /> {/* Add route for the Contact page */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

const RootApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RootApp;
