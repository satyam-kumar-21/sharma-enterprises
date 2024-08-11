// OurBranches.js
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineWhatsApp, AiOutlinePhone } from 'react-icons/ai';

const branches = [
  {
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    address: '202/3, Ground Floor, Night nagar, Lal Bahdur Shastri Marg, Sion West , Mumbai',
    email: 'ssharma02081@gmail.com',
    phone: '+91 8252962009',
    website: 'http://ssharmaenterprises.com',
    social: {
      facebook: 'https://facebook.com/branchone',
      instagram: 'https://instagram.com/branchone',
      whatsapp: 'https://wa.me/918080188094',
      phone: 'tel:+918080188094',
    },
  },
  {
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    address: '........ ..... .... ..... ..',
    email: 'ssharma02081@gmail.com',
    phone: '+91 8080188094',
    website: 'http://ssharmaenterprises.com',
    social: {
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      whatsapp: 'https://wa.me/918080188094',
      phone: 'tel:+918080188094',
    },
  },
];

const OurBranches = () => {
  return (
    <section className="bg-gray-50 py-16" id='branches'>
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Our Branches</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={branch.image}
                alt={`Branch ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-800 text-xl font-semibold mb-2">Branch {index + 1}</h3>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> {branch.address}</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href={`mailto:${branch.email}`} className="text-blue-500">{branch.email}</a></p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> <a href={branch.social.phone} className="text-blue-500">{branch.phone}</a></p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> <a href={branch.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{branch.website}</a></p>
                <div className="mt-4 flex space-x-4">
                  {branch.social.facebook && (
                    <a href={branch.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
                      <FaFacebookF className="w-6 h-6" />
                    </a>
                  )}
                  {branch.social.instagram && (
                    <a href={branch.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  )}
                  {branch.social.whatsapp && (
                    <a href={branch.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
                      <AiOutlineWhatsApp className="w-6 h-6" />
                    </a>
                  )}
                  {branch.social.phone && (
                    <a href={branch.social.phone} className="text-gray-800 hover:text-gray-600">
                      <AiOutlinePhone className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBranches;
