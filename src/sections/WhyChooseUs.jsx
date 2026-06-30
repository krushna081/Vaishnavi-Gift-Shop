import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { whyChooseUs } from "../data";

function FeatureCard({ feature, index }) {
  const IconComponent = LucideIcons[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="relative glass-card rounded-2xl p-6 sm:p-8 group hover:border-gold/20 transition-all duration-500"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-gold/10 transition-all duration-500">
          {IconComponent && (
            <IconComponent
              size={24}
              className="text-gold group-hover:scale-110 transition-transform duration-500"
            />
          )}
        </div>

        <div>
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-cream/50 text-sm font-body leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase mb-4 border border-gold/20"
          >
            Why Choose Us
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            What Makes Us <span className="gold-gradient">Different</span>
          </h2>
          <p className="text-cream/50 text-sm sm:text-base font-body mt-4 max-w-xl mx-auto">
            We are committed to delivering excellence in everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {whyChooseUs.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
