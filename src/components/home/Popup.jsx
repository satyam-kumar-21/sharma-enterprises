// src/components/Popup.js
import React from 'react';

const Popup = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={service.imgSrc} 
          alt={service.title} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
        <p className="text-lg">{service.description}</p>
      </div>
    </div>
  );
};

export default Popup;
