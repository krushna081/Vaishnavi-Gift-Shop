import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function ProductCard({ product, index, onOrder }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -6 }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 flex flex-col"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-maroon/50 via-dark-maroon/30 to-gold/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-center z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
              <ShoppingBag size={32} className="text-gold" />
            </div>
            <span className="text-cream/40 text-xs font-body uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        )}

        {product.popular && (
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/20 border border-gold/30">
              <Sparkles size={10} className="text-gold" />
              <span className="text-gold text-[10px] font-body font-medium">Popular</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-heading text-base sm:text-lg font-semibold text-cream mb-1.5 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-cream/50 text-xs sm:text-sm font-body leading-relaxed mb-3 flex-1">
          {product.description}
        </p>

        <div className="mb-4">
          <p className="text-cream/40 text-[10px] font-body uppercase tracking-wider mb-1.5">
            Available Sizes:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="px-2 py-0.5 rounded-md bg-gold/5 border border-gold/10 text-cream/50 text-[10px] font-body"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-gold/5 border border-gold/10 text-gold text-[10px] font-body">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>

        <motion.button
          onClick={() => onOrder(product)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 font-body font-medium text-xs sm:text-sm hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 mt-auto"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Order on WhatsApp
        </motion.button>
      </div>
    </motion.div>
  );
}
