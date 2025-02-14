import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Teams.css';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Haydar Kadıoğlu",
      role: "AI Developer",
      image: require("../../assets/images/haydar.jpg"),
      description: "Computer Engineering student specializing in AI and Deep Learning.",
      cvLink: "/teams/haydarkadioglu"
    }
    // Add more team members here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="teams-container"
    >
      <div className="background-animation"></div>
      <div className="teams-content">
        <h1>Our Team</h1>
        <div className="team-grid">
          {teamMembers.map(member => (
            <Link to={member.cvLink} key={member.id} className="team-member">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Teams;