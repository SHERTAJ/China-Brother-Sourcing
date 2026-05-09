import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "../constants";

export const Services = () => {
  const S0Icon = SERVICES[0].icon;
  const S1Icon = SERVICES[1].icon;
  const S2Icon = SERVICES[2].icon;
  const S3Icon = SERVICES[3].icon;
  const S4Icon = SERVICES[4].icon;
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative vertical lines like Recipe 1 */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-slate-100 hidden lg:block" />
      <div className="absolute inset-y-0 left-2/4 w-[1px] bg-slate-100 hidden lg:block" />
      <div className="absolute inset-y-0 left-3/4 w-[1px] bg-slate-100 hidden lg:block" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold mb-6 block"
            >
              Operational Capabilities
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-brand-navy leading-tight tracking-tight"
            >
              Strategic Infrastructure <br />
              <span className="text-slate-300">for Global Trade.</span>
            </motion.h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Our end-to-end solutions are engineered to minimize risk and maximize margin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-6 bg-[#0B1D33] text-white p-10 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <S0Icon className="text-brand-navy w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{SERVICES[0].title}</h3>
              <p className="text-white/60 leading-relaxed max-w-sm">
                Comprehensive directory navigation and selection of premium manufacturers across all industrial sectors in mainland China.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4 text-brand-gold text-xs font-black uppercase tracking-widest">
              Explore Capability <ChevronRight size={14} />
            </div>
          </motion.div>

          {/* Side Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 lg:col-span-3 bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
          >
            <div className="mb-12 text-brand-gold">
              <S1Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">{SERVICES[1].title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{SERVICES[1].desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 lg:col-span-3 bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
          >
            <div className="mb-12 text-brand-gold">
              <S2Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">{SERVICES[2].title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{SERVICES[2].desc}</p>
          </motion.div>

          {/* Bottom Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 lg:col-span-4 bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
          >
             <div className="mb-12 text-brand-gold">
              <S3Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">{SERVICES[3].title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{SERVICES[3].desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-6 lg:col-span-8 bg-[#C5A059] p-10 rounded-2xl flex flex-col md:flex-row items-center gap-10 overflow-hidden relative"
          >
             <div className="relative z-10 md:w-1/2">
                <div className="w-12 h-12 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center mb-8">
                  <S4Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{SERVICES[4].title}</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed">{SERVICES[4].desc}</p>
             </div>
             <div className="md:w-1/2 relative h-48 md:h-full w-full">
                <img 
                  src="https://images.unsplash.com/photo-1494412574041-ba5620b772f9?q=80&w=2600&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-inner mix-blend-multiply opacity-20"
                  alt="Logistics"
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
