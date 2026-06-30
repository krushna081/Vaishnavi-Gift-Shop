import { motion } from "framer-motion";
import { Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { allServices } from "../data";
import { business } from "../data/business";

export default function Footer() {
  const handleClick = (href) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Gallery", href: "gallery" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <footer className="relative bg-[#0D0005] pt-16 pb-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/logo/logo.jpg"
                alt={business.shopName}
                className="h-12 w-12 rounded-full object-cover border-2 border-gold/30"
                onError={(e) => { e.target.style.display = "none" }}
              />
              <h3 className="font-heading text-2xl font-bold text-gold">
                {business.shopName}
              </h3>
            </div>
            <p className="text-cream/60 text-sm font-body leading-relaxed mb-4">
              {business.tagline}
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href={`https://wa.me/91${business.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-maroon transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>
              <motion.a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-maroon transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm font-body"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {allServices.slice(0, 7).map((service, i) => (
                <li key={i}>
                  <span className="text-cream/50 text-sm font-body">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:+91${business.phone}`}
                className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors duration-300 text-sm font-body group"
              >
                <span className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-all duration-300 flex-shrink-0">
                  <Phone size={14} />
                </span>
                +91 {business.phone}
              </a>
              <div className="flex items-start gap-3 text-cream/50 text-sm font-body">
                <span className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </span>
                {business.address}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-cream/40 text-xs font-body">
            &copy; {new Date().getFullYear()} {business.shopName}. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs font-body flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400" /> by{" "}
            <a
              href="https://krushna081.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Krushna Jadhav
            </a>
            {" "}&bull; Owned by {business.owner}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
