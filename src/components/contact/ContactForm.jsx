const ContactForm = () => {
    const contactMethods = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        ),
        contact: "ssharma02081@gmail.com",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        ),
        contact: "+91 8252962009",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        ),
        contact: "202/3, Ground Floor, Night nagar, Lal Bahdur Shastri Marg, Sion West , Mumbai",
      },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
    };
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <main className="py-16 bg-gray-100">
          <div className="max-w-screen-lg mx-auto px-6 text-gray-800">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-blue-600 text-lg font-semibold">Contact Us</h3>
                <p className="text-blue-700 text-4xl font-bold">We'd Love to Hear From You!</p>
                <p className="text-gray-600">
                  Whether you have questions or need support, we're here for you. Feel free to reach out via the form or using the contact details below.
                </p>
                <div>
                  <ul className="space-y-4">
                    {contactMethods.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-4">
                        <div className="text-blue-500">{item.icon}</div>
                        <p className="text-gray-800">{item.contact}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
                  <div>
                    <label className="block text-blue-600 font-medium">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-600 font-medium">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-600 font-medium">Message</label>
                    <textarea
                      required
                      className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="6"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 font-medium rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default ContactForm;
  