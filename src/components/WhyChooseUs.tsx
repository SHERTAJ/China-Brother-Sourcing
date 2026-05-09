import { motion } from "motion/react";
import { BENEFITS } from "../constants";

export const WhyChooseUs = () => {
  return (
    <section id="why" className="section-padding bg-[#0B1D33] text-white relative overflow-hidden">
      {/* Recipe 1 Influenced visible grid lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="container-custom h-full grid grid-cols-4 lg:grid-cols-12 gap-0 border-x border-white/10">
          {[...Array(11)].map((_, i) => (
             <div key={i} className="border-r border-white/10 h-full" />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-[1px] bg-brand-gold" />
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold">The Differentiator</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter leading-tight">
              Operational <br />
              Integrity <span className="text-white/20">&</span> <br />
              <span className="text-brand-gold">Performance.</span>
            </h2>

            <div className="grid gap-10">
              {BENEFITS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex gap-6 items-start"
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-all duration-500">
                    <item.icon className="text-brand-gold w-6 h-6 group-hover:text-brand-navy transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-12 -left-12 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl z-20">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-2">Network Status</p>
               <p className="text-brand-gold font-bold text-lg">Connected: Global</p>
            </div>
            
            <div className="relative aspect-square bg-slate-900 overflow-hidden rounded-full border border-white/10 p-20">
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale invert opacity-20" 
                 alt="World Map"
               />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-[1px] border-dashed border-brand-gold/30 rounded-full m-10"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_30px_rgba(197,160,89,1)]" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
