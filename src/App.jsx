import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Branches from './components/branches/Branches';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-branches" element={<Branches />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
