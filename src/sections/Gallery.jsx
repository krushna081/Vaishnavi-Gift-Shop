import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { galleryItems, galleryCategories } from "../data";
import { products } from "../data/products";
import GalleryModal from "../components/GalleryModal";
import OrderModal from "../components/OrderModal";

const galleryToProduct = {
  "Photo Frame": "Photo Frame",
  "Family Frame": "Family Frame",
  "Certificate Frame": "Certificate Frame",
  "Gift Hamper": "Birthday Hamper",
  "Premium Hamper": "Anniversary Hamper",
  "Chocolate Bouquet": "Chocolate Bouquet",
  "Flower Bouquet": "Flower Bouquet",
  "Customized Gift": "Customized Gift",
  "Anniversary Gift": "Anniversary Gift",
  "Birthday Gift": "Birthday Gift",
  "Baby Frame": "Baby Certificate Frame",
  "Birthday Hamper": "Birthday Hamper",
};

function findProduct(galleryAlt) {
  const productName = galleryToProduct[galleryAlt];
  if (!productName) return null;
  return products.find((p) => p.name === productName) || null;
}

function GalleryItem({ item, index, onClick, onOrderClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`group cursor-pointer relative rounded-xl overflow-hidden glass-card ${
        index === 0 || index === 7 ? "row-span-2" : ""
      }`}
      onClick={onClick}
    >
      {!imgError && item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="aspect-square bg-gradient-to-br from-dark-maroon/50 to-gold/5 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl bg-gradient-to-br from-gold/30 to-gold/5 flex items-center justify-center mb-2">
              <ImageIcon size={24} className="text-gold/50" />
            </div>
            <p className="text-cream/60 text-xs font-body">{item.alt}</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-dark-maroon/90 via-dark-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4">
        <div>
          <p className="text-cream text-xs sm:text-sm font-body font-medium">{item.alt}</p>
          <span className="text-gold text-[10px] sm:text-xs font-body">{item.category}</span>
        </div>
        {findProduct(item.alt) && (
          <motion.button
            onClick={onOrderClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 font-body text-[10px] sm:text-xs font-medium hover:bg-green-500/30 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </motion.button>
        )}
      </div>

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-gold/90 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5A002C" strokeWidth="2" className="w-4 h-4">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderProduct, setOrderProduct] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  const handleOrderClick = (e, item) => {
    e.stopPropagation();
    const product = findProduct(item.alt);
    if (product) {
      setOrderProduct(product);
    }
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0005]/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase mb-4 border border-gold/20"
          >
            Our Gallery
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream">
            Explore Our <span className="gold-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {galleryCategories.map((category) => (
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

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={i}
                onClick={() => setSelectedItem(item)}
                onOrderClick={(e) => handleOrderClick(e, item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <GalleryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <OrderModal
        product={orderProduct}
        onClose={() => setOrderProduct(null)}
      />
    </section>
  );
}
