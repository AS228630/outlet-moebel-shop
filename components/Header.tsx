"use client";

import Link from "next/link";
import { Heart, User, ShoppingCart, Search, Phone } from "lucide-react";

const NAV_ITEMS = [
  { label: "Wohnzimmer", href: "/wohnzimmer" },
  { label: "Schlafzimmer", href: "/schlafzimmer" },
  { label: "Küche & Essen", href: "/kueche-essen" },
  { label: "Kleiderschränke", href: "/kleiderschraenke" },
  { label: "Büromöbel", href: "/bueromoebel" },
  { label: "Gartenmöbel", href: "/gartenmoebel" },
  { label: "Dekoration", href: "/dekoration" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="hidden items-center justify-between bg-dark px-6 py-2 text-xs text-white/80 lg:flex">
        <span>Weckbacherstrasse 12, 63937 Wertheim</span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Phone size={12} />
            +49 9373 57 89 916
          </span>
          <span>Mo – Fr: 09:00 – 18:00 Uhr</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-display text-xl font-extrabold text-dark">
          Outlet <span className="text-primary">Möbel</span>
        </Link>

        <div className="hidden max-w-md flex-1 items-center rounded-input border border-border px-4 py-2.5 lg:flex">
          <Search size={16} className="text-gray" />
          <input
            placeholder="Suche nach Produkten, Kategorien…"
            className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray"
          />
        </div>

        <div className="flex items-center gap-5 text-dark">
          <button aria-label="Wunschliste" className="relative">
            <Heart size={20} />
          </button>
          <button aria-label="Mein Konto">
            <User size={20} />
          </button>
          <button aria-label="Warenkorb" className="relative">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-border lg:block">
        <ul className="mx-auto flex max-w-[1440px] items-center gap-7 px-6 py-3 text-sm font-medium text-text">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
