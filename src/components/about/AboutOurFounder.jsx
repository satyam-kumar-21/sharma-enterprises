// src/components/AboutOurFounder.js
import React from 'react';
import founder from "../../images/sse.jpeg"

const AboutOurFounder = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 md:py-24 md:px-12">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={founder} // Replace with actual founder/lead designer image URL
            alt="Founder or Lead Designer"
            className="w-full md:w-[25vw] md:h-[60vh] h-[40vh] object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 md:text-3xl lg:text-4xl">
            Meet Our Founder
          </h2>
          <p className="text-base text-gray-700 mb-4 md:text-lg lg:text-xl leading-relaxed">
          Our Founder, Sushil Sharma, has dedicated over 10 years to crafting exquisite furniture and creating personalized home solutions. With a keen eye for design and a passion for quality, S. Sharma Enterprises has established itself as a leader in custom furniture services. Sushil Sharma's vision and commitment to excellence drive our mission to deliver top-notch products and services directly to our clients’ homes.
          </p>
          <p className="text-base text-gray-700 md:text-lg lg:text-xl leading-relaxed">
          Sushil Sharma believes in the artistry of furniture making and is deeply involved in every aspect of the design and production process. He is committed to maintaining high standards and fostering a culture of innovation and craftsmanship within the company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOurFounder;
