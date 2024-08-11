// Newsletter.js
const Newsletter = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Stay Updated!</h2>
            <p className="text-lg text-gray-600">
              Subscribe to our newsletter to receive the latest news, updates, and exclusive offers directly in your inbox.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <div className="lg:w-2/3">
              <form className="flex flex-col lg:flex-row gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full lg:w-auto px-6 py-2 text-white bg-blue-600 font-medium rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Newsletter;
  