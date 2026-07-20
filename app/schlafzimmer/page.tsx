"use client";

import CategoryPageShell from "@/components/CategoryPageShell";
import { useLocale } from "@/components/LocaleProvider";

const SUBCATEGORIES = ["Alle", "Betten", "Boxspringbetten", "Matratzen", "Nachttische", "Kommoden"];

export default function SchlafzimmerPage() {
  const { t } = useLocale();
  return (
    <CategoryPageShell
      navLabel={t("nav.bedroom")}
      title={t("categorypage.bedroomTitle")}
      description={t("categorypage.bedroomDesc")}
      subcategories={SUBCATEGORIES}
    />
  );
}
