export const productCategories = [
  "All",
  "Frames",
  "Gift Hampers",
  "Bouquets",
  "Customized Gifts",
];

export const products = [
  // ========== FRAMES ==========
  {
    id: 1,
    name: "Single Photo Frame",
    category: "Frames",
    sizes: ["4x6", "5x7", "8x10", "10x12", "12x18"],
    description: "Elegant single photo frame to showcase your favorite memories.",
    popular: true,
  },
  {
    id: 2,
    name: "Family Frame",
    category: "Frames",
    sizes: ["8x10", "10x12", "12x18", "16x20"],
    description: "Perfect family frame to hold multiple cherished moments together.",
    popular: true,
  },
  {
    id: 3,
    name: "Collage Frame",
    category: "Frames",
    sizes: ["8x10", "10x12", "11x14", "12x18"],
    description: "Beautiful collage frame to display multiple photos in one frame.",
    popular: true,
  },
  {
    id: 4,
    name: "Certificate Frame",
    category: "Frames",
    sizes: ["8.5x11", "8.5x14", "11x14", "12x18"],
    description: "Professional certificate frame for awards and achievements.",
    popular: false,
  },
  {
    id: 5,
    name: "Baby Certificate Frame",
    category: "Frames",
    sizes: ["8.5x11", "8x10", "10x12"],
    description: "Adorable frame for baby certificates and birth announcements.",
    popular: false,
  },
  {
    id: 6,
    name: "Memento Frame",
    category: "Frames",
    sizes: ["5x7", "8x10", "10x12"],
    description: "Special memento frame to preserve your most treasured keepsakes.",
    popular: false,
  },
  {
    id: 7,
    name: "Wedding Frame",
    category: "Frames",
    sizes: ["8x10", "10x12", "12x18", "16x20", "20x24"],
    description: "Romantic wedding frame for your special day memories.",
    popular: true,
  },
  {
    id: 8,
    name: "Photo Frame",
    category: "Frames",
    sizes: ["4x6", "5x7", "6x8", "8x10", "10x12"],
    description: "Classic photo frame available in multiple sizes for any occasion.",
    popular: true,
  },

  // ========== GIFT HAMPERS ==========
  {
    id: 9,
    name: "Birthday Hamper",
    category: "Gift Hampers",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Curated birthday hamper filled with goodies and love.",
    popular: true,
  },
  {
    id: 10,
    name: "Anniversary Hamper",
    category: "Gift Hampers",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Romantic anniversary hamper to celebrate your love story.",
    popular: true,
  },
  {
    id: 11,
    name: "Corporate Hamper",
    category: "Gift Hampers",
    sizes: ["Standard", "Premium", "Executive"],
    description: "Professional corporate hamper for clients and employees.",
    popular: false,
  },
  {
    id: 12,
    name: "Festival Hamper",
    category: "Gift Hampers",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Festive hamper perfect for Diwali, Eid, Christmas and more.",
    popular: false,
  },

  // ========== BOUQUETS ==========
  {
    id: 13,
    name: "Flower Bouquet",
    category: "Bouquets",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Fresh and beautiful flower bouquet for every occasion.",
    popular: true,
  },
  {
    id: 14,
    name: "Chocolate Bouquet",
    category: "Bouquets",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Delicious chocolate bouquet that looks as good as it tastes.",
    popular: true,
  },

  // ========== CUSTOMIZED GIFTS ==========
  {
    id: 15,
    name: "Anniversary Gift",
    category: "Customized Gifts",
    sizes: ["Standard", "Premium", "Luxury"],
    description: "Personalized anniversary gift crafted with love and care.",
    popular: true,
  },
  {
    id: 16,
    name: "Birthday Gift",
    category: "Customized Gifts",
    sizes: ["Standard", "Premium", "Luxury"],
    description: "Custom birthday gift tailored to make their day special.",
    popular: true,
  },
  {
    id: 17,
    name: "Return Gift",
    category: "Customized Gifts",
    sizes: ["Small", "Standard", "Bulk Pack"],
    description: "Elegant return gifts for your special event or party.",
    popular: false,
  },
  {
    id: 18,
    name: "Customized Gift",
    category: "Customized Gifts",
    sizes: ["Standard", "Premium", "Luxury"],
    description: "Fully customizable gift designed just the way you want it.",
    popular: true,
  },
];

export const productCategoriesList = [
  { name: "Frames", icon: "Image" },
  { name: "Gift Hampers", icon: "Gift" },
  { name: "Bouquets", icon: "Flower2" },
  { name: "Customized Gifts", icon: "Wand" },
];
