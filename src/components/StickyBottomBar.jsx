import { MessageCircle, Phone, MapPin, ShoppingBag } from "lucide-react";
import { shopInfo } from "../data";

const bottomItems = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/91${shopInfo.phone}`,
    color: "text-green-400",
    bg: "bg-green-500",
    isExternal: true,
  },
  {
    label: "Call",
    icon: Phone,
    href: `tel:+91${shopInfo.phone}`,
    color: "text-gold",
    bg: "bg-gold",
    isExternal: true,
  },
  {
    label: "Location",
    icon: MapPin,
    href: "contact",
    color: "text-rose-400",
    bg: "bg-rose-500",
    isExternal: false,
  },
  {
    label: "Products",
    icon: ShoppingBag,
    href: "products",
    color: "text-sky-400",
    bg: "bg-sky-500",
    isExternal: false,
  },
];

export default function StickyBottomBar() {
  const handleClick = (item) => {
    if (item.isExternal) return;
    const el = document.getElementById(item.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-dark-maroon/98 backdrop-blur-xl border-t border-gold/10 safe-bottom">
        <div className="grid grid-cols-4 gap-0">
          {bottomItems.map((item, i) => {
            const Icon = item.icon;

            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center justify-center gap-0.5 py-2.5 active:bg-gold/5 transition-colors duration-150"
                >
                  <Icon size={20} className={item.color} />
                  <span className="text-cream/60 text-[10px] font-body font-medium">
                    {item.label}
                  </span>
                </a>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className="flex flex-col items-center justify-center gap-0.5 py-2.5 active:bg-gold/5 transition-colors duration-150"
              >
                <Icon size={20} className={item.color} />
                <span className="text-cream/60 text-[10px] font-body font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
