import { motion } from 'motion/react';
import { ArrowRight, MapPin, Compass, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const tourCategories = [
    { title: "Beach Tours", path: "/tours/beach", image: "https://images.unsplash.com/photo-1544483785-3ad055d2dc60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Wildlife Safaris", path: "/tours/wildlife", image: "https://images.unsplash.com/photo-1544605650-725ff7eed8c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Cultural Heritage", path: "/tours/cultural", image: "https://images.unsplash.com/photo-1588636746977-f273614214f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Hill Country", path: "/tours/hill-country", image: "https://images.unsplash.com/photo-1578330769395-5fa4ddc340b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[85vh] border-b border-slate-200">
        <div className="w-full lg:w-7/12 p-12 pt-24 md:pt-32 flex flex-col justify-center gap-6 border-r border-slate-200 bg-white order-2 lg:order-1 relative z-10">
          <div className="inline-block px-3 py-1 bg-slate-200 text-[10px] font-bold text-slate-800 uppercase tracking-widest w-fit">
            Tailored Luxury & Adventure
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-[0.95]">
            DISCOVER<br/>
            <span className="text-orange-600">SRI LANKA</span><br/>
            WITH US.
          </h1>
          <p className="text-slate-500 text-lg max-w-lg leading-relaxed font-medium">
            Bridging cultures with authentic travel experiences from Australia to the Pearl of the Indian Ocean.
          </p>
          <div className="flex gap-4 mt-4 mb-4">
            <div className="flex flex-col border-l-4 border-orange-600 pl-4">
              <span className="text-2xl font-black text-slate-900">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years Exp.</span>
            </div>
            <div className="flex flex-col border-l-4 border-slate-900 pl-4">
              <span className="text-2xl font-black text-slate-900">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Local Support</span>
            </div>
          </div>
          <div>
            <Link to="/tours" className="inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors w-fit">
              <span>View Tour Packages</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-5/12 order-1 lg:order-2 m-0 p-0 relative min-h-[50vh] lg:min-h-full">
           <img 
            src="https://images.unsplash.com/photo-1585807519159-4ac97e937d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Sri Lanka landscapes" 
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-center">
             <div className="inline-block px-3 py-1 bg-slate-200 text-[10px] font-bold text-slate-800 uppercase tracking-widest w-fit mb-6">Welcome to UCT Travels</div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 leading-tight mb-8">
               Your bridge to authentic <span className="text-orange-600">Sri Lankan</span> experiences.
             </h2>
             <p className="text-slate-500 leading-relaxed font-medium text-lg mb-6">
               Established in 2015, Universal Ceylon Travels (Pvt) Ltd is a premier travel agency specializing in connecting Australian travelers with the breathtaking beauty of Sri Lanka.
             </p>
             <p className="text-slate-500 leading-relaxed font-medium mb-8">
               Whether you are seeking luxury beach retreats, thrilling wildlife safaris, culturally immersive journeys, or a bespoke private tour, our team in Melbourne and Colombo ensures a seamless, unforgettable holiday.
             </p>
             <Link to="/about" className="inline-block border-b border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs py-1 hover:text-orange-600 hover:border-orange-600 w-fit transition-colors">
                Read our full story
             </Link>
          </div>
          <div className="w-full lg:w-1/2 bg-slate-100 p-8 lg:p-12 grid grid-cols-2 grid-rows-2 gap-4">
             <div className="bg-slate-900 p-8 flex flex-col justify-between text-white border-t-4 border-orange-600">
               <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Local Info</span>
               <h3 className="text-xl font-black uppercase tracking-tighter">Colombo<br/>Office</h3>
             </div>
             <div className="bg-white p-8 border border-slate-200 flex flex-col justify-between">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Reach</span>
               <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900">Chadstone<br/>HQ</h3>
             </div>
             <div className="bg-white p-8 border border-slate-200 flex flex-col justify-between">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scale</span>
               <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900">Custom<br/>Tours</h3>
             </div>
             <div className="bg-orange-600 p-8 flex flex-col justify-between text-white border-t-4 border-slate-900">
               <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Support</span>
               <h3 className="text-xl font-black uppercase tracking-tighter">24/7<br/>Assistance</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="bg-white border-b border-slate-200">
        <div className="p-12 lg:p-24 border-b border-slate-200 text-center flex flex-col items-center">
          <div className="inline-block px-3 py-1 bg-slate-200 text-[10px] font-bold text-slate-800 uppercase tracking-widest w-fit mb-6">Explore the Island</div>
          <h2 className="text-5xl font-black tracking-tighter uppercase text-slate-900 mb-6">Curated Travel Experiences</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl">From the golden coasts to the misty central highlands, discover our most popular travel packages designed for every type of explorer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {tourCategories.map((category, idx) => (
            <Link to={category.path} key={category.title} className="group relative min-h-[400px] border-r border-slate-200 block overflow-hidden">
              <div className="absolute inset-0 z-10 bg-slate-900/60 group-hover:bg-slate-900/80 transition-colors"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white opacity-80 border-l border-white pl-2">Section 0{idx + 1}</span>
                <div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase text-white mb-6 line-clamp-2">{category.title}</h3>
                  <div className="w-10 h-10 border border-white/40 flex items-center justify-center text-white group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="border-t border-slate-200 p-6 flex justify-center bg-slate-50">
          <Link to="/tours" className="inline-flex items-center space-x-2 text-slate-900 font-bold uppercase tracking-widest text-xs hover:text-orange-600 transition-colors">
            <span>View all tour categories</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Feature Bar */}
      <footer className="bg-white border-b border-slate-200 grid grid-cols-1 md:grid-cols-3">
        <div className="border-b md:border-b-0 md:border-r border-slate-200 p-8 lg:p-12 flex flex-col justify-center gap-2">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Local Expertise</span>
          <p className="text-sm text-slate-600 font-medium max-w-sm">Offices in Australia and Sri Lanka mean you get local support at every step.</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-slate-200 p-8 lg:p-12 flex flex-col justify-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tailored Itineraries</span>
          <p className="text-sm text-slate-600 font-medium max-w-sm">Bespoke packages catering to every travel style, fully customizable.</p>
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center gap-2 bg-slate-50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Seamless Experience</span>
          <p className="text-sm text-slate-600 font-medium max-w-sm">We handle hotels, transfers, and logistics so you don't have to.</p>
        </div>
      </footer>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white min-h-[50vh] flex flex-col justify-center border-t-4 border-orange-600 border-b-[16px] border-b-slate-900">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 py-24 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">Ready to plan your <br/><span className="text-orange-600">Sri Lankan</span> getaway?</h2>
          <p className="text-lg text-slate-400 font-medium mb-10 max-w-2xl mx-auto">Get in touch with our travel experts to get a free quote, early bird specials for 2026, or to customize your perfect itinerary.</p>
          <Link to="/contact" className="inline-flex items-center space-x-2 bg-white text-slate-900 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors">
            <span>Enquire Now</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
