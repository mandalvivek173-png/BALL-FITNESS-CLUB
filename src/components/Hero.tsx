import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Gym Interior" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold uppercase tracking-[0.5em] text-xs mb-6 block font-semibold">
            The Pinnacle of Saharanpur Fitness
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
            Bal Fitness Club
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Where Saharanpur’s elite redefine their limits in a sanctuary of strength and recovery.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#membership" className="btn-luxury">
              Request an Invitation
            </a>
            <a href="#experience" className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-gold transition-all">
              Explore the Club
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
