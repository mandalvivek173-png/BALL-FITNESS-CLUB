import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Membership from "./components/Membership";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-matte-black selection:bg-gold selection:text-matte-black"
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Gallery />
          <Location />
          <Membership />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
