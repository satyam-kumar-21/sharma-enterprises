// src/components/OurTeam.js
import React from 'react';

const teamMembers = [
  {
    name: 'Jane Doe',
    position: 'CEO',
    bio: 'Jane is the visionary behind our company with over 15 years of experience in the industry.',
    photo: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/janedoe',
  },
  {
    name: 'John Smith',
    position: 'CTO',
    bio: 'John is our technical guru, leading the technology and development efforts.',
    photo: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/johnsmith',
  },
  {
    name: 'Emily Johnson',
    position: 'Marketing Director',
    bio: 'Emily drives our marketing strategy and brand development.',
    photo: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/emilyjohnson',
  },
  // Add more team members as needed
];

const OurTeam = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow p-4 text-center">
            <img 
              className="w-24 h-24 rounded-full mx-auto mb-4" 
              src={member.photo} 
              alt={member.name} 
            />
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.position}</p>
            <p className="text-gray-800 mb-4">{member.bio}</p>
            <a 
              href={member.linkedin} 
              className="text-blue-500 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
