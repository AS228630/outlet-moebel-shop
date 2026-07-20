"use client";

import CategoryPageShell from "@/components/CategoryPageShell";
import { useLocale } from "@/components/LocaleProvider";

const SUBCATEGORIES = ["Alle", "Drehtürenschränke", "Schwebetürenschränke", "Begehbare Schränke", "Kommoden"];

export default function KleiderschraenkePage() {
  const { t } = useLocale();
  return (
    <CategoryPageShell
      navLabel={t("nav.wardrobes")}
      title={t("categorypage.wardrobesTitle")}
      description={t("categorypage.wardrobesDesc")}
      subcategories={SUBCATEGORIES}
    />
  );
}
