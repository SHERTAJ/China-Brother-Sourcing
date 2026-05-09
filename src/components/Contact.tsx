import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8">
              Let's Work Together
            </h2>
            <p className="text-slate-600 mb-12">
              Have a question or ready to start your sourcing journey? <br />
              Get in touch with us today!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-slate-50 border border-slate-100 rounded-xl group">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert" alt="WhatsApp" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp Pakistan</p>
                  <p className="text-2xl font-bold text-brand-navy">03338519369</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-slate-50 border border-slate-100 rounded-xl group">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white shrink-0">
                  <img src="https://cdn-icons-png.flaticon.com/512/0/438.png" className="w-6 h-6 invert" alt="Phone" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">China Number</p>
                  <p className="text-2xl font-bold text-brand-navy">+86 13054277017</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 p-4 rounded-lg outline-none focus:border-brand-gold transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-white border border-slate-200 p-4 rounded-lg outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Company" className="w-full bg-white border border-slate-200 p-4 rounded-lg outline-none focus:border-brand-gold transition-colors" />
                <input type="text" placeholder="WhatsApp / WeChat" className="w-full bg-white border border-slate-200 p-4 rounded-lg outline-none focus:border-brand-gold transition-colors" />
              </div>
              <textarea rows={4} placeholder="Your Message" className="w-full bg-white border border-slate-200 p-4 rounded-lg outline-none focus:border-brand-gold transition-colors resize-none" />
              <button 
                type="submit" 
                className="w-full bg-[#0B1D33] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-brand-gold transition-all group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
