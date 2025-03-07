
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, Instagram, AlertCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-food-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <span className="text-xl font-bold">FoodSave</span>
            </Link>
            <p className="mt-3 text-sm text-gray-300">
              Reducing food waste and feeding the needy through innovative food management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/canteens" className="text-gray-300 hover:text-white transition-colors">
                  Canteens
                </Link>
              </li>
              <li>
                <Link to="/ngo-partnership" className="text-gray-300 hover:text-white transition-colors">
                  NGO Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+123456789" className="text-gray-300 hover:text-white transition-colors">
                  +1 234 567 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@foodsave.org" className="text-gray-300 hover:text-white transition-colors">
                  info@foodsave.org
                </a>
              </li>
              <li className="flex items-center">
                <Instagram size={16} className="mr-2" />
                <a 
                  href="https://instagram.com/foodsave" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @foodsave
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <a 
              href="https://forms.gle/18uJqpaPocE9WkR96" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              Join the Initiative
            </a>
            <p className="mt-3 text-xs text-gray-300">
              <AlertCircle size={14} className="inline mr-1" />
              Your participation can make a huge difference!
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} FoodSave. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center">
              Made with <Heart size={14} className="mx-1 text-food-primary" /> for a better planet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
