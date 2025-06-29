import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-lg px-4 sm:px-8 py-4 flex justify-between items-center relative z-50">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-600 rounded-full px-3 py-1 text-white font-bold text-lg shadow-md">Assign<span className="text-blue-300">ment</span></div>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-200 focus:outline-none" 
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-gray-200 hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/comments" className="text-gray-200 hover:text-blue-400 transition-colors">Comments</Link>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4 space-y-3">
            <Link 
              to="/" 
              className="text-gray-200 hover:text-blue-400 transition-colors py-2 px-4 rounded hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/comments" 
              className="text-gray-200 hover:text-blue-400 transition-colors py-2 px-4 rounded hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Comments
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
