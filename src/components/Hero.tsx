import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { TRUST_BADGES } from "../constants";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:h-screen flex items-center bg-[#0B1D33] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} />
      </div>

      <div className="container-custom relative z-10 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-brand-gold" />
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px]">
                Established 2012
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[0.95] tracking-tighter">
              The China <br />
              <span className="text-brand-gold">Sourcing</span> <br />
              Intelligence.
            </h1>
            
            <p className="text-lg text-white/60 mb-12 max-w-lg leading-relaxed font-medium">
              We specialize in bridging the gap between global demand and Chinese manufacturing excellence. Precision procurement at scale.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-16">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-sm flex items-center gap-3 hover:bg-white transition-all duration-500 shadow-xl shadow-brand-gold/10"
              >
                Start Sourcing <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">
                      {i === 3 ? "50+" : ""}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-black leading-none">
                  Clients <br /> Worldwide
                </div>
              </div>
            </div>

            {/* Trust Badges Minimal */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
              {TRUST_BADGES.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-white/20">
                    <item.icon size={20} strokeWidth={1} />
                  </div>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.1em]">
                    {item.text.replace("\n", " ")}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2600&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                alt="Sourcing Hub"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
              
              {/* Floating Bento Stats */}
              <div className="absolute top-8 left-8 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-brand-gold font-bold text-3xl mb-1">98%</p>
                <p className="text-[10px] text-white/60 uppercase font-black tracking-widest">Quality Rate</p>
              </div>
              
              <div className="absolute bottom-8 right-8 p-6 bg-brand-gold rounded-xl shadow-2xl">
                <p className="text-brand-navy font-bold text-3xl mb-1">12+</p>
                <p className="text-[10px] text-brand-navy/60 uppercase font-black tracking-widest">Years Expertise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
