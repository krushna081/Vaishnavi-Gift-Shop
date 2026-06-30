import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 sm:p-8 flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[420px]"
    >
      <Quote className="text-gold/20 mb-4" size={40} />

      <div className="flex items-center gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-gold text-gold"
          />
        ))}
      </div>

      <p className="text-cream/70 text-sm sm:text-base font-body leading-relaxed mb-6 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-dark-maroon font-bold text-sm font-body">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-cream">
            {review.name}
          </h4>
          <p className="text-cream/40 text-xs font-body">Verified Customer</p>
        </div>
      </div>
    </motion.div>
  );
}
