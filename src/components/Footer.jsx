import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-black/90 dark:text-gray-400 border-t border-purple-300/30 dark:border-purple-900/20 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400">Home</Link>
            <Link to="/about" className="hover:text-purple-600 dark:hover:text-purple-400">About</Link>
            <Link to="/events" className="hover:text-purple-600 dark:hover:text-purple-400">Events</Link>
            <Link to="/team" className="hover:text-purple-600 dark:hover:text-purple-400">Team</Link>
            <Link to="/projects" className="hover:text-purple-600 dark:hover:text-purple-400">Projects</Link>
            <Link to="/feedback" className="hover:text-purple-600 dark:hover:text-purple-400">Feedback</Link>
          </div>
          <div className="text-sm">
            Copyright © 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;