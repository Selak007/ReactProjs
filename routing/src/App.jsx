// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
// src/App.jsx (AFTER)

import Home from './pages/Home.jsx';
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx"; // <-- FIXED
import Thermostat from './pages/Thermostat.jsx';
import Timer from './pages/Timer.jsx';
import './App.css'; // Add some basic styling

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/thermostat" element={<Thermostat />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
