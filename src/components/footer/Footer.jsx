import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-green-900 dark:bg-gray-900 dark:text-gray-300 py-10 mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#006400] dark:text-green-400">
            🌿 PlantCare
          </h2>
          <p className="text-sm mt-2">
            Nurturing Nature, One Plant at a Time.
          </p>
          <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PlantCare. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg text-[#006400] dark:text-green-400">
            Contact Us
          </h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Email: support@plantcare.com</li>
            <li>Phone: +880-1780544535</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg text-[#006400] dark:text-green-400 mb-3">
            Follow Us
          </h4>
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#006400] dark:hover:text-green-400 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#006400] dark:hover:text-green-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#006400] dark:hover:text-green-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="border-t border-green-300 dark:border-gray-700 mt-10 pt-4 text-center text-xs text-gray-600 dark:text-gray-400">
        Built with ❤️ by PlantCare Team
      </div>
    </footer>
  );
}
