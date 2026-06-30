import { motion } from "framer-motion";
import { MessageCircle, Eye, Phone, MapPin } from "lucide-react";
import { shopInfo } from "../data";

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-maroon/90 via-[#1A000A] to-dark-maroon/80" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-dark-maroon-light/20 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/logo.jpg"
            alt={shopInfo.name}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-gold/30 mx-auto mb-4"
            onError={(e) => { e.target.style.display = "none" }}
          />

          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase mb-3">
            {shopInfo.name}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3"
        >
          <span className="gold-gradient">We Make</span>
          <br />
          <span className="text-[#FFF8F0]">Every Memory</span>
          <br />
          <span className="gold-gradient">Beautiful</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#FFF8F0]/60 text-sm sm:text-base md:text-lg font-body max-w-xl mx-auto mb-6 leading-relaxed"
        >
          Premium Frames, Gift Hampers & Customized Gifts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col items-center gap-3 max-w-md mx-auto"
        >
          <button
            onClick={() => handleScroll("products")}
            className="w-full h-[52px] flex items-center justify-center gap-2.5 rounded-full font-body font-semibold text-base transition-all duration-300 pulse-gold"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8962F)",
              color: "#5A002C",
              boxShadow: "0 4px 24px rgba(212, 175, 55, 0.35)",
            }}
          >
            <Eye size={20} />
            View Products
          </button>

          <div className="grid grid-cols-2 gap-3 w-full">
            <a
              href={`https://wa.me/91${shopInfo.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[50px] flex items-center justify-center gap-2 rounded-full bg-green-500 text-white font-body font-semibold text-sm transition-all duration-300"
            >
              <MessageCircle size={18} />
              Order Now
            </a>

            <a
              href={`tel:+91${shopInfo.phone}`}
              className="h-[50px] flex items-center justify-center gap-2 rounded-full border font-body font-semibold text-sm transition-all duration-300 text-cream"
              style={{ borderColor: "rgba(212, 175, 55, 0.3)" }}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          <button
            onClick={() => handleScroll("contact")}
            className="flex items-center gap-1.5 text-cream/50 hover:text-gold transition-colors duration-300 text-xs font-body mt-1"
          >
            <MapPin size={12} />
            {shopInfo.location}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
