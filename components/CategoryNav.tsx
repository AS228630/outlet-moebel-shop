"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const NAV_ITEMS = [
  { label: "Startseite", href: "/" },
  { label: "Wohnzimmer", href: "/wohnzimmer", hasSub: true },
  { label: "Schlafzimmer", href: "/schlafzimmer" },
  { label: "Küche & Essen", href: "/kueche-essen" },
  { label: "Kleiderschränke", href: "/kleiderschraenke" },
  { label: "Büromöbel", href: "/bueromoebel" },
  { label: "Gartenmöbel", href: "/gartenmoebel" },
  { label: "Dekoration", href: "/dekoration" },
  { label: "Angebote", href: "/angebote" },
];

const LANGS = ["DE", "EN", "TR"];

export default function CategoryNav() {
  const [lang, setLang] = useState("DE");

  return (
    <nav className="hidden bg-primary lg:block">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6">
        <ul className="flex items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-black/10"
              >
                {item.label}
                {item.hasSub && <ChevronDown size={12} />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-[13px] font-semibold text-white">
          <Globe size={13} />
          {LANGS.map((l, i) => (
            <span key={l} className="flex items-center">
              <button
                onClick={() => setLang(l)}
                className={l === lang ? "underline underline-offset-2" : "opacity-70 hover:opacity-100"}
              >
                {l}
              </button>
              {i < LANGS.length - 1 && <span className="mx-1 opacity-50">|</span>}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
