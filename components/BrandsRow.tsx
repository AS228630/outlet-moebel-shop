"use client";

import { useLocale } from "@/components/LocaleProvider";

const BRANDS = ["ADA", "Carryhome", "Casavanti", "Dieter Knoll", "Cantus", "Rufbetten", "Voglauer", "Novel", "Himolla"];

export default function BrandsRow() {
  const { t } = useLocale();
  return (
    <section className="border-t border-border bg-white py-8">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <p className="mb-5 text-xs font-bold uppercase tracking-wide text-gray">{t("brands.title")}</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-60">
          {BRANDS.map((b) => (
            <span key={b} className="font-display text-sm font-bold text-dark">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
