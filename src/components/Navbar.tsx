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
    <nav className="fixed w-full border-b border-slate-200 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 py-2 group">
            <div className="w-8 h-8 bg-orange-600 flex items-center justify-center font-bold text-white group-hover:bg-slate-900 transition-colors">U</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">UCT<span className="text-orange-600 underline underline-offset-4 decoration-2">TRAVELS</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-orange-600'
                    : 'text-slate-900 hover:text-orange-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="ml-4 bg-slate-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors border-2 border-transparent">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 mt-0 pt-4 pb-6 px-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest py-2 border-b border-slate-100 ${
                  location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                    ? 'text-orange-600'
                    : 'text-slate-900 border-l-4 border-transparent pl-2 hover:border-orange-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="bg-slate-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-center hover:bg-orange-600 transition-colors mt-4 block border border-slate-900"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
