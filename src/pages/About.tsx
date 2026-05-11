export default function About() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-16">
      {/* Header */}
      <section className="bg-slate-900 py-24 lg:py-32 text-white border-b-8 border-orange-600">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
          <span className="inline-block px-3 py-1 bg-slate-800 text-[10px] font-bold text-slate-300 uppercase tracking-widest w-fit mb-6">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">About<br/><span className="text-orange-600">UCT Travels</span></h1>
          <p className="text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            Established in 2015, we are your bridge to authentic Sri Lankan experiences.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 lg:p-20 border border-slate-200 border-t-8 border-t-slate-900 border-l-[16px] border-l-slate-900">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 mb-8 border-b-2 border-slate-100 pb-4">Universal Ceylon Travels (Pvt) Ltd</h2>
            <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
              <p className="text-lg">
                Universal Ceylon Travels (Pvt) Ltd is a premier travel agency based in Sri Lanka, specializing in both inbound and outbound tourism. The mission is to bridge cultures by providing seamless, high-quality travel experiences for both locals looking to explore the world and international travelers eager to discover the "Pearl of the Indian Ocean."
              </p>
              <div className="p-8 bg-slate-50 border-l-4 border-orange-600 text-slate-700 italic">
                Our core target market revolves around the Australian demographic—serving families, solo travelers, honeymooners, and adventure-seekers from across Australia. With a local office in Chadstone, Victoria, we provide a unique advantage: you can discuss and design your tailored itinerary face-to-face or via a local phone call, while our Colombo office ensures your experience on the ground in Sri Lanka is flawless.
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tighter uppercase text-slate-900 mt-12 mb-6">Our Specialities</h3>
                <ul className="space-y-3">
                  {['Luxury travel experiences & private customized tours', 'Tailor-made budget & backpacker tours', 'Specialized itineraries (Wildlife, Cultural, Ayurvedic, Ramayana)', 'MICE & Event Planning', 'End-to-End services including hotels, transfers, and visa assistance'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 border border-slate-100 hover:border-orange-600 transition-colors bg-white">
                      <span className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">0{i+1}</span>
                      <span className="font-bold text-slate-700 uppercase tracking-widest text-xs mt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
