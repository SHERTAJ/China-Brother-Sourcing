import { ChevronRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold">
                The Philosophy
              </span>
              <div className="h-[1px] flex-1 bg-brand-gold/20" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-navy mb-12 tracking-tighter leading-[0.9]">
              Precision <br />
              <span className="text-slate-300 italic serif">Sourcing</span> <br />
              Redefined.
            </h2>
            
            <div className="space-y-8 text-slate-500 leading-relaxed font-medium">
              <p>
                Founded in 2012, Brother China Sourcing was built on a singular belief: that international procurement should be transparent, risk-averse, and highly efficient.
              </p>
              <p>
                We do not just find suppliers; we engineer supply chains. Our field operatives work directly on factory floors in Guangdong, Zhejiang, and Fujian to ensure your specifications are met with absolute fidelity.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-slate-200 pt-12">
              <div>
                <p className="text-3xl font-bold text-brand-navy mb-2">500+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted Suppliers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-navy mb-2">12M+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Order Volume Managed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Engineering"
                />
              </div>
              <div className="col-span-12 md:col-span-5 aspect-square bg-[#0B1D33] rounded-2xl p-8 flex flex-col justify-center text-white">
                <div className="text-brand-gold mb-6">
                   <ChevronRight size={40} strokeWidth={1} />
                </div>
                <p className="text-sm font-medium leading-relaxed italic opacity-80">
                  "Sourcing excellence is not an act, but a habit of meticulous verification and unwavering integrity."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-5 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Protocol"
                />
              </div>
              <div className="col-span-12 md:col-span-7 aspect-[16/9] rounded-2xl overflow-hidden shadow-xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Logistics"
                />
                <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
