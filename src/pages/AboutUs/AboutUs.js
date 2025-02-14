import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  const content = {
    additionalText: "At AI Lab, our mission is to develop innovative AI models tailored for special projects of companies. Our team is dedicated to pushing the boundaries of artificial intelligence to deliver unique solutions that meet the specific needs of our clients. Whether it's enhancing images, automating tasks, or providing insightful data analysis, AI Lab is committed to excellence and innovation.",
    mission: "Our mission is to empower businesses with innovative AI technologies that drive growth and efficiency."
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="aboutus-container"
    >
      <div className="aboutus-section">
        <div className="aboutus-content">
          <h1 className="main-title">About Us</h1>
          <div className="additional-section">
            <p className="additional-text">{content.additionalText}</p>
          </div>
          <div className="mission-section">
            <h3>Our Mission</h3>
            <p>{content.mission}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;