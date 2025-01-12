import { CircuitBoard, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle scroll to top when clicking Home link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img
              src="https://yt3.googleusercontent.com/vA1cNCvclcGZjQBvT2kXqrNDRRAa5nVTFuRWf0NPs76aCMG-t9ZObPRLXkN3PteKpv4HzitBrw=s160-c-k-c0x00ffffff-no-rj"
              alt="YouTube Logo"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full"  // Adjusted responsive size
            />
            <span className="text-xl font-bold p-4">AfriCADAfriTECH</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200" onClick={scrollToTop}>Home</Link>
            <Link to="/#services" className="hover:text-blue-200">Services</Link>
            <Link to="/training" className="hover:text-blue-200">Training</Link>
            <Link to="/#projects" className="hover:text-blue-200">Projects</Link>
            <Link to="/#team" className="hover:text-blue-200">Team</Link>
            <Link to="/#contact" className="hover:text-blue-200">Contact</Link>
            <Link to="/register" className="bg-blue-600 px-4 py-1 rounded-full hover:bg-blue-700">Register</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-200" onClick={scrollToTop}>Home</Link>
              <Link to="/#services" className="hover:text-blue-200">Services</Link>
              <Link to="/training" className="hover:text-blue-200">Training</Link>
              <Link to="/#projects" className="hover:text-blue-200">Projects</Link>
              <Link to="/#team" className="hover:text-blue-200">Team</Link>
              <Link to="/#contact" className="hover:text-blue-200">Contact</Link>
              <Link to="/register" className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 text-center">Register</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
