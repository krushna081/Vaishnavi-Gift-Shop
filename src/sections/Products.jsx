import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { products, productCategories } from "../data/products";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModal";

const INITIAL_SHOW = 8;

const categoryOrder = ["Frames", "Gift Hampers", "Bouquets", "Customized Gifts"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [orderProduct, setOrderProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      const ai = categoryOrder.indexOf(a.category);
      const bi = categoryOrder.indexOf(b.category);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    return result;
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    setShowAll(false);
  }, [activeCategory, searchQuery]);

  const displayedProducts = showAll || filteredProducts.length <= INITIAL_SHOW
    ? filteredProducts
    : filteredProducts.slice(0, INITIAL_SHOW);

  const hasMore = filteredProducts.length > INITIAL_SHOW;

  return (
    <section id="products" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase mb-4 border border-gold/20"
          >
            Our Products
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Browse Our <span className="gold-gradient">Collection</span>
          </h2>
          <p className="text-cream/50 text-sm sm:text-base font-body mt-4 max-w-xl mx-auto">
            Select a product, choose your size, and order directly on WhatsApp
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/30" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-11 py-3 rounded-xl bg-white/5 border border-gold/10 text-cream placeholder-cream/30 font-body text-sm focus:outline-none focus:border-gold/40 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {productCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-body font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-dark-maroon shadow-lg shadow-gold/20"
                  : "bg-transparent border border-gold/20 text-cream/60 hover:text-gold hover:border-gold/40"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            >
              {displayedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onOrder={setOrderProduct}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-4">
                <Search size={28} className="text-cream/30" />
              </div>
              <p className="text-cream/50 font-body text-sm">
                No products found for &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-gold text-sm font-body hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileTap={{ scale: 0.97 }}
              className="btn-touch px-8 py-3 rounded-full bg-gold/10 border border-gold/20 text-gold font-body font-semibold text-sm gap-2 hover:bg-gold/20 transition-all duration-300"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={18} /></>
              ) : (
                <>See All ({filteredProducts.length}) <ChevronDown size={18} /></>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>

      <OrderModal
        product={orderProduct}
        onClose={() => setOrderProduct(null)}
      />
    </section>
  );
}
