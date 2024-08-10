// src/components/ServicesCard.js
import React from 'react';

const ServicesCard = ({ imgSrc, title, description, onClick }) => {
  return (
    <div 
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img 
          className="absolute inset-0 w-full h-full object-cover"
          src={imgSrc} 
          alt={title} 
        />
      </div>
      <div className="p-5 flex flex-col items-center text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <button 
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          See details
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
