import { Link, useLocation } from 'react-router-dom';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 py-6">
      <div className="max-w-[95%] mx-auto">
        <div className="flex justify-between items-center px-8 text-white">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-serif font-medium tracking-tight text-white drop-shadow-sm">UCT<span className="opacity-80"> Travels</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-light">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-all hover:opacity-100 ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'opacity-100 border-b border-white pb-1'
                    : 'opacity-80 pb-1 border-b border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="ml-6 border border-white/40 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-light hover:bg-white hover:text-zinc-900 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:opacity-80 focus:outline-none drop-shadow-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 absolute w-[95%] left-1/2 -translate-x-1/2 rounded-2xl top-20 pt-4 pb-6 px-4 shadow-2xl border border-white/10">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-light py-3 px-4 rounded-xl ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-medium text-center hover:bg-zinc-200 transition-colors mt-2 mx-4 block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
