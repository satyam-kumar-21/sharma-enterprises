import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Branches from './components/branches/Branches';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import SocialIcons from './components/SocialIcons';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/gallery/Gallery';
import Terms from './components/other/Terms';
import Privacy from './components/other/Privacy';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <SocialIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-gallery" element={<Gallery />} />
        <Route path="/our-branches" element={<Branches />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-condition" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
