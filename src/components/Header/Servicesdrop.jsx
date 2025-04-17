import Link from "next/link";
import { useState } from "react";

export default function Servicesdrop() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Brand Marketing", href: "/services/brand-marketing" },
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "Affiliate Marketing", href: "/services/affiliate-marketing" },
    { name: "Social Media Marketing", href: "/services/social-media" },
    { name: "Mobile Advertising", href: "/services/mobile-advertising" },
    { name: "SEO", href: "/services/seo" },
    { name: "Content Writing", href: "/services/content-writing" },
    { name: "Web Development", href: "/services/web-development" },
  ];

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center  text-[1.1rem]  font-medium    text-white ]"
      >
        SERVICES
        <span
          className={`ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64   origin-top-right rounded-md bg-[#323336] ">
          <ul className="py-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm text-white hover:bg-[#44454A] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
