import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-24 pb-0 relative font-sans">
      <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800"></div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
             <Link to="/" className="flex items-center gap-2 max-w-fit">
              <span className="text-2xl font-serif font-medium tracking-tight text-white drop-shadow-sm">UCT<span className="opacity-70"> Travels</span></span>
            </Link>
            <p className="text-sm text-zinc-400 font-light leading-relaxed pr-4">
              Bridging cultures by providing seamless, high-quality travel experiences for travelers eager to discover the "Pearl of the Indian Ocean."
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900 hover:border-white transition-all"><Facebook size={16} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900 hover:border-white transition-all"><Instagram size={16} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-900 hover:border-white transition-all"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8 border-t border-white/10 pt-8 mt-4 md:border-t-0 md:pt-0 md:mt-0">
            <h3 className="text-sm font-medium tracking-wide text-zinc-100 mb-6 font-serif">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm font-light text-zinc-400 hover:text-white transition-colors flex items-center gap-2">About</Link></li>
              <li><Link to="/tours" className="text-sm font-light text-zinc-400 hover:text-white transition-colors flex items-center gap-2">Tours</Link></li>
              <li><Link to="/services" className="text-sm font-light text-zinc-400 hover:text-white transition-colors flex items-center gap-2">Services</Link></li>
              <li><Link to="/faq" className="text-sm font-light text-zinc-400 hover:text-white transition-colors flex items-center gap-2">FAQ</Link></li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div className="border-t border-white/10 pt-8 mt-4 md:border-t-0 md:pt-0 md:mt-0">
            <h3 className="text-sm font-medium tracking-wide text-zinc-100 mb-6 font-serif">Destinations</h3>
            <ul className="space-y-4">
              <li><Link to="/tours/beach" className="text-sm font-light text-zinc-400 hover:text-white transition-colors">Beaches</Link></li>
              <li><Link to="/tours/cultural" className="text-sm font-light text-zinc-400 hover:text-white transition-colors">Culture</Link></li>
              <li><Link to="/tours/wildlife" className="text-sm font-light text-zinc-400 hover:text-white transition-colors">Safaris</Link></li>
              <li><Link to="/tours/hill-country" className="text-sm font-light text-zinc-400 hover:text-white transition-colors">Highlands</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border-t border-white/10 pt-8 mt-4 md:border-t-0 md:pt-0 md:mt-0">
            <h3 className="text-sm font-medium tracking-wide text-zinc-100 mb-6 font-serif">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-zinc-400" size={12} />
                </div>
                <div className="text-sm text-zinc-400 font-light pt-1">
                  <span className="block text-white font-medium mb-1">Australia</span>
                  No. 1/77, Waverley Rd,<br />Chadstone, VIC 3148
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-zinc-400" size={12} />
                </div>
                <div className="text-sm text-zinc-300 font-light">
                  +61 412 445 588
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-zinc-400" size={12} />
                </div>
                <span className="text-sm text-zinc-300 font-light">info@uct.com.au</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-light text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Universal Ceylon Travels. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
           <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
