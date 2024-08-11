import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './SocialIcons.css'; // Import the CSS file for bubble effect

const SocialIcons = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-row space-x-3 z-50">
            <a 
                href="https://wa.me/918080188094" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bubble-effect p-3 bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl" />
            </a>
            <a 
                href="tel:+9180801880894" 
                className="bubble-effect p-3 bg-blue-500 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-xl" />
            </a>
        </div>
    );
};

export default SocialIcons;
