"use client";

import CategoryPageShell from "@/components/CategoryPageShell";
import { useLocale } from "@/components/LocaleProvider";

const SUBCATEGORIES = ["Alle", "Sitzgruppen", "Loungemöbel", "Gartentische", "Sonnenschirme", "Zubehör"];

export default function GartenmoebelPage() {
  const { t } = useLocale();
  return (
    <CategoryPageShell
      navLabel={t("nav.garden")}
      title={t("categorypage.gardenTitle")}
      description={t("categorypage.gardenDesc")}
      subcategories={SUBCATEGORIES}
    />
  );
}
