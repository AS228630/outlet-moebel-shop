"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  Home,
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Shirt,
  Briefcase,
  TreePine,
  Lamp,
  Tag,
  Sparkles,
  Award,
  Percent,
  Truck,
  Wrench,
  Store,
  Info,
  Mail,
  User,
  Heart,
  ShoppingCart,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

const MAIN_LINKS = [
  { label: "Startseite", href: "/", icon: Home },
  { label: "Wohnzimmer", href: "/wohnzimmer", icon: Sofa },
  { label: "Schlafzimmer", href: "/schlafzimmer", icon: BedDouble },
  { label: "Küche & Essen", href: "/kueche-essen", icon: UtensilsCrossed },
  { label: "Kleiderschränke", href: "/kleiderschraenke", icon: Shirt },
  { label: "Büromöbel", href: "/bueromoebel", icon: Briefcase },
  { label: "Gartenmöbel", href: "/gartenmoebel", icon: TreePine },
  { label: "Dekoration", href: "/dekoration", icon: Lamp },
  { label: "Angebote", href: "/angebote", icon: Tag },
  { label: "Neuheiten", href: "/neuheiten", icon: Sparkles },
  { label: "Bestseller", href: "/bestseller", icon: Award },
];

const SECONDARY_LINKS = [
  { label: "Finanzierung", href: "/finanzierung", icon: Percent },
  { label: "Lieferung", href: "/lieferung", icon: Truck },
  { label: "Montage", href: "/montage", icon: Wrench },
  { label: "Showroom", href: "/showroom", icon: Store },
  { label: "Kontakt", href: "/kontakt", icon: Mail },
  { label: "Über uns", href: "/ueber-uns", icon: Info },
];

const ACCOUNT_LINKS = [
  { label: "Konto", href: "/konto", icon: User },
  { label: "Wunschliste", href: "/wunschliste", icon: Heart },
  { label: "Warenkorb", href: "/warenkorb", icon: ShoppingCart },
];

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lang, setLang] = useState("DE");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button aria-label="Schließen" className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className="absolute inset-y-0 left-0 flex w-[90%] max-w-sm flex-col overflow-y-auto bg-header-black text-white shadow-hover"
        style={{ animation: "slideInLeft 300ms ease-out" }}
      >
        <style>{`@keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="flex items-center gap-2">
            <Logo size={30} />
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold">
                OUTLET <span className="text-primary">MÖBEL</span>
              </p>
              <p className="text-[9px] text-white/50">Großhandel · Einzelhandel</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Menü schließen" className="text-white">
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 py-2">
          {MAIN_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
            >
              <item.icon size={17} className="text-primary" />
              {item.label}
            </Link>
          ))}

          <div className="my-2 border-t border-white/10" />

          {SECONDARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5"
            >
              <item.icon size={16} className="text-white/50" />
              {item.label}
            </Link>
          ))}

          <div className="my-2 border-t border-white/10" />

          {ACCOUNT_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5"
            >
              <item.icon size={16} className="text-white/50" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 px-4 py-4">
          <div className="mb-3 flex items-center gap-2">
            <Globe size={13} className="text-white/50" />
            {["DE", "EN", "TR"].map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`text-xs font-semibold ${l === lang ? "text-primary" : "text-white/50"}`}
                >
                  {l}
                </button>
                {i < 2 && <span className="mx-1.5 text-white/20">|</span>}
              </span>
            ))}
          </div>
          <p className="mb-2 flex items-center gap-2 text-xs text-white/60">
            <Phone size={13} className="shrink-0 text-primary" />
            {BUSINESS.phoneMain}
          </p>
          <p className="mb-2 flex items-center gap-2 text-xs text-white/60">
            <Mail size={13} className="shrink-0 text-primary" />
            {BUSINESS.email}
          </p>
          <p className="mb-3 flex items-start gap-2 text-xs text-white/60">
            <MapPin size={13} className="mt-0.5 shrink-0 text-primary" />
            {BUSINESS.addressLine}
          </p>
        </div>
      </div>
    </div>
  );
}
