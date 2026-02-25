import { motion } from "motion/react";
import { Shield, Zap, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Bespoke Training",
    description: "Highly personalized programs designed around your unique physiology and lifestyle goals.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Elite Guidance",
    description: "Access to Saharanpur's most distinguished trainers and performance specialists.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "State-of-the-Art Recovery",
    description: "Advanced recovery protocols including cryotherapy and specialized mobility sessions.",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-matte-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Our Approach</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4">The Standard of Excellence</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-charcoal border border-white/5 p-8 h-[500px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent" />
              </div>

              <div className="relative z-10 space-y-4">
                <service.icon className="text-gold mb-6" size={32} />
                <h3 className="text-2xl font-serif">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4">
                  <button className="text-[10px] uppercase tracking-widest text-gold border-b border-gold/30 pb-1 group-hover:border-gold transition-all">
                    Discover More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
