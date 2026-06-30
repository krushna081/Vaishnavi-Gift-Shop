import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryModal({ item, onClose, onPrev, onNext }) {
  if (!item) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl w-full"
          >
            <div className="relative rounded-2xl overflow-hidden bg-dark-maroon/30 border border-gold/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-dark-maroon/50 to-gold/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-gold/30 to-gold/5 flex items-center justify-center mb-4">
                    <span className="font-heading text-3xl font-bold text-gold">
                      {item.category.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-gold mb-2">
                    {item.alt}
                  </h3>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-body font-medium border border-gold/20">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-gold/20 border border-gold/10 flex items-center justify-center text-cream hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-gold/20 border border-gold/10 flex items-center justify-center text-cream hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-dark-maroon border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold/40 transition-all duration-300 shadow-xl"
            >
              <X size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
