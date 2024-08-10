import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images and text for the carousel
  const slides = [
    {
      src: 'https://t4.ftcdn.net/jpg/03/71/92/67/360_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg',
      alt: 'Image 1',
      heading: 'Welcome to S. Sharma Enterprises',
      description: 'Find high-quality furniture for every part of your home or office.',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJywmX6_cuCdaeNrWLcqivroyL_IbBVYOPew&s',
      alt: 'Image 2',
      heading: 'Beautiful Furniture for Your Home',
      description: 'Explore our stylish furniture that fits perfectly in any room.',
    },
    {
      src: 'https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.jpg?s=612x612&w=0&k=20&c=jblput4MEg7QLUCIffJguBXIg1qYHXrpowBoLuiUasM=',
      alt: 'Image 3',
      heading: 'Refresh Your Space',
      description: 'Update your home with our modern and stylish furniture.',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463_640.jpg',
      alt: 'Image 4',
      heading: 'Join Us',
      description: 'Become part of our community and stay updated with our latest products.',
    },
    {
      src: 'https://i.ytimg.com/vi/QacK3mGU11o/maxresdefault.jpg',
      alt: 'Image 5',
      heading: 'Quality You Can Trust',
      description: 'Enjoy well-made furniture that is built to last.',
    },
  ];

  // Auto-slide interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // Function to set a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute block w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-4 lg:mb-6 text-white">{slide.heading}</h2>
              <p className="text-sm sm:text-base lg:text-xl text-white">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-4 lg:bottom-5 left-1/2 space-x-2 sm:space-x-3 lg:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 lg:px-6 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 lg:px-6 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
