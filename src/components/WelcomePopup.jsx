import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image, Gift, Flower2, MessageCircle } from "lucide-react";
import { shopInfo } from "../data";

function randomDelay() {
  return 20000 + Math.floor(Math.random() * 10000);
}

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const scheduleNext = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShow(true), randomDelay());
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleClose = () => {
    setShow(false);
    scheduleNext();
  };

  const handleNav = (href) => {
    setShow(false);
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    scheduleNext();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm"
          >
            <div className="glass-card rounded-2xl p-6 border border-gold/20">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-dark-maroon/80 border border-gold/10 flex items-center justify-center text-cream/50 hover:text-cream transition-all"
              >
                <X size={14} />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-gold mb-1">
                  Welcome!
                </h3>
                <p className="text-cream/60 text-sm font-body">
                  Explore our premium collection
                </p>
              </div>

              <div className="space-y-2.5 mb-5">
                <button
                  onClick={() => handleNav("products")}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-gold/10 text-cream/80 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 font-body text-sm font-medium text-left"
                >
                  <Image size={18} className="text-amber-400" />
                  Browse Frames
                </button>

                <button
                  onClick={() => handleNav("products")}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-gold/10 text-cream/80 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 font-body text-sm font-medium text-left"
                >
                  <Gift size={18} className="text-rose-400" />
                  Gift Hampers
                </button>

                <button
                  onClick={() => handleNav("products")}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-gold/10 text-cream/80 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 font-body text-sm font-medium text-left"
                >
                  <Flower2 size={18} className="text-emerald-400" />
                  Bouquets
                </button>
              </div>

              <a
                href={`https://wa.me/91${shopInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-500 text-white font-body font-semibold text-sm transition-all duration-300 hover:bg-green-600"
                onClick={handleClose}
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
