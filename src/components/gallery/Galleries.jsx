// src/components/Gallery.js
import React from 'react';

// Sample data for gallery images
const images = [
    'https://www.shutterstock.com/image-photo/interior-modern-bedroom-white-bed-600nw-2411900229.jpg',
  'https://m.media-amazon.com/images/I/51Al3Gua4fL._AC_.jpg',
  'https://thumbs.dreamstime.com/b/office-furniture-interior-77903914.jpg',
  'https://m.media-amazon.com/images/I/71NDgCY6TbL._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/61cefoSfepS.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2020/8/HL/JN/NL/60115393/new-product.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyAZ6uYCvGRBTqTqf7-OZ2PSb8uecwYu3aQ&s',
  'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/06/10183457/small-bedroom-ideas.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmeBOjjA_AVHjk8x_g4iB2lLYl2-RRqKEMVCOFk0zZy3u91oKsD9ZwMZ8KlPXLAOzwgg&usqp=CAU',
  
];

const Galleries = () => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform transform hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleries;
