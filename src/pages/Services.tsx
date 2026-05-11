import { 
  Building2, 
  Car, 
  Ticket, 
  FileCheck2, 
  FileText, 
  PartyPopper 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-zinc-400" strokeWidth={1} />,
      title: "Hotel Bookings",
      description: "From luxury boutique villas and 5-star beach resorts to authentic eco-lodges and budget stays, we handle all your accommodation needs at the best rates."
    },
    {
      icon: <Car className="w-8 h-8 text-zinc-400" strokeWidth={1} />,
      title: "Airport Transfers & Transport",
      description: "Private air-conditioned vehicles with English-speaking chauffeur-guides ensuring your safe and comfortable transport from arrival to departure."
    },
    {
      icon: <Ticket className="w-8 h-8 text-zinc-400" strokeWidth={1} />,
      title: "Ticket Bookings",
      description: "We handle train tickets for the famous scenic hill country railway, wildlife safari jeeps, and entrance passes to all major cultural triangle sites."
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-zinc-400" strokeWidth={1} />,
      title: "Visa Assistance",
      description: "Guidance and assistance regarding the Electronic Travel Authorization (ETA) and tourist visa procedures for entering Sri Lanka."
    },
    {
      icon: <FileText className="w-8 h-8 text-zinc-400" strokeWidth={1} />,
      title: "Travel Insurance",
      description: "Advice on essential travel insurance requirements to ensure you are fully covered for peace of mind during your adventure."
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-zinc-400" strokeWidth={1} />,
      title: "Events & Wedding Planning",
      description: "Specializing in MICE (Meetings, Incentives, Conferences, and Exhibitions) and destination weddings in Sri Lanka's most beautiful settings."
    }
  ];

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen pt-24 pb-32">
      <div className="text-center pt-16 flex flex-col items-center mb-20 px-6">
        <span className="text-zinc-400 font-light text-xs tracking-widest uppercase mb-6">(What We Offer)</span>
        <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6 tracking-tight">Our Services</h1>
        <p className="text-zinc-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          A comprehensive suite of travel services to ensure your Sri Lankan journey is stress-free and spectacular.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
             <div key={idx} className="bg-white p-10 lg:p-12 rounded-[2rem] border border-zinc-100 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-start group">
               <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-8 self-start border border-zinc-100 group-hover:scale-110 transition-transform duration-500">
                 {service.icon}
               </div>
               <h3 className="text-2xl font-serif text-zinc-900 mb-4">{service.title}</h3>
               <p className="text-zinc-500 font-light text-sm leading-relaxed">
                 {service.description}
               </p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
