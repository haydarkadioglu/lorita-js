import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Home.css";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    document.querySelector('.aboutus-container').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const content = {
    title: "Welcome to Lorita AI Solutions",
    subTitle: "Custom AI Solutions for Enterprise",
    description: "Lorita specializes in developing cutting-edge artificial intelligence solutions customized for enterprise needs. Our expertise includes:",
    features: [
      "Custom AI Model Development",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Predictive Analytics",
      "AI Integration Services"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="home-container"
    >
      <div className="background-animation"></div>
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <a href="#about" onClick={handleAboutClick}>About</a>
        <Link to="/teams">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="main-title">{content.title}</h1>
            <h2 className="sub-title">{content.subTitle}</h2>
            <p className="description">{content.description}</p>
          </div>
          <div className="image-content">
            <img
              alt="AI Lab"
              src={require("../assets/images/AI-No-Background.png")}
              className="ai-image"
            />
          </div>
        </div>
        
        <div className="features-grid">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {feature}
            </motion.div>
          ))}
        </div>

        <motion.button
          className="contact-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </div>

      <AboutUs /> {/* Include AboutUs component here */}
    </motion.div>
  );
};

export default Home;