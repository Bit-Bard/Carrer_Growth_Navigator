import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                CP
              </div>
              <span className="ml-2 text-xl font-heading font-bold">CareerPath</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Find your perfect career path based on your personality, skills, and interests.
            </p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <Heart size={16} className="text-primary mr-1" /> 
              <span>Made with passion for career seekers</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Career Quiz
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for career tips, industry insights, and more.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="input border-r-0 rounded-r-none flex-grow"
              />
              <button className="btn btn-primary rounded-l-none">
                <Mail size={18} className="mr-2" /> Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} CareerPath. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center">
              <ExternalLink size={14} className="mr-1" /> Career Resources
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;