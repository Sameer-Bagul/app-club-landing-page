import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed inset-0 top-0 w-screen h-[10vh] bg-white/80 text-black dark:bg-black/70 dark:text-gray-300 
                    backdrop-blur-md z-50 border-b border-purple-300/20 dark:border-purple-900/20 
                    rounded-b-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-purple-600 dark:text-purple-500" />
          <span className="text-xl font-bold">APP CLUB</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</Link>
          <Link to="/events" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Events</Link>
          <Link to="/projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link>
          <Link to="/team" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Team</Link>
        </div>

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-purple-600 dark:text-purple-500 focus:outline-none">
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-black/80 p-4 
                        rounded-b-xl transition-colors duration-300">
          <Link to="/" className="block py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={toggleMenu}>About</Link>
          <Link to="/events" className="block py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={toggleMenu}>Events</Link>
          <Link to="/projects" className="block py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={toggleMenu}>Projects</Link>
          <Link to="/team" className="block py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={toggleMenu}>Team</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;