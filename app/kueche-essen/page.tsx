"use client";

import CategoryPageShell from "@/components/CategoryPageShell";
import { useLocale } from "@/components/LocaleProvider";

const SUBCATEGORIES = ["Alle", "Esstische", "Stühle", "Küchenschränke", "Bänke", "Barhocker"];

export default function KuecheEssenPage() {
  const { t } = useLocale();
  return (
    <CategoryPageShell
      navLabel={t("nav.kitchenDining")}
      title={t("categorypage.kitchenDiningTitle")}
      description={t("categorypage.kitchenDiningDesc")}
      subcategories={SUBCATEGORIES}
    />
  );
}
