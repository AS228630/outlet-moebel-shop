"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/LocaleProvider";

export default function InspirationCards() {
  const { t } = useLocale();
  const CARDS = [
    { tag: t("inspiration.dreamHomeTag"), title: t("inspiration.dreamHomeTitle"), desc: t("inspiration.dreamHomeDesc"), cta: t("inspiration.dreamHomeCta") },
    { tag: t("inspiration.consultTag"), title: t("inspiration.consultTitle"), desc: t("inspiration.consultDesc"), cta: t("inspiration.consultCta") },
    { tag: t("inspiration.showroomTag"), title: t("inspiration.showroomTitle"), desc: t("inspiration.showroomDesc"), cta: t("inspiration.showroomCta") },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 lg:px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.tag}
            className="relative flex h-56 flex-col justify-end overflow-hidden rounded-card bg-gradient-to-br from-neutral-700 to-neutral-900 p-5 text-white shadow-card"
          >
            <span className="mb-1 text-[10px] font-bold uppercase tracking-wide text-primary">{card.tag}</span>
            <h3 className="font-display text-lg font-extrabold">{card.title}</h3>
            <p className="mt-1 text-xs text-white/75">{card.desc}</p>
            <Button size="sm" className="mt-3 w-fit">
              {card.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
