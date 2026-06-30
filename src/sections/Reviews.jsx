import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0005]/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Testimonials
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            What Our <span className="gold-gradient">Customers Say</span>
          </h2>
          <p className="text-cream/50 text-sm sm:text-base font-body mt-4 max-w-xl mx-auto">
            Real reviews from our happy customers
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="snap-start flex-shrink-0">
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-6 w-16 bg-gradient-to-r from-[#0D0005] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-[#0D0005] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
