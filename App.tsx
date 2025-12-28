
import React, { useEffect, useState } from 'react';
import { 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Palette,
  LayoutGrid,
  Zap,
  Shield,
  Layers,
  ExternalLink,
  Globe,
  Database,
  Cloud,
  Workflow,
  Settings,
  Figma,
  SmartphoneNfc,
  Laptop,
  Box,
  Server,
  Terminal,
  Activity,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { Section, GlassCard } from './components/Layout';
import { GridBackground, AbstractHeroVisual } from './components/Visuals';
import { Logo } from './components/Logo';
import ContactPage from './Contact';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'contact') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav contrast logic: Dark theme on hero, Light theme elsewhere
  const isHeroState = currentPage === 'home' && !scrolled;

  const services = [
    { title: "App Development", icon: <Smartphone />, cat: "Dev" },
    { title: "Web Development", icon: <Globe />, cat: "Dev" },
    { title: "UI/UX Design", icon: <Palette />, cat: "Design" },
    { title: "Android Apps", icon: <SmartphoneNfc />, cat: "Mobile" },
    { title: "iOS Apps", icon: <Layers />, cat: "Mobile" },
    { title: "Cross-Platform", icon: <Workflow />, cat: "Mobile" },
    { title: "Enterprise Apps", icon: <Shield />, cat: "Business" },
    { title: "Corporate Sites", icon: <Laptop />, cat: "Web" },
    { title: "Portfolio Sites", icon: <LayoutGrid />, cat: "Web" },
    { title: "E-Commerce", icon: <Box />, cat: "Web" },
    { title: "Custom Web Apps", icon: <Terminal />, cat: "Dev" },
    { title: "Modular Web Systems", icon: <Zap />, cat: "Web" },
    { title: "PWA Apps", icon: <Cpu />, cat: "Dev" },
    { title: "Figma UI/UX", icon: <Figma />, cat: "Design" },
    { title: "Mobile UX", icon: <Smartphone />, cat: "Design" },
    { title: "Website Redesign", icon: <Activity />, cat: "Design" },
    { title: "Admin Dashboards", icon: <LayoutGrid />, cat: "Systems" },
    { title: "CRM Systems", icon: <Database />, cat: "Systems" },
    { title: "Data Analytics", icon: <BarChart3 />, cat: "Systems" },
    { title: "Role-Based Access", icon: <ShieldCheck />, cat: "Systems" },
    { title: "AI-Powered Apps", icon: <Zap />, cat: "Advanced" },
    { title: "API Integrations", icon: <Server />, cat: "Advanced" },
    { title: "Workflow Automation", icon: <Settings />, cat: "Advanced" },
    { title: "Cloud Deployment", icon: <Cloud />, cat: "Advanced" },
    { title: "Maintenance", icon: <Activity />, cat: "Support" }
  ];

  return (
    <div className="min-h-screen font-sans bg-studio-white selection:bg-studio-violet selection:text-white scroll-smooth text-studio-black overflow-x-hidden">
      <GridBackground />

      {/* Enterprise Navigation - High Visibility */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-4 md:px-8 py-5 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3.5 rounded-2xl transition-all duration-500 ${scrolled ? 'backdrop-blur-2xl bg-white/95 border border-black/5 shadow-2xl' : 'bg-transparent'}`}>
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigateTo('home')}>
            <Logo className="w-8 h-8 transition-transform group-hover:scale-110" />
            <span className={`font-black text-xl tracking-tighter transition-colors duration-500 ${isHeroState ? 'text-white' : 'text-studio-black'}`}>DEXAZ</span>
          </div>
          
          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.25em]">
            <button 
              onClick={() => navigateTo('home')} 
              className={`transition-all duration-300 hover:text-studio-pink ${isHeroState ? 'text-white' : 'text-studio-black'} ${currentPage === 'home' ? 'opacity-100 border-b-2 border-studio-pink pb-1' : 'opacity-60 hover:opacity-100'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`transition-all duration-300 hover:text-studio-pink ${isHeroState ? 'text-white' : 'text-studio-black'} ${currentPage === 'contact' ? 'opacity-100 border-b-2 border-studio-pink pb-1' : 'opacity-60 hover:opacity-100'}`}
            >
              Contact
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`px-8 py-3 rounded-xl font-black transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${isHeroState ? 'bg-white text-studio-black hover:bg-studio-pink hover:text-white' : 'bg-studio-black text-white hover:bg-studio-violet shadow-black/10'}`}
            >
              Start Project
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button className={`md:hidden p-2 rounded-lg transition-colors ${isHeroState ? 'text-white hover:bg-white/10' : 'text-studio-black hover:bg-black/5'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - COMPACT & PROFESSIONAL */}
        <div className={`fixed inset-0 bg-studio-black/98 z-[60] transition-transform duration-500 md:hidden flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-8 pt-28 space-y-12">
            <button className="absolute top-10 right-8 text-white p-2" onClick={() => setMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-10">
              <button 
                onClick={() => navigateTo('home')} 
                className="text-2xl font-black text-white text-left tracking-widest hover:text-studio-pink transition-colors flex items-center justify-between group"
              >
                <span>HOME</span>
                <div className="w-8 h-[2px] bg-studio-pink rounded-full" />
              </button>
              <button 
                onClick={() => navigateTo('contact')} 
                className="text-2xl font-black text-white text-left tracking-widest hover:text-studio-pink transition-colors flex items-center justify-between group"
              >
                <span>CONTACT</span>
                <div className="w-8 h-[2px] bg-studio-violet rounded-full" />
              </button>
            </div>

            <div className="mt-auto pb-16 border-t border-white/10 pt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-studio-pink mb-6">Studio Direct</p>
              <a href="mailto:dexaz.studio.official@gmail.com" className="text-base font-bold text-white/80 hover:text-white transition-colors break-all tracking-tight block mb-10">dexaz.studio.official@gmail.com</a>
              <button onClick={() => navigateTo('contact')} className="w-full py-5 bg-white text-studio-black rounded-xl font-black text-[11px] uppercase tracking-[0.3em] shadow-xl active:scale-95 transition-transform">
                Start New Project
              </button>
            </div>
          </div>
        </div>
      </header>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-studio-black text-white section-curve relative overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,60,196,0.18),transparent)]" />
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
              <div className="space-y-10 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-studio-pink mb-2">
                    Digital Engineering Hub
                  </div>
                  <h1 className="text-6xl sm:text-7xl md:text-[90px] font-black tracking-tighter leading-[0.88] flex flex-col">
                    <span>DEXAZ</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-violet to-studio-pink">STUDIO</span>
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/90 max-w-2xl mx-auto lg:mx-0">
                    Engineering Systems for the Future
                  </p>
                </div>

                <p className="text-lg text-studio-grey max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  We build high-performance products and automation layers for enterprises that demand precision, security, and scalability.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <button onClick={() => navigateTo('contact')} className="w-full sm:w-auto px-12 py-5 bg-white text-studio-black font-black rounded-2xl hover:bg-studio-pink hover:text-white transition-all duration-300 uppercase tracking-widest text-xs shadow-2xl shadow-white/5">
                    Consult an Engineer
                  </button>
                  <button onClick={() => {
                    const el = document.getElementById('expertise');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }} className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                    View Capability
                  </button>
                </div>
              </div>

              <div className="hidden lg:block relative float-animation">
                <AbstractHeroVisual />
              </div>
            </div>
          </section>

          {/* Scrolling Expertise Ticker */}
          <div className="bg-studio-lightGrey py-10 border-y border-black/5 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              {[
                "Application Engineering", "Cloud Infrastructure", "System Architecture", "AI Integration", "Security Audits", 
                "UX Strategy", "Cross-Platform Dev", "SaaS Solutions", "Data Visualization"
              ].map((item, i) => (
                <span key={i} className="mx-12 text-[11px] font-black uppercase tracking-[0.35em] text-studio-grey/60">
                  {item} <span className="text-studio-pink ml-12 opacity-50">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <Section id="expertise" title="Technical Capabilities" subtitle="A multi-disciplinary ecosystem focused on engineering excellence across every digital touchpoint.">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
               {services.map((service, idx) => (
                 <div key={idx} className="group p-7 bg-studio-lightGrey border border-black/5 rounded-2xl hover:bg-studio-black hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl">
                   <div className="mb-5 text-studio-violet group-hover:text-studio-pink transition-colors">
                     {/* Fix: Added <any> to React.ReactElement cast to resolve property 'size' error */}
                     {React.cloneElement(service.icon as React.ReactElement<any>, { size: 22 })}
                   </div>
                   <h4 className="text-sm font-black uppercase tracking-tight leading-tight">{service.title}</h4>
                   <div className="mt-3 text-[10px] font-bold opacity-30 uppercase tracking-widest">{service.cat}</div>
                 </div>
               ))}
               <div className="p-8 bg-gradient-to-br from-studio-violet to-studio-pink rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-xl shadow-studio-violet/20">
                  <span className="text-4xl font-black">25+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-3">Core Services</span>
               </div>
             </div>
          </Section>

          {/* Vision/Founder Section */}
          <Section id="founder" className="bg-studio-lightGrey !max-w-none">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-white text-studio-pink text-[10px] font-black uppercase tracking-widest rounded-full border border-black/5 shadow-sm">Executive Vision</div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Precision in Logic</h2>
                <div className="p-10 bg-white border-l-4 border-studio-pink rounded-r-3xl text-left shadow-sm">
                  <p className="text-xl md:text-2xl font-bold leading-relaxed text-studio-black italic opacity-90">
                    "We don't just build software. We engineer digital assets that provide long-term competitive advantages."
                  </p>
                </div>
                <p className="text-studio-grey leading-relaxed text-lg font-medium">
                  Siranthan leads Dexaz Studio with a philosophy rooted in discipline and curiosity. By focusing on secure, scalable system design, he ensures that every project transcends basic functionality to become a true business engine.
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <button onClick={() => navigateTo('contact')} className="flex items-center gap-4 text-studio-black font-black uppercase tracking-[0.25em] text-[10px] hover:text-studio-pink transition-colors group">
                    Work With The Studio <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="relative group px-4 lg:px-0">
                <div className="absolute -inset-6 bg-gradient-to-tr from-studio-violet/20 to-studio-pink/20 rounded-[48px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative bg-studio-black text-white rounded-[40px] overflow-hidden flex flex-col md:flex-row p-6 gap-10 border border-white/10 shadow-2xl">
                  <div className="w-full md:w-64 h-80 rounded-3xl overflow-hidden bg-studio-charcoal relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519085185756-62983055740a?q=80&w=400&h=600&auto=format&fit=crop" 
                      alt="Siranthan - Founder" 
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" 
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center md:text-left py-4">
                    <h4 className="text-4xl font-black tracking-tighter mb-2">SIRANTHAN</h4>
                    <p className="text-studio-pink font-bold text-[10px] uppercase tracking-[0.3em] mb-8">FOUNDER & CHIEF ENGINEER</p>
                    <div className="flex justify-center md:justify-start gap-5">
                      <a 
                        href="https://siranthan.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-studio-pink hover:scale-110 transition-all cursor-pointer border border-white/10 group/icon"
                      >
                        <ExternalLink size={22} className="group-hover/icon:rotate-12 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Footer CTA */}
          <div className="bg-studio-black text-white py-28 md:py-40 section-curve relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-studio-pink rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-studio-violet rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">Elevate your <span className="text-studio-pink">logic.</span></h2>
              <p className="text-xl md:text-2xl text-studio-grey max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">Let's discuss how high-grade digital engineering can scale your operations.</p>
              <div className="pt-8">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="px-16 py-7 bg-white text-studio-black font-black rounded-2xl hover:bg-studio-pink hover:text-white transition-all duration-500 tracking-[0.3em] uppercase text-[10px] shadow-3xl hover:shadow-studio-pink/40 transform hover:-translate-y-1"
                >
                  Initiate Project Brief
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ContactPage />
      )}

      {/* Footer */}
      <footer className="bg-studio-black text-white py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-2 space-y-10">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigateTo('home')}>
              <Logo className="w-12 h-12" />
              <h3 className="text-4xl font-black tracking-tighter">DEXAZ</h3>
            </div>
            <p className="text-studio-grey max-w-sm leading-relaxed text-sm font-medium opacity-80">
              Engineering studio architecting secure digital ecosystems, automated workflows, and high-performance software for the next generation.
            </p>
          </div>
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.4em] text-studio-pink">Explore</h5>
            <ul className="space-y-5 text-studio-grey text-xs font-black uppercase tracking-[0.25em]">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors text-left opacity-70 hover:opacity-100">Home</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors text-left opacity-70 hover:opacity-100">Our Services</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors text-left opacity-70 hover:opacity-100">Get In Touch</button></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="font-black text-[11px] uppercase tracking-[0.4em] text-studio-violet">Global HQ</h5>
            <p className="text-studio-grey text-xs leading-loose font-bold uppercase tracking-[0.2em] opacity-70">
              Tiruppur, India<br />
              Digital-First Studio<br />
              <span className="text-studio-pink mt-6 block font-black opacity-100 tracking-[0.3em]">© {new Date().getFullYear()} DEXAZ STUDIO</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
