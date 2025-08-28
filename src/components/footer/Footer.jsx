import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-green-100 text-green-900 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">🌿 PlantCare</h2>
          <p className="text-sm mt-1">Nurturing Nature, One Plant at a Time.</p>
          <p className="text-xs mt-1">© {new Date().getFullYear()} PlantCare. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold">Contact Us</h4>
          <p>Email: support@plantcare.com</p>
          <p>Phone: +880-1780544535</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 justify-center">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-600">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-green-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-600">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
