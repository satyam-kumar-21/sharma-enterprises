// Testimonials.js
const testimonials = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpsDK5dkH7envHCdUECqq0XzCWK1Dv96XcQ&s', // Replace with actual image URLs
      name: 'Shivam singh',
      message: 'I am thrilled with the service! The team came to my home and assembled my new furniture efficiently. They were professional, tidy, and their attention to detail was remarkable. My living room looks fantastic!',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpsDK5dkH7envHCdUECqq0XzCWK1Dv96XcQ&s', // Replace with actual image URLs
      name: 'Naval kishore',
      message: 'The in-home furniture assembly service was outstanding. The staff arrived on time, were courteous, and did a superb job assembling our new bedroom set. They even helped rearrange the room to ensure everything looked perfect.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpsDK5dkH7envHCdUECqq0XzCWK1Dv96XcQ&s', // Replace with actual image URLs
      name: 'Raju pandey',
      message: 'Exceptional service from start to finish. The team handled everything from assembly to cleanup. They were respectful of my home and ensured all furniture pieces were assembled correctly and safely. Highly recommend this service!',
    },
  ];
  
  
  
  const Testimonials = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">What Our Clients Say</h2>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  