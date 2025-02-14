import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './haydarkadioglu.css';

const CV = () => {
  return (
    <>
      <Helmet>
        <title>Haydar Kadıoğlu</title>
        <meta charSet="utf-8" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="cv-container"
      >
        <div className="background-animation"></div>
        <div className="cv-content">
          <div className="cv-header">
            <div className="profile-section">
              <img 
                src={require("../../assets/images/haydar.jpg")} 
                alt="Abdullah H. Kadıoğlu"
                className="profile-image"
              />
              <div className="social-links">
                <a href="https://github.com/haydarkadioglu" target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/icons/github.ico")} alt="GitHub" className="social-icon" />
                  <span>haydarkadioglu</span>
                </a>
                <a href="https://www.linkedin.com/in/haydarkadioglu/" target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/icons/linkedin.ico")} alt="LinkedIn" className="social-icon" />
                  <span>haydarkadioglu</span>
                </a>
                <a href="https://www.instagram.com/haydarkadioglu_/" target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/icons/instagram.ico")} alt="Instagram" className="social-icon" />
                  <span>haydarkadioglu_</span>
                </a>
              </div>
            </div>
            <div className="contact-info">
              <h1>Haydar Kadıoğlu</h1>
              <p>Email: @.com</p>
            </div>
          </div>

          <div className="cv-grid">
            <section className="cv-section">
              <h2>Education</h2>
              <div className="cv-item">
                <h3>Selçuk University</h3>
                <p>Computer Engineering</p>
                <p>2021-2025</p>
              </div>
            </section>

            <section className="cv-section">
              <h2>Experience</h2>
              <div className="cv-item">
                <h3>Inserpo Bilişim</h3>
                <p>Intern Engineer</p>
                <p>July 2024 - August 2024</p>
              </div>
            </section>

            <section className="cv-section">
              <h2>Skills</h2>
              <div className="skills-container">
                <ul className="skills-list">
                  <li>Python
                    <ul>
                      <li>Data Analysis and Manipulation</li>
                      <li>Image Processing</li>
                      <li>Deep Learning</li>
                      <li>Machine Learning</li>
                      <li>TensorFlow, PyTorch</li>
                    </ul>
                  </li>
                  <li>Dart
                    <ul>
                      <li>Flutter</li>
                    </ul>
                  </li>
                  <li>C#
                    <ul>
                      <li>.Net Core</li>
                    </ul>
                  </li>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>JavaScript
                    <ul>
                      <li>React.js</li>
                      <li>Node.js</li>
                    </ul>
                  </li>
                  <li>Networking
                    <ul>
                      <li>Catalyst Switches</li>
                      <li>Networking</li>
                      <li>Wireless Networking</li>
                      <li>Virtual Private Network</li>
                      <li>Network Devices Configuration</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            <section className="cv-section">
              <h2>Certificates</h2>
              <div className="certificates-container">
                <div className="cert-group">
                  <h3>Turkcell Geleceği Yazanlar</h3>
                  <ul>
                    <li>Python 401</li>
                    <li>OpenCV 501</li>
                    <li>Deep Learning 501</li>
                    <li>Basic Network</li>
                  </ul>
                </div>
                <div className="cert-group">
                  <h3>LinkedIn</h3>
                  <ul>
                    <li>Cisco CCNA (200-301) Cert Prep: 1 Network Fundamentals and Access</li>
                    <li>Generative AI</li>
                  </ul>
                </div>
                <div className="cert-group">
                  <h3>Microsoft</h3>
                  <ul>
                    <li>Azure Fundamentals</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="cv-section">
              <h2>Projects</h2>
              <div className="projects-container">
                <div className="project-item">
                  <h3>Restoration Application (Non-GitHub)</h3>
                  <p>Developed an image colorization model based on Deep Learning using CNN and GAN architectures. Created a user-friendly interface with Node.js for end-user accessibility.</p>
                </div>
                <div className="project-item">
                  <h3>AI-Based Noise Filtering (Non-GitHub, Ongoing)</h3>
                  <p>Developing an AI-powered application to remove noise from audio during online meetings and recordings.</p>
                </div>
                <div className="project-item">
                  <h3>BTK Datathon 2024 Competition Solution</h3>
                  <p>Participated in the 2024 BTK Datathon competition and achieved a 7.9 RMSE score on the Kaggle platform.</p>
                </div>
                <div className="project-item">
                  <h3>Aircraft Model Prediction via Image Classification</h3>
                  <p>Developed a machine learning model to predict aircraft models through image classification techniques.</p>
                </div>
                <div className="project-item">
                  <h3>Sentence Analysis</h3>
                  <p>Designed a tool to evaluate sentences, assigning a sentiment score between -1 and 1 to indicate negative, neutral, or positive sentiment.</p>
                </div>
                <div className="project-item">
                  <h3>Detection Objects Project</h3>
                  <p>Created a Python application capable of detecting faces, eyes, bodies, colors, and objects.</p>
                </div>
                <div className="project-item">
                  <h3>Simple Image Processing Application</h3>
                  <p>Implemented an application utilizing image processing techniques to perform basic operations.</p>
                </div>
                <div className="project-item">
                  <h3>Statistical Concepts Calculation</h3>
                  <p>Developed a tool to compute statistical measures such as mode, mean, median, standard deviation, variance, skewness, and kurtosis.</p>
                </div>
                <div className="project-item">
                  <h3>Memory Game with C#</h3>
                  <p>Designed and coded a memory-enhancing game using C#.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CV;
