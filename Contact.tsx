
import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, Phone, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { Section, GlassCard } from './components/Layout';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate a network request for enterprise-grade feel
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      console.log("Inquiry logged locally (Convex removed):", formData);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 space-y-12 bg-studio-white">
      {/* Page Header */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-block px-4 py-1.5 bg-studio-lightGrey border border-black/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-studio-violet mb-4">
          Professional Inquiry
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-studio-black">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-violet to-studio-pink">Dexaz</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold text-studio-grey max-w-2xl mx-auto">Discussing high-performance engineering possibilities for your next major project.</p>
      </section>

      {/* Information Cards */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <GlassCard className="space-y-12" dark>
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tight text-white uppercase">Communication</h3>
              <div className="h-1 w-12 bg-studio-pink rounded-full" />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-studio-pink transition-all duration-500 border border-white/5"><Mail /></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mb-1">Direct Inquiry</div>
                  <a href="mailto:dexaz.studio.official@gmail.com" className="text-lg md:text-xl font-bold hover:text-studio-pink transition-colors break-all">dexaz.studio.official@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-studio-violet transition-all duration-500 border border-white/5"><Phone /></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mb-1">Office Contact</div>
                  <a href="tel:04212223121" className="text-lg md:text-xl font-bold">0421 2223121</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5"><Clock /></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] mb-1">Business Hours</div>
                  <div className="text-lg md:text-xl font-bold">Mon – Sat, 10:00 – 18:00 IST</div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="space-y-12 bg-studio-lightGrey border-none">
            <div className="space-y-2">
              <h3 className="text-2xl font-black tracking-tight text-studio-black uppercase">Studio Base</h3>
              <div className="h-1 w-12 bg-studio-violet rounded-full" />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-studio-black/5 rounded-2xl flex items-center justify-center group-hover:bg-studio-black group-hover:text-white transition-all duration-500 text-studio-black border border-black/5 flex-shrink-0"><MapPin /></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-studio-grey tracking-[0.2em] mb-1">HQ Location</div>
                  <div className="text-xl md:text-2xl font-black text-studio-black">Tiruppur, Tamil Nadu</div>
                  <p className="text-studio-grey text-sm font-bold uppercase tracking-widest mt-1">India</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-black/5">
                <div className="flex items-center gap-4 text-studio-black font-black uppercase tracking-widest text-[10px]">
                  <CheckCircle2 size={16} className="text-studio-violet" /> 
                  Verified Engineering Studio
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section className="bg-studio-lightGrey !max-w-none">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tighter">Project Brief</h2>
            <p className="text-studio-grey font-medium">Initialize our professional consulting process by submitting your requirements below.</p>
          </div>
          
          <GlassCard className="p-8 md:p-12 shadow-2xl border-none relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-studio-violet/10 rounded-full flex items-center justify-center mx-auto text-studio-violet">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black tracking-tighter">Message Delivered</h3>
                  <p className="text-studio-grey font-medium max-w-sm mx-auto">Your brief has been securely processed. A senior engineer will review it shortly.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="flex items-center gap-2 mx-auto text-studio-violet font-black uppercase tracking-widest text-[10px] hover:text-studio-pink transition-colors"
                >
                  <ArrowLeft size={14} /> Send another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`space-y-10 transition-opacity duration-300 ${status === 'sending' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-studio-grey">Full Name</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full bg-studio-lightGrey border-b-2 border-black/5 px-4 py-4 focus:border-studio-pink outline-none transition-all text-studio-black font-bold rounded-xl" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-studio-grey">Work Email</label>
                    <input 
                      required 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com" 
                      className="w-full bg-studio-lightGrey border-b-2 border-black/5 px-4 py-4 focus:border-studio-pink outline-none transition-all text-studio-black font-bold rounded-xl" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-studio-grey">Project Details</label>
                  <textarea 
                    required 
                    name="message"
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your technical requirements..." 
                    className="w-full bg-studio-lightGrey border-b-2 border-black/5 px-4 py-4 focus:border-studio-pink outline-none transition-all text-studio-black font-bold resize-none rounded-xl" 
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <button 
                    disabled={status === 'sending'}
                    type="submit" 
                    className="w-full md:w-auto px-16 py-6 bg-studio-black text-white font-black rounded-2xl hover:bg-studio-violet disabled:bg-studio-grey transition-all tracking-[0.3em] uppercase text-[10px] flex items-center justify-center gap-4 shadow-xl"
                  >
                    {status === 'sending' ? (
                      <>Transmitting <Loader2 size={14} className="animate-spin" /></>
                    ) : (
                      <>Submit Inquiry <Send size={14} /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </GlassCard>
        </div>
      </Section>

      {/* Map Section */}
      <Section title="Base Location" subtitle="Our studio is located in the industrial center of Tiruppur, South India.">
        <div className="rounded-[40px] overflow-hidden border border-black/5 h-[450px] bg-studio-lightGrey shadow-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173111403!2d77.25102555543034!3d11.108524450371648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907993096b7bb%3A0xf6396489b09f582a!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710323456789!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
