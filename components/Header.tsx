"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Heart, User, ShoppingCart, Search, ChevronDown, Menu } from "lucide-react";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="border-b border-border bg-header-black lg:bg-white">
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />

      {/* Main row — black 72px bar on mobile per spec, white 90px bar on desktop */}
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-3 px-4 lg:h-[90px] lg:gap-6 lg:px-6">
        <button className="text-white lg:hidden" aria-label="Menü öffnen" onClick={() => setNavOpen(true)}>
          <Menu size={26} />
        </button>

        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <Logo size={36} />
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold lg:text-lg">
                <span className="text-logo-red">OUTLET</span>{" "}
                <span className="text-logo-gray lg:text-dark">MÖBEL</span>
                <span className="ml-1 text-[10px] font-bold text-primary">GmbH</span>
              </p>
              <p className="text-[10px] font-medium tracking-wide text-white/60 lg:text-gray">
                Großhandel · Einzelhandel
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop search */}
        <div className="hidden h-12 max-w-[620px] flex-1 items-center overflow-hidden rounded-input border border-border lg:flex">
          <button className="flex h-full shrink-0 items-center gap-1 border-l border-border bg-light-gray px-4 text-xs font-medium text-text">
            Alle Kategorien
            <ChevronDown size={14} />
          </button>
          <input
            placeholder="Suche nach Produkten, Kategorien…"
            className="h-full flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-gray"
          />
          <button className="flex h-full shrink-0 items-center bg-primary px-5 text-white hover:bg-primary-dark">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile icon row */}
        <div className="flex flex-1 items-center justify-end gap-4 lg:hidden">
          <button aria-label="Suche" className="text-white">
            <Search size={22} />
          </button>
          <button aria-label="Wunschliste" className="relative text-white">
            <Heart size={22} />
          </button>
          <button aria-label="Warenkorb" className="relative text-white">
            <ShoppingCart size={22} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
              0
            </span>
          </button>
        </div>

        {/* Desktop icon row */}
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

      {/* Mobile search — white pill floating on the same black background
         as the header (was a separate white strip before — should be one
         continuous dark area, per the reference). */}
      <div className="bg-header-black px-4 pb-3 lg:hidden">
        <div
          className="flex h-[52px] items-center gap-2 rounded-[30px] border border-border bg-white px-4"
          style={{ boxShadow: "0 8px 20px rgba(0,0,0,.08)" }}
        >
          <input
            placeholder="Search products..."
            className="h-full flex-1 bg-transparent text-sm outline-none placeholder:text-gray"
          />
          <Search size={17} className="shrink-0 text-gray" />
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
