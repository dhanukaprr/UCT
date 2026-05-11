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
      icon: <Building2 size={32} />,
      title: "Hotel Bookings",
      description: "From luxury boutique villas and 5-star beach resorts to authentic eco-lodges and budget stays, we handle all your accommodation needs at the best rates."
    },
    {
      icon: <Car size={32} />,
      title: "Airport Transfers & Transport",
      description: "Private air-conditioned vehicles with English-speaking chauffeur-guides ensuring your safe and comfortable transport from arrival to departure."
    },
    {
      icon: <Ticket size={32} />,
      title: "Ticket Bookings",
      description: "We handle train tickets for the famous scenic hill country railway, wildlife safari jeeps, and entrance passes to all major cultural triangle sites."
    },
    {
      icon: <FileCheck2 size={32} />,
      title: "Visa Assistance",
      description: "Guidance and assistance regarding the Electronic Travel Authorization (ETA) and tourist visa procedures for entering Sri Lanka."
    },
    {
      icon: <FileText size={32} />,
      title: "Travel Insurance Guidance",
      description: "Advice on essential travel insurance requirements to ensure you are fully covered for peace of mind during your adventure."
    },
    {
      icon: <PartyPopper size={32} />,
      title: "Events & Wedding Planning",
      description: "Specializing in MICE (Meetings, Incentives, Conferences, and Exhibitions) and destination weddings in Sri Lanka's most beautiful settings."
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-16">
      {/* Header */}
      <section className="bg-slate-900 py-24 lg:py-32 text-white border-b-8 border-orange-600">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
          <span className="inline-block px-3 py-1 bg-slate-800 text-[10px] font-bold text-slate-300 uppercase tracking-widest w-fit mb-6">What We Offer</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">Our <span className="text-orange-600">Services</span></h1>
          <p className="text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            A comprehensive suite of travel services to ensure your Sri Lankan journey is stress-free and spectacular.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
            {services.map((service, idx) => (
               <div key={idx} className="bg-white p-12 border-b border-r border-slate-200 hover:bg-slate-50 transition-colors group">
                 <div className="w-16 h-16 bg-slate-900 flex items-center justify-center text-white mb-8 group-hover:bg-orange-600 transition-colors">
                   {service.icon}
                 </div>
                 <h3 className="text-2xl font-black tracking-tighter uppercase text-slate-900 mb-4">{service.title}</h3>
                 <p className="text-slate-500 font-medium text-sm leading-relaxed">
                   {service.description}
                 </p>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
