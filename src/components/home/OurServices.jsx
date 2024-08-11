// src/components/OurServices.js
import React, { useState } from 'react';
import ServicesCard from './ServicesCard';
import Popup from './Popup';

const services = [
    {
      imgSrc: 'https://media.designcafe.com/wp-content/uploads/2021/10/01210709/luxury-contemporary-bedroom-furniture.jpg',
      title: 'Luxury Bedroom Furniture',
      description: 'Discover our premium range of bedroom furniture designed for ultimate comfort and style.',
      link: '#',
    },
    {
      imgSrc: 'https://media.istockphoto.com/id/1184204517/photo/modern-scandinavian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=t-YDtX8DWp_ZL8FMWErVBH1D7Dc8yYe7jL-iIPKpX7g=',
      title: 'Modern Living Room Sofas',
      description: 'Explore our collection of contemporary sofas that bring elegance and comfort to your living space.',
      link: '#',
    },
    {
      imgSrc: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg',
      title: 'Functional Office Desks',
      description: 'Upgrade your workspace with our ergonomic and stylish office desks tailored for productivity.',
      link: '#',
    },
    {
      imgSrc: 'https://apkainterior.gumlet.io/75709/63fc6e0167020_IMG-20230227-WA0011.jpg?w=360&dpr=2.6',
      title: 'Stylish Dining Tables',
      description: 'Find the perfect dining table for your home with our range of stylish and durable options.',
      link: '#',
    },
    {
      imgSrc: 'https://www.shutterstock.com/image-photo/stylish-room-interior-comfortable-furniture-600nw-1485045323.jpg',
      title: 'Comfortable Chairs',
      description: 'Experience comfort with our selection of high-quality chairs for every room in your home or office.',
      link: '#',
    },
    {
      imgSrc: 'https://www.thespruce.com/thmb/cDAEjtBLU0-HUhW50Qc5YEF0EB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9ca65e_23e26bab52be441abfd2dcb20bb68d31mv2-8322bed281c942aa9805ab7766ccf1cd.jpeg',
      title: 'Elegant Storage Solutions',
      description: 'Organize your space with our range of elegant and functional storage solutions for home and office.',
      link: '#',
    },
];

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="p-6" id='service'>
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServicesCard 
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>
      {selectedService && (
        <Popup 
          isOpen={!!selectedService} 
          onClose={handleClosePopup} 
          service={selectedService}
        />
      )}
    </div>
  );
};

export default OurServices;
