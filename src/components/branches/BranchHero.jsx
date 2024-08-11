// src/components/HeroSection.js
import React from 'react';

const BranchHero = () => {
  return (
    <div 
      className="relative bg-cover bg-center text-white py-16 px-6 md:py-24 md:px-12 sm:py-0 sm:px-0"
      style={{ 
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHaYkD3UelmperdofhbcKv-8GmdiPZ6PN1A&s)', // Replace with your desired image
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
            Our Branches Across the Country
          </h1>
          <p className="text-sm mb-6 md:text-base lg:text-lg leading-relaxed">
            With branches located in key cities, we provide personalized service and high-quality furniture solutions right at your doorstep.
          </p>
          <a 
            href="#branches" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-center text-blue-500 bg-white border border-transparent rounded-lg shadow-sm hover:bg-gray-100"
          >
            Find Your Nearest Branch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BranchHero;
