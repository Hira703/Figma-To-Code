import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import shop1 from "../assets/images/shop1.jpg";
import shop2 from "../assets/images/shop2.jpg";
import shop3 from "../assets/images/shop3.jpg";
import shop4 from "../assets/images/shop4.jpg";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Our Company</h2>
          <p className="max-w-md">
            We are committed to providing the best products with exceptional customer service. Stay connected with us on social media for the latest updates.
          </p>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[var(--primary)] p-3 rounded-full hover:bg-gray-200 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="bg-white text-[var(--primary)] p-3 rounded-full hover:bg-gray-200 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="bg-white text-[var(--primary)] p-3 rounded-full hover:bg-gray-200 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-4">Instagram Shop</h3>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-4">
            <img src={shop1} alt="shop item 1" className="w-full h-full object-cover rounded-lg" />
            <img src={shop2} alt="shop item 2" className="w-full h-full object-cover rounded-lg" />
            <img src={shop3} alt="shop item 3" className="w-full h-full object-cover rounded-lg" />
            <img src={shop4} alt="shop item 4" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
