// src/components/HeroSection.js
import React from 'react';

const ContactHero = () => {
  return (
    <div 
      className="relative bg-cover bg-center text-white py-16 px-6 md:py-24 md:px-12 sm:py-0 sm:px-0"
      style={{ 
        backgroundImage: 'url(https://images-eu.ssl-images-amazon.com/images/I/61zfm9gKg8S._AC_UL675_SR528,675_.jpg)',
        backgroundSize: 'cover', // Ensures the image covers the area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating of the image
        minHeight: '300px' // Ensures a minimum height for the hero section
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left h-full">
        <div className="z-10">
          <h1 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl leading-tight">
            Get in Touch with Us
          </h1>
          <p className="text-sm mb-6 md:text-base lg:text-lg leading-relaxed">
            Have questions or need assistance? Our team is here to help. Reach out to us and we’ll get back to you as soon as possible.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-blue-500 bg-white border border-transparent rounded-lg shadow-sm hover:bg-gray-100"
          >
            Contact Us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
