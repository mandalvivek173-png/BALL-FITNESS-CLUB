import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Membership() {
  return (
    <section id="membership" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex justify-center gap-2 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif">Join the Elite</h2>
          
          <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Membership at Bal Fitness Club is by invitation only. We maintain a limited roster to ensure unparalleled access and privacy for our members.
          </p>

          <div className="pt-8">
            <button className="btn-luxury group relative overflow-hidden">
              <span className="relative z-10">Request an Invitation</span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] opacity-40">
              Private tours available by appointment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
