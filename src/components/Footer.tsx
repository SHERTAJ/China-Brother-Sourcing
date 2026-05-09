import { Mail, Phone, Globe, ChevronUp } from "lucide-react";
import { NAV_LINKS } from "../constants";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1D33] pt-32 pb-12 text-white relative border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center">
                <Globe className="text-brand-navy w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl uppercase tracking-tighter leading-none">
                  Brother <span className="text-brand-gold">China</span>
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                  Global Logistics Engineering
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-10">
              A strategic procurement firm specialized in high-volume manufacturing and precision sourcing across mainland China.
            </p>
          </div>

          {/* Nav groups */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-bold text-white/60 hover:text-brand-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Capability</h4>
            <ul className="space-y-4">
              {["Industrial Sourcing", "Quality Control", "Audit & Verify", "Logistics Hub"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm font-bold text-white/60 hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Hubs</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-[1px] bg-brand-gold mt-2 shrink-0" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-1">Guangzhou, CN</p>
                  <p className="text-[10px] text-white/30">+86 13054277017</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-[1px] bg-brand-gold mt-2 shrink-0" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-1">Islamabad, PK</p>
                  <p className="text-[10px] text-white/30">03338519369</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
            <p>© 2026 BROTHER CHINA SOURCING</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Safety Protocols</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">System Status:</span>
             <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Operational</span>
             </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-gold text-brand-navy rounded-full shadow-2xl flex items-center justify-center hover:bg-white transition-all duration-300 group z-50"
      >
        <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};
