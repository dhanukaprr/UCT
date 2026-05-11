import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-0 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-slate-800 pb-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
             <Link to="/" className="flex items-center gap-2 max-w-fit">
              <div className="w-8 h-8 bg-orange-600 flex items-center justify-center font-bold text-white">U</div>
              <span className="text-xl font-bold tracking-tight text-white">UCT<span className="text-orange-600 underline underline-offset-4 decoration-2">TRAVELS</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Bridging cultures by providing seamless, high-quality travel experiences for travelers eager to discover the "Pearl of the Indian Ocean."
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-colors"><Instagram size={16} /></a>
              <a href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-colors"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8 border-t border-slate-800 pt-8 mt-4 md:border-t-0 md:pt-0 md:mt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 border-l-2 border-orange-600 pl-3">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-600" /> About</Link></li>
              <li><Link to="/tours" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-600" /> Tours</Link></li>
              <li><Link to="/services" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-600" /> Services</Link></li>
              <li><Link to="/faq" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-orange-600" /> FAQ</Link></li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div className="border-t border-slate-800 pt-8 mt-4 md:border-t-0 md:pt-0 md:mt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 border-l-2 border-orange-600 pl-3">Destinations</h3>
            <ul className="space-y-4">
              <li><Link to="/tours/beach" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors">Beaches</Link></li>
              <li><Link to="/tours/cultural" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors">Culture</Link></li>
              <li><Link to="/tours/wildlife" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors">Safaris</Link></li>
              <li><Link to="/tours/hill-country" className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-orange-600 transition-colors">Highlands</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border-t border-slate-800 pt-8 mt-4 md:border-t-0 md:pt-0 md:mt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 border-l-2 border-orange-600 pl-3">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="text-orange-600" size={14} />
                </div>
                <div className="text-sm text-slate-400 font-medium pt-1">
                  <span className="block text-white font-bold uppercase tracking-widest text-[10px] mb-2">Australia</span>
                  No. 1/77, Waverley Rd,<br />Chadstone, VIC 3148
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="text-orange-600" size={14} />
                </div>
                <div className="text-sm text-slate-300 font-bold tracking-widest">
                  +61 412 445 588
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="text-orange-600" size={14} />
                </div>
                <span className="text-sm text-slate-300 font-bold uppercase tracking-widest">info@uct.com.au</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Universal Ceylon Travels. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
           <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
