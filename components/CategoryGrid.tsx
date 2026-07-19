"use client";

import Link from "next/link";
import Image from "next/image";
import { Sofa, BedDouble, UtensilsCrossed, Shirt, Briefcase, TreePine, Lamp } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

// Only Wohnzimmer has a real photo so far (the client's own Instagram
// photo, reused here). The rest use tinted gradient placeholders until
// real per-category photography is available — clearly a placeholder
// approach, not a claim that these are real product photos.
const CATEGORIES = [
  { key: "nav.livingRoom" as const, href: "/wohnzimmer", icon: Sofa, photo: "/images/hero-living-room.jpg" },
  { key: "nav.bedroom" as const, href: "/schlafzimmer", icon: BedDouble, gradient: "from-neutral-700 to-neutral-900" },
  { key: "nav.kitchenDining" as const, href: "/kueche-essen", icon: UtensilsCrossed, gradient: "from-stone-600 to-stone-800" },
  { key: "nav.wardrobes" as const, href: "/kleiderschraenke", icon: Shirt, gradient: "from-zinc-600 to-zinc-800" },
  { key: "nav.office" as const, href: "/bueromoebel", icon: Briefcase, gradient: "from-neutral-600 to-neutral-800" },
  { key: "nav.garden" as const, href: "/gartenmoebel", icon: TreePine, gradient: "from-stone-700 to-stone-900" },
  { key: "nav.decoration" as const, href: "/dekoration", icon: Lamp, gradient: "from-zinc-700 to-neutral-900" },
];

export default function CategoryGrid() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 lg:px-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-display text-xl font-extrabold text-dark">{t("categories.title")}</h2>
        <Link href="/kategorien" className="text-xs font-semibold text-primary hover:underline">
          {t("categories.viewAll")} →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative flex h-[130px] flex-col overflow-hidden rounded-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-hover sm:h-[160px]"
          >
            {cat.photo ? (
              <Image src={cat.photo} alt={t(cat.key)} fill className="object-cover" sizes="200px" />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
            )}
            <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />

            <div className="relative flex h-9 w-9 items-center justify-center self-start rounded-full bg-white text-primary shadow-card m-2.5 sm:h-10 sm:w-10">
              <cat.icon size={17} strokeWidth={2} />
            </div>

            <div className="relative mt-auto bg-white/95 px-2 py-2 text-center">
              <p className="text-[11px] font-bold text-dark sm:text-xs">{t(cat.key)}</p>
              <p className="hidden text-[10px] text-primary sm:block">{t("categories.discoverNow")} →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
