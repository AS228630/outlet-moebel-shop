"use client";

import CategoryPageShell from "@/components/CategoryPageShell";
import { useLocale } from "@/components/LocaleProvider";

const SUBCATEGORIES = ["Alle", "Wanddeko", "Vasen & Schalen", "Kerzen & Leuchter", "Textilien", "Spiegel"];

export default function DekorationPage() {
  const { t } = useLocale();
  return (
    <CategoryPageShell
      navLabel={t("nav.decoration")}
      title={t("categorypage.decorationTitle")}
      description={t("categorypage.decorationDesc")}
      subcategories={SUBCATEGORIES}
    />
  );
}
