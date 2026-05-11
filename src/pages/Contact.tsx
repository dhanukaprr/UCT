import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

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
    <div className="w-full bg-slate-50 min-h-screen pt-16">
      {/* Header */}
      <section className="bg-slate-900 py-24 lg:py-32 text-white border-b-8 border-orange-600">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
          <span className="inline-block px-3 py-1 bg-slate-800 text-[10px] font-bold text-slate-300 uppercase tracking-widest w-fit mb-6">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-tight">Contact <span className="text-orange-600">Us</span></h1>
          <p className="text-lg font-medium text-slate-400 max-w-2xl mx-auto">
            Ready to plan your Sri Lankan adventure? Our travel experts in Melbourne and Colombo are here to help you craft the perfect itinerary.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-white border border-slate-200">
            
            {/* Contact Details */}
            <div className="w-full lg:w-1/3 p-12 bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="mb-12">
                 <h2 className="text-2xl font-black tracking-tighter uppercase text-slate-900 mb-8 pb-4 border-b border-slate-200">Our Offices</h2>
                 
                 <div className="space-y-8">
                   {/* Australia Office */}
                   <div className="flex items-start space-x-4">
                     <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white shrink-0">
                       <MapPin size={16} />
                     </div>
                     <div>
                       <h3 className="font-bold text-sm uppercase tracking-widest text-slate-900 mb-2">Australia (HQ)</h3>
                       <p className="text-slate-500 font-medium text-sm mb-3">No. 1/77, Waverley Road, Chadstone, VIC 3148</p>
                       <div className="flex items-center text-orange-600 font-bold text-sm uppercase tracking-widest">
                         <Phone size={14} className="mr-2" /> +61 412 445 588
                       </div>
                     </div>
                   </div>

                   {/* Sri Lanka Office */}
                   <div className="flex items-start space-x-4">
                     <div className="w-10 h-10 bg-orange-600 flex items-center justify-center text-white shrink-0">
                       <MapPin size={16} />
                     </div>
                     <div>
                       <h3 className="font-bold text-sm uppercase tracking-widest text-slate-900 mb-2">Sri Lanka</h3>
                       <p className="text-slate-500 font-medium text-sm mb-3">No. 114/A, Attanayake Mawatha, Nugegoda</p>
                       <div className="flex items-center text-orange-600 font-bold text-sm uppercase tracking-widest">
                         <Phone size={14} className="mr-2" /> +94 778 648 652
                       </div>
                     </div>
                   </div>
                 </div>
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tighter uppercase text-slate-900 mb-8 pb-4 border-b border-slate-200">Digital Support</h2>
                <div className="space-y-6">
                   <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                       <Mail size={16} />
                     </div>
                     <span className="text-slate-900 font-bold uppercase tracking-widest text-sm">info@uct.com.au</span>
                   </div>
                   <div className="flex items-center space-x-4">
                     <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                       <Clock size={16} />
                     </div>
                     <span className="text-slate-500 font-medium text-sm">7 Days a Week</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 p-12 lg:p-20">
              <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900 mb-4">Enquire Now</h2>
              <p className="text-slate-500 font-medium mb-12 text-sm max-w-lg">Fill out the form below and our travel consultants will get back to you with a tailor-made proposal within 24 hours.</p>
              
              {submitStatus && (
                <div className={`p-4 mb-8 text-sm font-bold tracking-widest uppercase flex items-start space-x-3 border-l-4 ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border-green-600' : 'bg-red-50 text-red-800 border-red-600'}`}>
                   {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">First & Last Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-orange-600 font-medium transition-colors bg-transparent text-slate-900"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-orange-600 font-medium transition-colors bg-transparent text-slate-900"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-orange-600 font-medium transition-colors bg-transparent text-slate-900"
                      placeholder="+61 400 000 000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Tour Interest</label>
                    <select 
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-orange-600 font-medium transition-colors bg-transparent text-slate-900 appearance-none bg-no-repeat"
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
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message / Travel Details</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-orange-600 font-medium transition-colors bg-transparent text-slate-900 resize-none"
                    placeholder="Tell us about your estimated travel dates, group size, and any specific requests..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white py-5 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-8 border-2 border-transparent"
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
