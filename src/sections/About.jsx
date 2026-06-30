import { motion } from "framer-motion";
import { shopInfo } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark-maroon-light/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-dark-maroon/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/20 flex items-center justify-center mb-4">
                    <span className="font-heading text-5xl font-bold text-gold">VG</span>
                  </div>
                  <p className="text-cream/40 text-sm font-body italic">Since 2020</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border border-gold/10 bg-dark-maroon/50 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-gold">14+</p>
                <p className="text-cream/50 text-[10px] font-body">Services</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase mb-4 border border-gold/20"
            >
              About Us
            </motion.span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              Crafting Memories{" "}
              <span className="gold-gradient">Since Day One</span>
            </h2>

            <div className="space-y-4 text-cream/60 text-sm sm:text-base font-body leading-relaxed">
              <p>
                {shopInfo.name} specializes in premium frames, gift hampers, customized gifts, bouquets, and memorable products for every occasion.
              </p>
              <p>
                Founded by <span className="text-gold font-medium">{shopInfo.owner}</span>, we are dedicated to providing high-quality products that capture life&apos;s most precious moments. From elegant photo frames to luxurious gift hampers, every product is crafted with love and attention to detail.
              </p>
              <p>
                Located at {shopInfo.location}, we serve customers across the region with fast delivery and personalized service.
              </p>
            </div>

            <motion.button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-6 py-3 rounded-full bg-gold/10 border border-gold/20 text-gold font-body font-medium text-sm hover:bg-gold/20 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
