import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Banner from './pages/Banner';
import AboutUs from './pages/AboutUs';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Banner/> } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
