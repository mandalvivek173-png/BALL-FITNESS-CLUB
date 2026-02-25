import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-matte-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 space-y-8">
            <div>
              <span className="text-3xl font-serif gold-gradient-text font-bold">BAL</span>
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mt-1">Fitness Club</p>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              The premier wellness destination in Saharanpur. We provide a sanctuary for physical transformation and mental clarity.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl">Contact</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a href="tel:7533993399" className="hover:text-gold transition-colors">7533993399</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@balfitness.club" className="hover:text-gold transition-colors">info@balfitness.club</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1" />
                <span>Nehru Nagar, Khalasi Lines,<br />Saharanpur, UP</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl">Hours</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-gold">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gold">8:00 AM - 2:00 PM</span>
              </li>
              <li className="pt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest">Open Now</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 Bal Fitness Club. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex gap-4 opacity-60">
            {/* Discreet payment icons */}
            <span className="border border-white/10 px-2 py-1 rounded">UPI</span>
            <span className="border border-white/10 px-2 py-1 rounded">CASH</span>
            <span className="border border-white/10 px-2 py-1 rounded">CARD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
