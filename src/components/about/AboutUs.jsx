import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg")' }}></div>
      
      {/* Text content */}
      <div className="relative z-10 container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">About Us</h2>
            <p className="mt-4 text-white text-base sm:text-lg lg:text-xl">
              S. Sharma Enterprises offers premium furniture for homes and offices. We blend style and durability to enhance any space. Our commitment to quality and customer satisfaction ensures you receive exceptional products and service. Discover our diverse collection and transform your environment with our expertly crafted pieces.
            </p>
            <div className="mt-8">
              <a href="#" className="text-blue-300 hover:text-blue-400 font-medium text-base sm:text-lg lg:text-xl">
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
