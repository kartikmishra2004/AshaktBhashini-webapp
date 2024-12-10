import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Timeline from './components/Timeline';
import HowItWorks from './components/HowItWorks';

const App = () => {
  return (
    <Router>
      {/* Navbar is always displayed */}
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </Router>
  );
};

export default App;
