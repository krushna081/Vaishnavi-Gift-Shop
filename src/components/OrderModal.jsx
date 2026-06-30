import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { business } from "../data/business";

const QUANTITY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function OrderModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const generateMessage = () => {
    const nameLine = customerName.trim()
      ? `\nName: ${customerName.trim()}`
      : "";

    const customMsg = product.whatsappMessage || `I want to order ${product.name}.`;

    return [
      `Hello ${business.shopName},`,
      "",
      customMsg,
      "",
      `Product: ${product.name}`,
      `Size: ${selectedSize}`,
      `Quantity: ${quantity}${nameLine}`,
      "",
      "Please share price and delivery details.",
    ].join("\n");
  };

  const handleOrder = () => {
    const message = generateMessage();
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${business.phone}?text=${encoded}`, "_blank");
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const decQuantity = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const incQuantity = () => {
    if (quantity < 10) setQuantity((q) => q + 1);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            className="relative w-full max-w-md"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gold/20">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-maroon/80 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <ShoppingBag size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-cream">
                    Order Now
                  </h3>
                  <p className="text-cream/50 text-xs font-body">{product.name}</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-cream/60 text-xs font-body font-medium uppercase tracking-wider mb-2">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-300 ${
                          selectedSize === size
                            ? "bg-gold text-dark-maroon shadow-lg shadow-gold/20"
                            : "bg-white/5 border border-gold/20 text-cream/60 hover:text-gold hover:border-gold/40"
                        }`}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-cream/60 text-xs font-body font-medium uppercase tracking-wider mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <motion.button
                      onClick={decQuantity}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold/40 transition-all duration-300"
                    >
                      <Minus size={16} />
                    </motion.button>
                    <span className="font-heading text-2xl font-bold text-gold w-8 text-center">
                      {quantity}
                    </span>
                    <motion.button
                      onClick={incQuantity}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-gold/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold/40 transition-all duration-300"
                    >
                      <Plus size={16} />
                    </motion.button>
                    <div className="flex gap-1 ml-2">
                      {QUANTITY_OPTIONS.slice(0, 5).map((n) => (
                        <button
                          key={n}
                          onClick={() => setQuantity(n)}
                          className={`w-8 h-8 rounded-lg text-xs font-body font-medium transition-all duration-300 ${
                            quantity === n
                              ? "bg-gold/20 text-gold border border-gold/30"
                              : "text-cream/40 hover:text-cream/70 border border-transparent"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-cream/60 text-xs font-body font-medium uppercase tracking-wider mb-2">
                    Your Name <span className="text-cream/30">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-gold/10 text-cream placeholder-cream/30 font-body text-sm focus:outline-none focus:border-gold/40 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-gold/10">
                  <p className="text-cream/40 text-xs font-body mb-2">Preview Message:</p>
                  <pre className="text-cream/70 text-xs font-body leading-relaxed whitespace-pre-wrap font-sans">
                    {generateMessage()}
                  </pre>
                </div>

                <motion.button
                  onClick={handleOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 text-white font-body font-semibold text-sm hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/20"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order on WhatsApp
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center bg-dark-maroon/90 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="w-8 h-8">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                    </div>
                    <p className="text-cream font-body text-sm">Opening WhatsApp...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
