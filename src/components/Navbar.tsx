
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/58bfb4e8-addc-477b-aa43-a0b6dceea2f3.png" 
              alt="St. Cloud High School Bulldog" 
              className="h-12 w-12 bulldog-shadow"
            />
            <div>
              <h1 className="text-maroon font-bold text-xl">St. Cloud High</h1>
              <p className="text-gold text-sm font-dancing">Dance Program</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-maroon transition-colors">
              Home
            </Link>
            <Link to="/accomplishments" className="px-3 py-2 text-gray-700 hover:text-maroon transition-colors">
              Accomplishments
            </Link>
            <Link to="/classes" className="px-3 py-2 text-gray-700 hover:text-maroon transition-colors">
              Classes
            </Link>
            <Link to="/events" className="px-3 py-2 text-gray-700 hover:text-maroon transition-colors">
              Events
            </Link>
            <Link to="/students" className="px-3 py-2 text-gray-700 hover:text-maroon transition-colors">
              Students
            </Link>
            <Link to="/media" className="px-3 py-2 text-gray-700 hover:text-maroon transition-colors">
              Media
            </Link>
            <Button asChild className="bg-maroon hover:bg-maroon/90 ml-3">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6 text-maroon" />
              ) : (
                <Menu className="h-6 w-6 text-maroon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-3`}>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/accomplishments" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>
              Accomplishments
            </Link>
            <Link to="/classes" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>
              Classes
            </Link>
            <Link to="/events" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>
              Events
            </Link>
            <Link to="/students" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>
              Students
            </Link>
            <Link to="/media" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" onClick={toggleMenu}>
              Media
            </Link>
            <Button asChild className="bg-maroon hover:bg-maroon/90 w-full">
              <Link to="/donate" onClick={toggleMenu}>Donate</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
