import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold">APP CLUB</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link to="/events" className="hover:text-purple-400 transition-colors">Events</Link>
            <Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link to="/team" className="hover:text-purple-400 transition-colors">Team</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;