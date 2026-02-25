import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Prime Access</span>
            <h2 className="text-4xl md:text-6xl font-serif">The Destination</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Located in the heart of Saharanpur, our club offers a discreet and exclusive environment for those who demand the best.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-matte-black border border-white/5 rounded-full text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Location</h4>
                  <p className="text-white/40">Nehru Nagar, Khalasi Lines, Saharanpur, UP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-matte-black border border-white/5 rounded-full text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Morning Ritual</h4>
                  <p className="text-white/40">Join us from 6:00 AM daily</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Nehru+Nagar+Khalasi+Lines+Saharanpur" 
              target="_blank" 
              className="inline-flex items-center gap-3 text-gold text-xs uppercase tracking-widest hover:gap-5 transition-all"
            >
              Get Directions <Navigation size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video bg-matte-black rounded-2xl overflow-hidden border border-white/5"
          >
            {/* Minimalist Map Placeholder */}
            <div className="absolute inset-0 grayscale opacity-40 hover:opacity-60 transition-opacity duration-700">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map View" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <MapPin className="text-matte-black" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
