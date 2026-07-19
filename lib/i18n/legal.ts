// Trilingual content for the 4 legal pages. Structured per-page so each
// page.tsx can pull its own section list keyed by locale. Hand-translated
// (not machine translation) — German is the authoritative/original text
// (matches the real legal requirements for a German GmbH); English and
// Turkish are accurate translations of the same legal meaning for the
// convenience of non-German-speaking customers. In case of any legal
// dispute, the German version is the binding one — this is stated on
// each translated page.

import type { Locale } from "@/lib/i18n/dictionaries";

export const LEGAL_UI = {
  de: {
    pageTitle: {
      impressum: "Impressum",
      agb: "Allgemeine Geschäftsbedingungen (AGB)",
      datenschutz: "Datenschutzerklärung",
      widerruf: "Widerrufsrecht",
    },
    bindingNotice: "",
    fillLabel: "wird noch ergänzt",
  },
  en: {
    pageTitle: {
      impressum: "Legal Notice (Impressum)",
      agb: "Terms & Conditions",
      datenschutz: "Privacy Policy",
      widerruf: "Right of Withdrawal",
    },
    bindingNotice:
      "This is a courtesy translation. The German version is the legally binding original — in case of any discrepancy, the German text applies.",
    fillLabel: "to be added",
  },
  tr: {
    pageTitle: {
      impressum: "Yasal Bilgiler (Impressum)",
      agb: "Genel İşlem Koşulları",
      datenschutz: "Gizlilik Politikası",
      widerruf: "Cayma Hakkı",
    },
    bindingNotice:
      "Bu, bilgilendirme amaçlı bir çeviridir. Almanca metin yasal olarak bağlayıcı orijinal belgedir — herhangi bir uyuşmazlık durumunda Almanca metin geçerlidir.",
    fillLabel: "henüz eklenmedi",
  },
} as const;

export function legalT(locale: Locale) {
  return LEGAL_UI[locale];
}
