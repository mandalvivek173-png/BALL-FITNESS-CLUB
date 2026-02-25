import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-matte-black/90 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-2xl font-serif tracking-tighter gold-gradient-text font-bold">BAL</span>
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 -mt-1">Fitness Club</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {["Experience", "Services", "Location", "Membership"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a href="tel:7533993399" className="flex items-center gap-2 text-gold border border-gold/30 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
            <Phone size={14} />
            7533993399
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-matte-black border-b border-white/10 p-8 flex flex-col space-y-6 md:hidden"
        >
          {["Experience", "Services", "Location", "Membership"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif tracking-widest text-center"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
