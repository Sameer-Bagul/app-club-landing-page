import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-black/70 backdrop-blur-sm fixed md:w-[90vw] left-1/2 transform -translate-x-1/2 z-50 border-b border-purple-900/20 m-4 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold">APP CLUB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link to="/events" className="hover:text-purple-400 transition-colors">Events</Link>
            <Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link to="/team" className="hover:text-purple-400 transition-colors">Team</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-purple-500 focus:outline-none">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black/80 rounded-lg p-4">
            <Link to="/" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/events" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Events</Link>
            <Link to="/projects" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Projects</Link>
            <Link to="/team" className="block py-2 hover:text-purple-400 transition-colors" onClick={toggleMenu}>Team</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
