"use client";

import { Tag, Percent, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/LocaleProvider";

export default function PromoBanner() {
  const { t } = useLocale();
  const INFO_CARDS = [
    { icon: Percent, title: t("promo.financingTitle"), desc: t("promo.financingDesc"), cta: t("promo.learnMore") },
    { icon: Truck, title: t("promo.deliveryTitle"), desc: t("promo.deliveryDesc"), cta: t("promo.learnMore") },
    { icon: Users, title: t("promo.consultTitle"), desc: t("promo.consultDesc"), cta: t("promo.bookAppointment") },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-10 lg:px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between rounded-card bg-primary p-[25px] text-white shadow-card">
          <div>
            <Tag size={22} />
            <p className="mt-3 text-sm font-bold uppercase tracking-wide">{t("promo.outletTitle")}</p>
            <p className="mt-1 text-xs text-white/85">{t("promo.outletDesc")}</p>
          </div>
          <Button variant="dark" size="sm" className="mt-4 w-fit bg-white text-primary hover:bg-white/90">
            {t("promo.outletCta")} →
          </Button>
        </div>

        {INFO_CARDS.map((card) => (
          <div key={card.title} className="flex flex-col justify-between rounded-card bg-light-gray p-[25px] shadow-card">
            <div>
              <card.icon size={22} className="text-primary" />
              <p className="mt-3 text-sm font-bold text-dark">{card.title}</p>
              <p className="mt-1 text-xs text-gray">{card.desc}</p>
            </div>
            <button className="mt-4 w-fit text-xs font-bold text-primary hover:underline">{card.cta} →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
