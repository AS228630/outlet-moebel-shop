"use client";

import Link from "next/link";
import { Scale, Heart, User, ShoppingCart, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 py-4">
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-lg font-extrabold text-white">
              OM
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg font-extrabold text-dark">
                OUTLET <span className="text-primary">MÖBEL</span>
              </p>
              <p className="text-[10px] font-medium tracking-wide text-gray">GROSSHANDEL · EINZELHANDEL GMBH</p>
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

        <div className="flex shrink-0 items-center gap-5">
          <IconWithBadge icon={Scale} label="Vergleichen" count={2} />
          <IconWithBadge icon={Heart} label="Wunschliste" count={0} />
          <button className="hidden flex-col items-center gap-1 text-dark lg:flex" aria-label="Mein Konto">
            <User size={20} />
            <span className="text-[10px] font-medium">Mein Konto</span>
          </button>
          <IconWithBadge icon={ShoppingCart} label="Warenkorb" count={0} highlight />
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
