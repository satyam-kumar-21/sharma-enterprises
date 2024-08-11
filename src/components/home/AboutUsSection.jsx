import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-2xl font-extrabold text-blue-700 sm:text-3xl lg:text-4xl">About Us</h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
            S. Sharma Enterprises offers premium furniture for homes and offices. We blend style and durability to enhance any space. Our commitment to quality and customer satisfaction ensures you receive exceptional products and service. Discover our diverse collection and transform your environment with our expertly crafted pieces.
            </p>
            <div className="mt-8">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium text-base sm:text-lg lg:text-xl">
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md w-full h-full max-w-full max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
