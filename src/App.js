import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Teams from './pages/Teams/Teams';
import HaydarKadioglu from './pages/Teams/haydarkadioglu';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleAboutClick = (e) => {
    e.preventDefault();
    document.querySelector('.aboutus-container').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="App">
      <nav className={`navbar ${visible ? '' : 'navbar-hidden'}`}>
        <div className="nav-brand">
          <Link to="/">Lorita AI</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#about" onClick={handleAboutClick}>About</a>
          <Link to="/teams">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/haydarkadioglu" element={<HaydarKadioglu />} />
      </Routes>
    </div>
  );
}

export default App;
