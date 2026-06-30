import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { processSteps } from "../data";

function ProcessStep({ step, index }) {
  const IconComponent = LucideIcons[step.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center z-10 relative">
          {IconComponent && (
            <IconComponent size={32} className="text-gold" />
          )}
        </div>

        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
          <span className="text-dark-maroon text-xs font-heading font-bold">
            {step.step}
          </span>
        </div>

        {index < processSteps.length - 1 && (
          <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-gold/40 to-gold/10" />
        )}
      </div>

      <h3 className="font-heading text-lg sm:text-xl font-semibold text-cream mb-2">
        {step.title}
      </h3>
      <p className="text-cream/50 text-sm font-body max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function OrderProcess() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

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
            How It Works
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Simple <span className="gold-gradient">Order Process</span>
          </h2>
          <p className="text-cream/50 text-sm sm:text-base font-body mt-4 max-w-xl mx-auto">
            Get your perfect gift in just 4 easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
