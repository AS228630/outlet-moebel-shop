"use client";

import { Truck, RotateCcw, ShieldCheck, Percent, BadgeCheck } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function TrustBar() {
  const { t } = useLocale();
  const ITEMS = [
    { icon: Truck, title: t("trust.freeDelivery"), subtitle: t("trust.freeDeliveryDesc") },
    { icon: RotateCcw, title: t("trust.returns"), subtitle: t("trust.returnsDesc") },
    { icon: ShieldCheck, title: t("trust.quality"), subtitle: t("trust.qualityDesc") },
    { icon: Percent, title: t("trust.financing"), subtitle: t("trust.financingDesc") },
    { icon: BadgeCheck, title: t("trust.trustedShops"), subtitle: t("trust.trustedShopsDesc") },
  ];

  return (
    <div className="hidden h-[75px] border-b border-border bg-white lg:block">
      <div className="mx-auto grid h-full max-w-[1440px] grid-cols-5 items-center divide-x divide-x-reverse divide-border px-6">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-2.5 px-4 first:pr-0 last:pl-0">
            <item.icon size={20} className="shrink-0 text-primary" />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-dark">{item.title}</p>
              <p className="text-[10.5px] text-gray">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
