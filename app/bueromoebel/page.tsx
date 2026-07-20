"use client";

import CategoryPageShell from "@/components/CategoryPageShell";
import { useLocale } from "@/components/LocaleProvider";

const SUBCATEGORIES = ["Alle", "Schreibtische", "Bürostühle", "Regale", "Aktenschränke"];

export default function BueromoebelPage() {
  const { t } = useLocale();
  return (
    <CategoryPageShell
      navLabel={t("nav.office")}
      title={t("categorypage.officeTitle")}
      description={t("categorypage.officeDesc")}
      subcategories={SUBCATEGORIES}
    />
  );
}
