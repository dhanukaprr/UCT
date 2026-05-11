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
    <div className="w-full bg-[#FAF9F6] min-h-screen pt-24 pb-32">
      <div className="text-center pt-16 flex flex-col items-center mb-20 px-6">
        <span className="text-zinc-400 font-light text-xs tracking-widest uppercase mb-6">(Travel Guide)</span>
        <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6 tracking-tight">Travel FAQ</h1>
        <p className="text-zinc-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about traveling to Sri Lanka with UCT Travels.
        </p>
      </div>

      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 lg:p-16 rounded-[2.5rem] shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)] border border-zinc-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-100 last:border-0 py-2">
                  <AccordionTrigger className="text-left font-serif text-xl tracking-tight text-zinc-900 hover:text-zinc-500 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-500 font-light leading-relaxed pb-8 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-16 p-10 bg-[#FAF9F6] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="text-center md:text-left">
                 <h3 className="font-serif tracking-tight text-zinc-900 text-2xl mb-3">Have a different question?</h3>
                 <p className="text-base font-light text-zinc-500 max-w-md">Our travel experts in Australia and Sri Lanka are ready to assist you.</p>
               </div>
               <Link to="/contact" className="inline-block px-8 py-4 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shrink-0 rounded-full shadow-sm">
                 Contact Us
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
