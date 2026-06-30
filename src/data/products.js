/*
  ========== PRODUCTS ==========
  HOW TO ADD A NEW PRODUCT:
  1. Copy a product object block (between { and },)
  2. Change id, name, category, image, sizes, description, whatsappMessage
  3. Place image file in the correct folder under public/images/
  4. Save this file — product appears automatically on website

  IMAGE FOLDERS:
    Frames      → public/images/frames/    (e.g. frame1.jpg, frame2.jpg)
    Gift Hampers → public/images/hampers/   (e.g. hamper1.jpg)
    Bouquets    → public/images/bouquets/   (e.g. bouquet1.jpg)
    Customized Gifts → public/images/gifts/ (e.g. gift1.jpg)

  HOW TO DELETE: Remove the entire product object block.
  HOW TO EDIT: Just change the values inside "".

  IMAGE AUTO-HIDE: If image path is empty "", the card shows icon only.
  SECTION AUTO-HIDE: If array is empty [], the section won't render.
*/

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
    image: "/images/frames/frame1.jpg",
    sizes: ["4x6", "5x7", "8x10", "10x12", "12x18"],
    description: "Elegant single photo frame to showcase your favorite memories.",
    popular: true,
    whatsappMessage: "I want to order a Single Photo Frame.",
  },
  {
    id: 2,
    name: "Family Frame",
    category: "Frames",
    image: "/images/frames/frame2.jpg",
    sizes: ["8x10", "10x12", "12x18", "16x20"],
    description: "Perfect family frame to hold multiple cherished moments together.",
    popular: true,
    whatsappMessage: "I want to order a Family Frame.",
  },
  {
    id: 3,
    name: "Collage Frame",
    category: "Frames",
    image: "/images/frames/frame3.jpg",
    sizes: ["8x10", "10x12", "11x14", "12x18"],
    description: "Beautiful collage frame to display multiple photos in one frame.",
    popular: true,
    whatsappMessage: "I want to order a Collage Frame.",
  },
  {
    id: 4,
    name: "Certificate Frame",
    category: "Frames",
    image: "/images/frames/frame4.jpg",
    sizes: ["8.5x11", "8.5x14", "11x14", "12x18"],
    description: "Professional certificate frame for awards and achievements.",
    popular: false,
    whatsappMessage: "I want to order a Certificate Frame.",
  },
  {
    id: 5,
    name: "Baby Certificate Frame",
    category: "Frames",
    image: "/images/frames/frame5.jpg",
    sizes: ["8.5x11", "8x10", "10x12"],
    description: "Adorable frame for baby certificates and birth announcements.",
    popular: false,
    whatsappMessage: "I want to order a Baby Certificate Frame.",
  },
  {
    id: 6,
    name: "Memento Frame",
    category: "Frames",
    image: "/images/frames/frame6.jpg",
    sizes: ["5x7", "8x10", "10x12"],
    description: "Special memento frame to preserve your most treasured keepsakes.",
    popular: false,
    whatsappMessage: "I want to order a Memento Frame.",
  },
  {
    id: 7,
    name: "Wedding Frame",
    category: "Frames",
    image: "/images/frames/frame7.jpg",
    sizes: ["8x10", "10x12", "12x18", "16x20", "20x24"],
    description: "Romantic wedding frame for your special day memories.",
    popular: true,
    whatsappMessage: "I want to order a Wedding Frame.",
  },
  {
    id: 8,
    name: "Photo Frame",
    category: "Frames",
    image: "/images/frames/frame8.jpg",
    sizes: ["4x6", "5x7", "6x8", "8x10", "10x12"],
    description: "Classic photo frame available in multiple sizes for any occasion.",
    popular: true,
    whatsappMessage: "I want to order a Photo Frame.",
  },

  // ========== GIFT HAMPERS ==========
  {
    id: 9,
    name: "Birthday Hamper",
    category: "Gift Hampers",
    image: "/images/hampers/hamper1.jpg",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Curated birthday hamper filled with goodies and love.",
    popular: true,
    whatsappMessage: "I want to order a Birthday Hamper.",
  },
  {
    id: 10,
    name: "Anniversary Hamper",
    category: "Gift Hampers",
    image: "/images/hampers/hamper2.jpg",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Romantic anniversary hamper to celebrate your love story.",
    popular: true,
    whatsappMessage: "I want to order an Anniversary Hamper.",
  },
  {
    id: 11,
    name: "Corporate Hamper",
    category: "Gift Hampers",
    image: "/images/hampers/hamper3.jpg",
    sizes: ["Standard", "Premium", "Executive"],
    description: "Professional corporate hamper for clients and employees.",
    popular: false,
    whatsappMessage: "I want to order a Corporate Hamper.",
  },
  {
    id: 12,
    name: "Festival Hamper",
    category: "Gift Hampers",
    image: "/images/hampers/hamper4.jpg",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Festive hamper perfect for Diwali, Eid, Christmas and more.",
    popular: false,
    whatsappMessage: "I want to order a Festival Hamper.",
  },

  // ========== BOUQUETS ==========
  {
    id: 13,
    name: "Flower Bouquet",
    category: "Bouquets",
    image: "/images/bouquets/bouquet1.jpg",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Fresh and beautiful flower bouquet for every occasion.",
    popular: true,
    whatsappMessage: "I want to order a Flower Bouquet.",
  },
  {
    id: 14,
    name: "Chocolate Bouquet",
    category: "Bouquets",
    image: "/images/bouquets/bouquet2.jpg",
    sizes: ["Small", "Medium", "Large", "Premium"],
    description: "Delicious chocolate bouquet that looks as good as it tastes.",
    popular: true,
    whatsappMessage: "I want to order a Chocolate Bouquet.",
  },

  // ========== CUSTOMIZED GIFTS ==========
  {
    id: 15,
    name: "Anniversary Gift",
    category: "Customized Gifts",
    image: "/images/gifts/gift1.jpg",
    sizes: ["Standard", "Premium", "Luxury"],
    description: "Personalized anniversary gift crafted with love and care.",
    popular: true,
    whatsappMessage: "I want to order an Anniversary Gift.",
  },
  {
    id: 16,
    name: "Birthday Gift",
    category: "Customized Gifts",
    image: "/images/gifts/gift2.jpg",
    sizes: ["Standard", "Premium", "Luxury"],
    description: "Custom birthday gift tailored to make their day special.",
    popular: true,
    whatsappMessage: "I want to order a Birthday Gift.",
  },
  {
    id: 17,
    name: "Return Gift",
    category: "Customized Gifts",
    image: "/images/gifts/gift3.jpg",
    sizes: ["Small", "Standard", "Bulk Pack"],
    description: "Elegant return gifts for your special event or party.",
    popular: false,
    whatsappMessage: "I want to order Return Gifts.",
  },
  {
    id: 18,
    name: "Customized Gift",
    category: "Customized Gifts",
    image: "/images/gifts/gift4.jpg",
    sizes: ["Standard", "Premium", "Luxury"],
    description: "Fully customizable gift designed just the way you want it.",
    popular: true,
    whatsappMessage: "I want to order a Customized Gift.",
  },
];

export const productCategoriesList = [
  { name: "Frames", icon: "Image" },
  { name: "Gift Hampers", icon: "Gift" },
  { name: "Bouquets", icon: "Flower2" },
  { name: "Customized Gifts", icon: "Wand" },
];
