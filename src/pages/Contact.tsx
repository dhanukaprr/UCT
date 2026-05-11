import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your inquiry! Our team will contact you shortly.' });
        setFormData({ name: '', email: '', phone: '', tourType: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Failed to connect to the server. Please check your connection or contact us directly via phone.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen pt-24 pb-32">
      {/* Header */}
      <div className="text-center pt-16 flex flex-col items-center mb-20 px-6">
        <span className="text-zinc-400 font-light text-xs tracking-widest uppercase mb-6">(Get in Touch)</span>
        <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6 tracking-tight">Contact Us</h1>
        <p className="text-zinc-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          Ready to plan your Sri Lankan adventure? Our travel experts in Melbourne and Colombo are here to help you craft the perfect itinerary.
        </p>
      </div>

      {/* Main Content */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-zinc-100">
            
            {/* Contact Details */}
            <div className="w-full lg:w-5/12 p-10 lg:p-14 bg-zinc-50 border-b lg:border-b-0 lg:border-r border-zinc-100 flex flex-col justify-between">
              <div className="mb-12">
                 <h2 className="text-2xl font-serif tracking-tight text-zinc-900 mb-8 pb-6 border-b border-zinc-200">Our Offices</h2>
                 
                 <div className="space-y-8">
                   {/* Australia Office */}
                   <div className="flex items-start space-x-4">
                     <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 shrink-0 bg-white">
                       <MapPin size={16} strokeWidth={1.5} />
                     </div>
                     <div className="pt-2">
                       <h3 className="font-serif text-lg tracking-tight text-zinc-900 mb-2">Australia (HQ)</h3>
                       <p className="text-zinc-500 font-light text-sm mb-4">No. 1/77, Waverley Road, Chadstone, VIC 3148</p>
                       <div className="flex items-center text-zinc-900 font-medium text-sm">
                         <Phone size={14} className="mr-2 text-zinc-400" /> +61 412 445 588
                       </div>
                     </div>
                   </div>

                   {/* Sri Lanka Office */}
                   <div className="flex items-start space-x-4 pt-4">
                     <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 shrink-0 bg-white">
                       <MapPin size={16} strokeWidth={1.5} />
                     </div>
                     <div className="pt-2">
                       <h3 className="font-serif text-lg tracking-tight text-zinc-900 mb-2">Sri Lanka</h3>
                       <p className="text-zinc-500 font-light text-sm mb-4">No. 114/A, Attanayake Mawatha, Nugegoda</p>
                       <div className="flex items-center text-zinc-900 font-medium text-sm">
                         <Phone size={14} className="mr-2 text-zinc-400" /> +94 778 648 652
                       </div>
                     </div>
                   </div>
                 </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif tracking-tight text-zinc-900 mb-8 pb-6 border-b border-zinc-200">Digital Support</h2>
                <div className="space-y-6">
                   <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 shrink-0 bg-white">
                       <Mail size={16} strokeWidth={1.5} />
                     </div>
                     <span className="text-zinc-900 font-medium text-sm">info@uct.com.au</span>
                   </div>
                   <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 shrink-0 bg-white">
                       <Clock size={16} strokeWidth={1.5} />
                     </div>
                     <span className="text-zinc-500 font-light text-sm">7 Days a Week</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-7/12 p-10 lg:p-16">
              <h2 className="text-4xl font-serif text-zinc-900 mb-4 tracking-tight">Enquire Now</h2>
              <p className="text-zinc-500 font-light mb-12 text-sm max-w-lg leading-relaxed">Fill out the form below and our travel consultants will get back to you with a tailor-made proposal within 24 hours.</p>
              
              {submitStatus && (
                <div className={`p-4 mb-8 text-sm font-medium tracking-wide flex items-start space-x-3 rounded-xl border ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                   {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-zinc-400">First & Last Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-zinc-200 py-3 px-1 focus:outline-none focus:border-zinc-900 font-light transition-colors bg-transparent text-zinc-900"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-zinc-400">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-zinc-200 py-3 px-1 focus:outline-none focus:border-zinc-900 font-light transition-colors bg-transparent text-zinc-900"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-zinc-400">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-zinc-200 py-3 px-1 focus:outline-none focus:border-zinc-900 font-light transition-colors bg-transparent text-zinc-900"
                      placeholder="+61 400 000 000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wide text-zinc-400">Tour Interest</label>
                    <select 
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full border-b border-zinc-200 py-3 px-1 focus:outline-none focus:border-zinc-900 font-light transition-colors bg-transparent text-zinc-900 appearance-none bg-no-repeat"
                      style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundPosition: 'right .5rem center', backgroundSize: '.65em auto' }}
                    >
                      <option value="">Select a Tour Type</option>
                      <option value="Beach Tours">Beach Tours</option>
                      <option value="Cultural Tours">Cultural Tours</option>
                      <option value="Wildlife Tours">Wildlife Tours</option>
                      <option value="Hill Country Tours">Hill Country Tours</option>
                      <option value="Honeymoon Tours">Honeymoon Tours</option>
                      <option value="Custom Tour">Private Custom Tour</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wide text-zinc-400">Message / Travel Details</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-200 py-3 px-1 focus:outline-none focus:border-zinc-900 font-light transition-colors bg-transparent text-zinc-900 resize-none"
                    placeholder="Tell us about your estimated travel dates, group size, and any specific requests..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-auto ml-auto bg-zinc-900 hover:bg-zinc-800 text-white py-4 px-10 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-8 border border-transparent shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
