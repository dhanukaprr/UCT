import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const tourCategories = [
    { title: "Labuan Bajo, Indonesia", path: "/tours/beach", image: "https://images.unsplash.com/photo-1544483785-3ad055d2dc60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "A bustling fishing town located on the western tip of Flores." },
    { title: "Borobudur Temple", path: "/tours/cultural", image: "https://images.unsplash.com/photo-1588636746977-f273614214f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "A magnificent Mahayana Buddhist temple located in Central Java." },
    { title: "Yala National Park", path: "/tours/wildlife", image: "https://images.unsplash.com/photo-1544605650-725ff7eed8c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Experience thrilling wildlife safaris in the heart of nature." },
    { title: "Ella Hill Country", path: "/tours/hill-country", image: "https://images.unsplash.com/photo-1578330769395-5fa4ddc340b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Misty mountains and breathtaking views over valleys." }
  ];

  return (
    <div className="w-full bg-[#F7F7F5]">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 pt-0 md:pt-4">
        <div className="w-full max-w-[95%] mx-auto relative min-h-[85vh] rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-sm">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1585807519159-4ac97e937d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Sri Lanka landscapes" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-20 text-center text-white px-6 mt-16 max-w-4xl mx-auto flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight text-white mb-6"
            >
              Discover Sri Lanka <br/>
              with Authentic Heritage
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-10 leading-relaxed"
            >
               Bridging cultures with authentic travel experiences from Australia to the Pearl of the Indian Ocean. Every location offers a glimpse into traditions that shape our world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/tours" className="inline-block bg-white text-zinc-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors shadow-sm">
                Book a Tour Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Quote Section */}
      <section className="py-24 flex justify-center text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center relative">
            <span className="text-zinc-400 text-xs tracking-wider uppercase mb-8 ml-[-100px] md:absolute md:left-[-120px] md:top-4">(About Us)</span>
            <h2 className="text-3xl md:text-[2.75rem] font-serif text-zinc-900 leading-[1.4] tracking-tight">
               We believe that the most profound journeys are those that lead us to destinations 
               <img src="https://images.unsplash.com/photo-1544483785-3ad055d2dc60?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Ocean" className="inline-block w-14 h-10 object-cover rounded-xl align-middle mx-3 shadow-sm" /> 
               where history lives and breathes—places of rich heritage that have shaped civilizations, inspired generations, and stand as a testament to 
               <img src="https://images.unsplash.com/photo-1588636746977-f273614214f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Ruins" className="inline-block w-14 h-10 object-cover rounded-xl align-middle mx-3 shadow-sm" /> 
               human ingenuity and resilience.
            </h2>
        </div>
      </section>

      {/* Discover Events/Tours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-16">
          <span className="text-zinc-400 text-xs tracking-wider uppercase mb-4">(Tours)</span>
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6 tracking-tight">Discover Curated Travel Experiences</h2>
          <p className="text-zinc-600 max-w-2xl font-light text-lg">
            Explore a variety of exciting tours that are on the horizon, offering unique experiences and opportunities for everyone to enjoy!
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-8">
          {tourCategories.map((category, idx) => (
            <Link to={category.path} key={category.title} className="group flex flex-col bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-[300px] w-full rounded-[1.5rem] overflow-hidden mb-6">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-serif text-zinc-900 mb-3">{category.title}</h3>
                <p className="text-zinc-500 font-light text-sm mb-6 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                  <span className="text-sm font-medium text-zinc-900">Booking Now</span>
                  <ArrowRight size={18} className="text-zinc-600 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature / Testimonial Bar */}
      <section className="py-32 px-4 flex justify-center text-center bg-white mt-12 rounded-t-[3rem] shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-8">
               <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-zinc-900 leading-none pt-2 shadow-sm">“</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 leading-[1.3] mb-8">
               "Exploring the beauty of Sri Lanka was so much more memorable. Their comprehensive team, from hidden gems to practical tips, is a game-changer. Highly recommended for any adventurer!"
            </h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex text-amber-400 text-sm">★★★★★ <span className="text-zinc-900 ml-2 font-medium">5.0</span></div>
              <span className="text-zinc-500 text-sm font-light">Sarah Jenkins, Australia</span>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white pb-32">
        <div className="max-w-6xl mx-auto relative h-[500px] rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center px-6 shadow-xl">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544483785-3ad055d2dc60?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Sri Lanka Coast" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 w-full max-w-2xl">
            <span className="text-white/80 text-sm tracking-wider uppercase mb-4 block font-light">(Call to Action)</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">Prepared to Discover the Real Charm of Sri Lanka?</h2>
            <p className="text-white/90 font-light mb-10 max-w-lg mx-auto">
              Discover stunning destinations rich in history and culture. Each site offers a unique view into the traditions that shape our world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 rounded-full px-6 py-4 focus:outline-none focus:bg-white/20 transition-all font-light"
              />
              <Link to="/contact" className="absolute right-2 top-2 bottom-2 bg-white text-zinc-900 px-6 rounded-full flex items-center justify-center text-sm font-medium hover:bg-zinc-100 transition-colors">
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

