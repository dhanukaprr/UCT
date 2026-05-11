export default function About() {
  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1588636746977-f273614214f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-6 w-full max-w-4xl mt-12">
          <span className="inline-block text-white/80 text-sm font-light tracking-widest uppercase mb-6">(Our Story)</span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-6">About UCT Travels</h1>
          <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto">
            Established in 2015, we are your bridge to authentic Sri Lankan experiences.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 text-zinc-600 font-light leading-relaxed">
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-12 border-b border-zinc-200 pb-8">Universal Ceylon Travels</h2>
            
            <p className="text-xl leading-relaxed text-zinc-800">
              Universal Ceylon Travels (Pvt) Ltd is a premier travel agency based in Sri Lanka, specializing in both inbound and outbound tourism. The mission is to bridge cultures by providing seamless, high-quality travel experiences for both locals looking to explore the world and international travelers eager to discover the "Pearl of the Indian Ocean."
            </p>
            
            <div className="py-12 border-y border-zinc-100 my-16">
              <p className="text-xl lg:text-2xl font-serif text-zinc-900 leading-relaxed text-center italic">
                "Our core target market revolves around the Australian demographic—serving families, solo travelers, honeymooners, and adventure-seekers from across Australia."
              </p>
              <p className="text-center mt-6 text-sm text-zinc-500 uppercase tracking-widest">
                With a local office in Chadstone, Victoria
              </p>
            </div>

            <div>
              <p className="mb-16 text-lg">
                We provide a unique advantage: you can discuss and design your tailored itinerary face-to-face or via a local phone call, while our Colombo office ensures your experience on the ground in Sri Lanka is flawless.
              </p>
              
              <h3 className="text-2xl font-serif text-zinc-900 mt-16 mb-8">Our Specialities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Luxury travel experiences & private customized tours', 
                  'Tailor-made budget & backpacker tours', 
                  'Specialized itineraries (Wildlife, Cultural, Ayurvedic, Ramayana)', 
                  'MICE & Event Planning', 
                  'End-to-End services including hotels, transfers, and visa assistance'
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-4 p-8 bg-white border border-zinc-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow">
                     <span className="w-10 h-10 bg-zinc-50 rounded-full text-zinc-400 flex items-center justify-center font-serif text-lg shrink-0">0{i+1}</span>
                    <span className="font-medium text-zinc-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
