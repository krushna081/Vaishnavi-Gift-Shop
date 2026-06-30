import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function ServiceCard({ service, index }) {
  const IconComponent = LucideIcons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass-card rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-500"
        >
          {IconComponent && (
            <IconComponent
              size={32}
              className="text-gold group-hover:scale-110 transition-transform duration-500"
            />
          )}
        </motion.div>

        <h3 className="font-heading text-lg sm:text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
          {service.name}
        </h3>

        <p className="text-cream/50 text-xs sm:text-sm font-body leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
