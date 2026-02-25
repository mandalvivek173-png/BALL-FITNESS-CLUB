import { motion } from "motion/react";

const images = [
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", class: "masonry-item-large" },
  { url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop", class: "" },
  { url: "https://images.unsplash.com/photo-1574673139082-c3b8d6d596a8?q=80&w=2072&auto=format&fit=crop", class: "masonry-item-wide" },
  { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", class: "" },
  { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop", class: "masonry-item-large" },
  { url: "https://images.unsplash.com/photo-1590239068512-63275218b214?q=80&w=2067&auto=format&fit=crop", class: "" },
];

export default function Gallery() {
  return (
    <section id="experience" className="py-24 bg-matte-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">The Experience</span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4">Architectural Strength</h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs md:text-right">
            Every detail of Bal Fitness Club is curated to inspire performance and tranquility.
          </p>
        </div>

        <div className="masonry-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl border border-white/5 ${img.class}`}
            >
              <img 
                src={img.url} 
                alt="Gym Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
