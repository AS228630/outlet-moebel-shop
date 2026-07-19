"use client";

import ComingSoonPage from "@/components/ComingSoonPage";
import { useLocale } from "@/components/LocaleProvider";

export default function Page() {
  const { t } = useLocale();
  return <ComingSoonPage title={t("footer.delivery")} />;
}
