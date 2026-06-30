import { motion } from "framer-motion";
import { Image, Gift, Flower2, MessageCircle } from "lucide-react";
import { business } from "../data/business";

const quickActions = [
  {
    label: "Frames",
    icon: Image,
    href: "products",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    label: "Gifts",
    icon: Gift,
    href: "products",
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    label: "Hampers",
    icon: Flower2,
    href: "products",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    label: "Contact",
    icon: MessageCircle,
    href: "contact",
    color: "from-gold/20 to-gold/5",
    border: "border-gold/20",
    iconColor: "text-gold",
    isLink: true,
    link: `https://wa.me/91${business.phone}`,
  },
];

export default function QuickActions() {
  const handleClick = (action) => {
    if (action.isLink) return;
    const el = document.getElementById(action.href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative -mt-6 z-10 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            const content = (
              <div
                className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border py-3 sm:py-4 transition-all duration-300 active:scale-95 cursor-pointer h-full ${
                  action.border
                } bg-gradient-to-br ${action.color}`}
              >
                <Icon size={22} className={`${action.iconColor} sm:w-7 sm:h-7`} />
                <span className="text-cream/80 text-[10px] sm:text-xs font-body font-medium">
                  {action.label}
                </span>
              </div>
            );

            if (action.isLink) {
              return (
                <motion.a
                  key={action.label}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.button
                key={action.label}
                onClick={() => handleClick(action)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {content}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
