import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need a tourist visa for Sri Lanka?",
      answer: "Yes, most international travelers (including Australian citizens) require an Electronic Travel Authorization (ETA) or tourist visa to enter Sri Lanka. You can apply for this online prior to your arrival."
    },
    {
      question: "Is it safe to visit Sri Lanka right now?",
      answer: "Yes, Sri Lanka is generally a very safe destination for tourists. As with any international travel, we recommend practicing standard safety precautions. Our local team is also on-ground to ensure your safety and comfort at all times."
    },
    {
      question: "What is the best time to visit?",
      answer: "Sri Lanka is a year-round destination! The best time depends on which part of the island you wish to visit. The West and South coasts (and Hill Country) are best from December to March, while the East coast is best from April to September."
    },
    {
      question: "What exactly is included and excluded in the itinerary?",
      answer: "This depends on your specific package choice. Generally, accommodation, daily breakfast, private transport with a chauffeur-guide, and specified activities are included. Flights, lunches/dinners, and personal expenses are usually excluded unless you opt for an all-inclusive package."
    },
    {
      question: "Can I customize the tour?",
      answer: "Absolutely! Our tours are fully customizable. Whether you want to add an extra day at the beach, change your hotel category, or include a special activity, our travel consultants will tailor the itinerary to your exact wishes."
    },
    {
      question: "How much local currency should I carry? Are ATMs available?",
      answer: "ATMs are widely available in cities and most towns, and credit cards are widely accepted at hotels and larger restaurants. We recommend carrying a moderate amount of Sri Lankan Rupees (LKR) for small purchases, tipping, and local markets. Australian Dollars are easily exchangeable at banks and authorized money changers."
    },
    {
      question: "Are there hidden fees? Will the price change after I book?",
      answer: "We pride ourselves on full transparency. There are no hidden fees. Once your booking is confirmed and the deposit is paid, the price is guaranteed."
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-16">
      <section className="bg-slate-900 py-24 lg:py-32 text-white border-b-8 border-orange-600">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
          <span className="inline-block px-3 py-1 bg-slate-800 text-[10px] font-bold text-slate-300 uppercase tracking-widest w-fit mb-6">Travel Guide</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">Travel <span className="text-orange-600">FAQ</span></h1>
          <p className="text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about traveling to Sri Lanka with UCT Travels.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 lg:p-16 border-t-8 border-t-slate-900 border border-slate-200">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 px-6 data-[state=open]:border-orange-600 transition-colors">
                  <AccordionTrigger className="text-left font-black tracking-tighter uppercase text-lg text-slate-900 hover:text-orange-600 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 font-medium leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-16 p-12 bg-slate-100 flex flex-col md:flex-row items-center border border-slate-200 justify-between gap-6">
               <div className="text-center md:text-left">
                 <h3 className="font-black tracking-tighter uppercase text-slate-900 text-xl mb-2">Have a different question?</h3>
                 <p className="text-sm font-medium text-slate-500">Our travel experts in Australia and Sri Lanka are ready to assist you.</p>
               </div>
               <Link to="/contact" className="inline-block px-8 py-4 bg-slate-900 text-white text-xs uppercase tracking-widest font-bold hover:bg-orange-600 transition-colors shrink-0">
                 Contact Us
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
