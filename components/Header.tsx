"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Heart, User, ShoppingCart, Search, ChevronDown, Menu } from "lucide-react";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="border-b border-border bg-white">
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3 lg:gap-6 lg:px-6 lg:py-4">
        <button className="text-dark lg:hidden" aria-label="Menü öffnen" onClick={() => setNavOpen(true)}>
          <Menu size={24} />
        </button>

        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <Logo size={40} />
            <div className="leading-tight">
              <p className="font-display text-base font-extrabold text-dark sm:text-lg">
                OUTLET <span className="text-primary">MÖBEL</span>
              </p>
              <p className="hidden text-[10px] font-medium tracking-wide text-gray sm:block">GROSSHANDEL · EINZELHANDEL GMBH</p>
            </div>
          </div>
        </Link>

        <div className="hidden flex-1 items-center overflow-hidden rounded-input border border-border lg:flex">
          <button className="flex shrink-0 items-center gap-1 border-l border-border bg-light-gray px-4 py-3 text-xs font-medium text-text">
            Alle Kategorien
            <ChevronDown size={14} />
          </button>
          <input
            placeholder="Suche nach Produkten, Kategorien…"
            className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray"
          />
          <button className="flex h-full shrink-0 items-center bg-primary px-5 text-white hover:bg-primary-dark">
            <Search size={18} />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4 lg:hidden">
          <button aria-label="Suche" className="text-dark">
            <Search size={22} />
          </button>
          <button aria-label="Mein Konto" className="text-dark">
            <User size={22} />
          </button>
          <button aria-label="Warenkorb" className="relative text-dark">
            <ShoppingCart size={22} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
              0
            </span>
          </button>
        </div>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <IconWithBadge icon={Scale} label="Vergleichen" count={2} />
          <IconWithBadge icon={Heart} label="Wunschliste" count={0} />
          <button className="hidden flex-col items-center gap-1 text-dark lg:flex" aria-label="Mein Konto">
            <User size={20} />
            <span className="text-[10px] font-medium">Mein Konto</span>
          </button>
          <IconWithBadge icon={ShoppingCart} label="Warenkorb" count={0} highlight />
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-border px-4 py-2.5 lg:hidden">
        <div className="flex flex-1 items-center overflow-hidden rounded-input border border-border">
          <input
            placeholder="Suche nach Produkten…"
            className="flex-1 bg-transparent px-3 py-2 text-xs outline-none placeholder:text-gray"
          />
          <button className="flex items-center bg-primary px-3 py-2 text-white">
            <Search size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function IconWithBadge({
  icon: Icon,
  label,
  count,
  highlight,
}: {
  icon: typeof Heart;
  label: string;
  count: number;
  highlight?: boolean;
}) {
  return (
    <button className="relative hidden flex-col items-center gap-1 text-dark lg:flex" aria-label={label}>
      <Icon size={20} />
      {count > 0 && (
        <span
          className={`absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white ${
            highlight ? "bg-primary" : "bg-dark"
          }`}
        >
          {count}
        </span>
      )}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
