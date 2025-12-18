import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-purple-600">
            EmailPro
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
            <Link to="/feature" className="text-gray-700 hover:text-purple-600 font-medium">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-purple-600 font-medium">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/feature" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-purple-600">Features</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-purple-600">Pricing</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-purple-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
