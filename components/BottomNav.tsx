"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Heart, ShoppingCart, User } from "lucide-react";

const ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Kategorien", href: "/kategorien", icon: LayoutGrid },
  { label: "Wunschliste", href: "/wunschliste", icon: Heart, badge: 0 },
  { label: "Warenkorb", href: "/warenkorb", icon: ShoppingCart, badge: 0 },
  { label: "Konto", href: "/konto", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-border bg-white lg:hidden"
      style={{ boxShadow: "0 -4px 20px rgba(0,0,0,.06)" }}
    >
      {ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium ${
              active ? "text-primary" : "text-gray"
            }`}
          >
            <item.icon size={20} strokeWidth={active ? 2.4 : 1.8} />
            {item.label}
            {!!item.badge && (
              <span className="absolute right-5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
