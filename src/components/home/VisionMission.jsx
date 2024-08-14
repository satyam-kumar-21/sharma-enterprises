import React from 'react';

function VisionMission() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-2xl font-extrabold text-blue-700 sm:text-3xl lg:text-4xl text-center pb-3">Our Vision</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
            <img 
              src="https://st.depositphotos.com/1005844/3526/i/450/depositphotos_35261859-stock-photo-compass-vision.jpg" 
              alt="Vision" 
              className="w-full h-auto max-w-sm lg:max-w-lg object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <p className="mb-4 mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
              At S. Sharma Enterprises, our vision is to become the leading provider of bespoke furniture solutions that seamlessly blend style, functionality, and sustainability. We aspire to transform spaces into personalized sanctuaries, where each piece of furniture tells a unique story and enhances the quality of life for our clients.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-extrabold text-blue-700 sm:text-3xl lg:text-4xl text-center pb-3">Our Mission</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
            <img 
              src="https://thumbs.dreamstime.com/b/businesswoman-holding-card-text-our-mission-199451995.jpg" 
              alt="Mission" 
              className="w-full h-auto max-w-sm lg:max-w-lg object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <p className="mb-4 mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
              Our mission at S. Sharma Enterprises is to deliver top-quality, custom furniture that meets the unique needs and preferences of our clients. We are dedicated to providing exceptional service and creating furniture solutions that enhance the functionality and aesthetic appeal of every space we touch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisionMission;
