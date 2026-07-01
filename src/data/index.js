import { business } from "./business";

export const shopInfo = {
  name: business.shopName,
  owner: business.owner,
  phone: business.phone,
  location: business.address,
  tagline: business.tagline,
  email: business.email,
  instagram: business.instagram,
};

export const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Products", href: "products" },
  { name: "Services", href: "services" },
  { name: "Gallery", href: "gallery" },
  { name: "Why Us", href: "whyus" },
  { name: "Reviews", href: "reviews" },
  { name: "Contact", href: "contact" },
];

export const services = [
  { name: "Photo Frames", icon: "Image", description: "Beautiful custom photo frames to preserve your precious moments." },
  { name: "Certificate Frames", icon: "Award", description: "Elegant frames for certificates and achievements." },
  { name: "Baby Frames", icon: "Baby", description: "Adorable frames to celebrate new beginnings." },
  { name: "Wedding Frames", icon: "Heart", description: "Romantic wedding frames for your special day." },
  { name: "Chocolate Bouquets", icon: "Candy", description: "Delicious chocolate arrangements for every occasion." },
  { name: "Gift Hampers", icon: "Gift", description: "Curated gift hampers filled with love and care." },
  { name: "Anniversary Gifts", icon: "Gem", description: "Thoughtful anniversary gifts to celebrate love." },
  { name: "Customized Gifts", icon: "Wand", description: "Personalized gifts tailored just for you." },
];

export const galleryCategories = ["All", "Frames", "Hampers", "Bouquets", "Gifts"];

/*
  Gallery items pull from product images.
  Add/remove items to showcase your work.
*/
export const galleryItems = [
  { id: 1, src: "/images/frames/frame1.jpeg", alt: "Photo Frame", category: "Frames" },
  { id: 2, src: "/images/frames/frame2.jpeg", alt: "Family Frame", category: "Frames" },
  { id: 3, src: "/images/frames/frame3.jpeg", alt: "Certificate Frame", category: "Frames" },
  { id: 4, src: "/images/hampers/hamper1.jpeg", alt: "Gift Hamper", category: "Hampers" },
  { id: 5, src: "/images/hampers/hamper2.jpeg", alt: "Premium Hamper", category: "Hampers" },
  { id: 6, src: "/images/bouquets/bouquet1.jpeg", alt: "Chocolate Bouquet", category: "Bouquets" },
  { id: 7, src: "/images/bouquets/bouquet2.jpeg", alt: "Flower Bouquet", category: "Bouquets" },
  { id: 8, src: "/images/gifts/gift1.jpeg", alt: "Customized Gift", category: "Gifts" },
  { id: 9, src: "/images/gifts/gift2.jpeg", alt: "Anniversary Gift", category: "Gifts" },
  { id: 10, src: "/images/gifts/gift3.jpeg", alt: "Birthday Gift", category: "Gifts" },
  { id: 11, src: "/images/frames/frame5.jpeg", alt: "Baby Frame", category: "Frames" },
  { id: 12, src: "/images/hampers/hamper3.jpeg", alt: "Birthday Hamper", category: "Hampers" },
];

export const whyChooseUs = [
  { icon: "Shield", title: "Premium Quality", description: "We use only the finest materials for all our products." },
  { icon: "BadgePercent", title: "Affordable Price", description: "Premium quality at prices that won't break your budget." },
  { icon: "Truck", title: "Home Delivery", description: "Free home delivery across the region." },
  { icon: "Package", title: "Bulk Orders", description: "Special discounts and customized solutions for bulk orders." },
  { icon: "Zap", title: "Fast Service", description: "Quick turnaround time without compromising on quality." },
  { icon: "Smile", title: "Customer Satisfaction", description: "Your happiness is our top priority, guaranteed." },
];

export const reviews = [
  { name: "Priya Sharma", rating: 5, text: "Amazing frame quality! The attention to detail is incredible. Highly recommend Vaishnavi Gift Shop for all your gifting needs." },
  { name: "Rahul Patil", rating: 5, text: "Best gift shop in our area. The customized gifts are truly one-of-a-kind. Will definitely order again!" },
  { name: "Neha Deshmukh", rating: 5, text: "Beautiful customized gifts! The chocolate bouquets are absolutely stunning and delicious." },
  { name: "Amit Joshi", rating: 5, text: "Excellent service and premium quality products. The wedding frame we ordered was perfect!" },
  { name: "Sneha Kulkarni", rating: 5, text: "I love their gift hampers! So thoughtfully curated and beautifully packaged." },
];

export const processSteps = [
  { step: 1, icon: "ShoppingBag", title: "Choose Product", description: "Browse our collection and select your favorite product." },
  { step: 2, icon: "MessageCircle", title: "Contact WhatsApp", description: "Reach out to us on WhatsApp with your requirements." },
  { step: 3, icon: "ClipboardList", title: "Share Details", description: "Share your customization preferences and delivery details." },
  { step: 4, icon: "Truck", title: "Delivery", description: "Sit back and relax. We deliver your order with love." },
];

export const stats = [
  { value: 500, suffix: "+", label: "Happy Customers", icon: "Users" },
  { value: 1000, suffix: "+", label: "Frames Delivered", icon: "Image" },
  { value: 200, suffix: "+", label: "Gift Hampers", icon: "Gift" },
  { value: 100, suffix: "%", label: "Satisfaction", icon: "Smile" },
];

export const allServices = [
  "Photo Frames",
  "Family Frames",
  "Collage Frames",
  "Certificate Frames",
  "Baby Certificate Frames",
  "Wedding Frames",
  "Gift Hampers",
  "Chocolate Bouquets",
  "Flower Bouquets",
  "Customized Gifts",
  "Anniversary Gifts",
  "Birthday Gifts",
  "Return Gifts",
  "Bulk Orders",
];
