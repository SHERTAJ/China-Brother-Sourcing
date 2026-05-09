import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "../constants";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-8"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center shadow-xl transition-transform group-hover:rotate-12">
              <Globe className="text-brand-navy w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg tracking-tight uppercase leading-none ${scrolled ? "text-brand-navy" : "text-white"}`}>
                Brother <span className="text-brand-gold">China</span>
              </span>
              <span className={`text-[8px] font-black uppercase tracking-[0.3em] ${scrolled ? "text-brand-navy/40" : "text-white/40"}`}>
                Sourcing Intel
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-gold relative group/link ${
                    scrolled ? "text-brand-navy" : "text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover/link:w-full" />
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                scrolled 
                  ? "bg-brand-navy text-white border-brand-navy hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy" 
                  : "bg-white text-brand-navy border-white hover:bg-transparent hover:text-white"
              }`}
            >
              Inquire Now
            </a>
          </div>

          {/* Menu Toggle */}
          <button 
            className={`flex items-center gap-3 p-2 transition-all hover:text-brand-gold ${
              scrolled ? "text-brand-navy" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="hidden lg:block text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Menu</span>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[110] bg-brand-navy p-10 flex flex-col items-center justify-center text-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-10 right-10 text-white/40 hover:text-white p-2 transition-colors rounded-full"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white/90 hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-md"
              >
                Contact Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
