import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';  
import './App.css';

import HomePage from './pages/HomePage';
import TutorForm from './pages/TutorForm';
import TutorList from  './pages/TutorList';
import Schedule from './pages/Schedule';

import logo from "./images/logos/TAP_logo.png";

function App() {
  

  
  return (
    <Router>
      <div className="header-bar">
        <div className="header-logo-image">
          <Link to="/">
            <img src={logo} alt="TAP" width="100"/>
          </Link>
        </div>
        {/* <nav>
          <Link to="/"> Home </Link>
          <Link to="/new-tutor">New Tutor</Link>
        </nav> */}
      </div>
      <div style={{ padding: '2rem', marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-tutor" element={<TutorForm />} />
          <Route path="/tutor-list" element={<TutorList />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
