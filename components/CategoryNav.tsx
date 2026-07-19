"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n/dictionaries";

const LANGS: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

export default function CategoryNav() {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();

  const NAV_ITEMS = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.livingRoom"), href: "/wohnzimmer", hasSub: true },
    { label: t("nav.bedroom"), href: "/schlafzimmer" },
    { label: t("nav.kitchenDining"), href: "/kueche-essen" },
    { label: t("nav.wardrobes"), href: "/kleiderschraenke" },
    { label: t("nav.office"), href: "/bueromoebel" },
    { label: t("nav.garden"), href: "/gartenmoebel" },
    { label: t("nav.decoration"), href: "/dekoration" },
    { label: t("nav.deals"), href: "/angebote" },
  ];

  return (
    // Background sampled directly from the real reference screenshot
    // (~rgb(19,21,19), essentially near-black) — the bar itself is dark,
    // not red; only the active item gets a red highlight.
    <nav className="hidden h-[52px] bg-[#131513] lg:flex lg:items-center">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6">
        <ul className="flex h-full items-center">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  className={`flex h-full items-center gap-1 px-4 text-[13px] font-semibold transition-colors ${
                    active ? "bg-primary text-white" : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.hasSub && <ChevronDown size={12} />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1 text-[13px] font-semibold text-white">
          <Globe size={13} />
          {LANGS.map((l, i) => (
            <span key={l.code} className="flex items-center">
              <button
                onClick={() => setLocale(l.code)}
                className={l.code === locale ? "underline underline-offset-2" : "opacity-70 hover:opacity-100"}
              >
                {l.label}
              </button>
              {i < LANGS.length - 1 && <span className="mx-1 opacity-50">|</span>}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
