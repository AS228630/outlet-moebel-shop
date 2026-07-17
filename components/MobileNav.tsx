"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, MapPin, Phone, Clock, Globe } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";

const NAV_ITEMS = [
  { label: "Startseite", href: "/" },
  { label: "Wohnzimmer", href: "/wohnzimmer" },
  { label: "Schlafzimmer", href: "/schlafzimmer" },
  { label: "Küche & Essen", href: "/kueche-essen" },
  { label: "Kleiderschränke", href: "/kleiderschraenke" },
  { label: "Büromöbel", href: "/bueromoebel" },
  { label: "Gartenmöbel", href: "/gartenmoebel" },
  { label: "Dekoration", href: "/dekoration" },
  { label: "Angebote", href: "/angebote" },
];

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lang, setLang] = useState("DE");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button aria-label="Schließen" className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 flex w-[85%] max-w-xs flex-col overflow-y-auto bg-white shadow-hover">
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <div className="flex items-center gap-2">
            <Logo size={32} />
            <p className="font-display text-sm font-extrabold text-dark">
              OUTLET <span className="text-primary">MÖBEL</span>
            </p>
          </div>
          <button onClick={onClose} aria-label="Menü schließen" className="text-dark">
            <X size={22} />
          </button>
        </div>

        <ul className="flex-1 divide-y divide-border">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-dark"
              >
                {item.label}
                <ChevronDown size={14} className="-rotate-90 text-gray" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-border px-4 py-4 text-xs text-gray">
          <p className="mb-2 flex items-start gap-2">
            <MapPin size={13} className="mt-0.5 shrink-0 text-primary" />
            {BUSINESS.addressLine}
          </p>
          <p className="mb-2 flex items-center gap-2">
            <Phone size={13} className="shrink-0 text-primary" />
            {BUSINESS.phoneMain}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={13} className="shrink-0 text-primary" />
            {BUSINESS.hoursWeekday}
          </p>

          <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
            <Globe size={13} className="text-gray" />
            {["DE", "EN", "TR"].map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`text-xs font-semibold ${l === lang ? "text-primary underline underline-offset-2" : "text-gray"}`}
                >
                  {l}
                </button>
                {i < 2 && <span className="mx-1.5 text-border">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
