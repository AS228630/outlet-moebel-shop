"use client";

import { Lock, RotateCcw, ShieldCheck, Receipt } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export default function TrustBadgesRow() {
  const { t } = useLocale();
  const ITEMS = [
    { icon: Lock, title: t("trustbadges.secureShopping"), subtitle: t("trustbadges.ssl") },
    { icon: RotateCcw, title: t("trustbadges.returnRight"), subtitle: t("trustbadges.returnRightDesc") },
    { icon: ShieldCheck, title: t("trustbadges.warranty"), subtitle: t("trustbadges.warrantyDesc") },
    { icon: Receipt, title: t("trustbadges.paymentMethods"), subtitle: t("trustbadges.paymentMethodsDesc") },
  ];

  return (
    <div className="border-y border-border bg-light-gray">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-6 py-5 sm:grid-cols-4 lg:px-10">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-2.5">
            <item.icon size={20} className="shrink-0 text-primary" />
            <div className="leading-tight">
              <p className="text-[11.5px] font-semibold text-dark">{item.title}</p>
              <p className="text-[10px] text-gray">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center gap-2.5 px-6 pb-5 lg:px-10">
        {["VISA", "Mastercard", "PayPal", "Klarna"].map((p) => (
          <span key={p} className="rounded-md border border-border bg-white px-2.5 py-1 text-[10px] font-bold text-dark">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
