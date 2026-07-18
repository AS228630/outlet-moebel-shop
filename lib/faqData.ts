// Grounded FAQ knowledge base for the AI shop assistant. The chatbot is
// instructed (see app/api/chat/route.ts) to answer ONLY using this
// content — never to invent prices, policies, or facts not listed here.
//
// Some answers are marked "[TODO: ...]" because the real business facts
// (delivery fee threshold, return window, payment methods) haven't been
// confirmed by the owner yet. DO NOT replace these with invented
// numbers — update them only once the real figures are provided, then
// remove this comment block's warning for that entry.
//
// PROGRESS: first batch — general/product/service questions that don't
// depend on the still-unconfirmed facts. Extend with more categories
// (and the EN/TR translations) once the TODO items are resolved.

export type FaqEntry = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const FAQ_DE: FaqEntry[] = [
  // — Unternehmen —
  {
    id: "de-1",
    category: "Unternehmen",
    question: "Wo befindet sich Outlet Möbel?",
    answer: "Unser Standort ist Weckbacherstrasse 12, 63937 Weilbach, Deutschland.",
  },
  {
    id: "de-2",
    category: "Unternehmen",
    question: "Habt ihr einen Showroom, den ich besuchen kann?",
    answer:
      "Ja, Sie können unseren Showroom in Weilbach besuchen und die Möbel live vor Ort erleben. Nutzen Sie den Button „Showroom besuchen“ auf der Startseite für die Anfahrt.",
  },
  {
    id: "de-3",
    category: "Unternehmen",
    question: "Wie kann ich euch erreichen?",
    answer:
      "Sie erreichen uns telefonisch, per E-Mail (mail@om-moebel.de) oder direkt über WhatsApp — den WhatsApp-Button finden Sie unten rechts auf jeder Seite.",
  },
  {
    id: "de-4",
    category: "Unternehmen",
    question: "Seid ihr ein Großhändler oder auch für Privatkunden?",
    answer: "Wir sind Großhandel und Einzelhandel — sowohl Privatkunden als auch gewerbliche Kunden sind bei uns willkommen.",
  },

  // — Produkte & Sortiment —
  {
    id: "de-10",
    category: "Produkte",
    question: "Welche Möbelkategorien bietet ihr an?",
    answer:
      "Wir führen Wohnzimmer-, Schlafzimmer-, Küchen- und Essmöbel, Kleiderschränke, Büromöbel, Gartenmöbel sowie Dekoration.",
  },
  {
    id: "de-11",
    category: "Produkte",
    question: "Sind eure Möbel neu oder gebraucht?",
    answer: "Alle bei uns angebotenen Möbel sind neuwertig. Als Outlet bieten wir teils Ausstellungsstücke und Restposten zu reduzierten Preisen an.",
  },
  {
    id: "de-12",
    category: "Produkte",
    question: "Warum sind eure Preise günstiger als in anderen Möbelhäusern?",
    answer:
      "Als Großhändler kaufen wir direkt und in größeren Mengen ein, wodurch wir die Ersparnis an Sie weitergeben können — insbesondere bei Ausstellungsstücken und Restposten.",
  },
  {
    id: "de-13",
    category: "Produkte",
    question: "Kann ich Möbel in verschiedenen Farben oder Stoffen bestellen?",
    answer: "Bei vielen Modellen sind verschiedene Farb- und Stoffvarianten verfügbar. Bitte fragen Sie beim jeweiligen Produkt oder über WhatsApp nach den aktuellen Optionen.",
  },
  {
    id: "de-14",
    category: "Produkte",
    question: "Wie reinige und pflege ich Polstermöbel?",
    answer:
      "Das hängt vom Bezugsstoff ab. Grundsätzlich gilt: Flecken sofort und vorsichtig abtupfen (nicht reiben), regelmäßig absaugen, direkte Sonneneinstrahlung vermeiden. Für spezielle Stoffe empfehlen wir professionelle Polsterreinigung.",
  },

  // — Lieferung (Fakten von Inhaber noch zu bestätigen) —
  {
    id: "de-20",
    category: "Lieferung",
    question: "Was kostet die Lieferung?",
    answer: "[TODO: Versandkosten/Freigrenze mit dem Inhaber final klären, bevor diese Antwort live geschaltet wird.]",
  },
  {
    id: "de-21",
    category: "Lieferung",
    question: "Wie lange dauert die Lieferung?",
    answer: "In der Regel 2-5 Werktage, abhängig vom Produkt und der Verfügbarkeit. Genaue Angaben finden Sie auf der jeweiligen Produktseite.",
  },
  {
    id: "de-22",
    category: "Lieferung",
    question: "Bietet ihr auch Montage an?",
    answer: "Ja, wir bieten Lieferung und professionelle Montage zum Festpreis an. Details erfahren Sie über den Button „Mehr erfahren“ im Bereich Lieferung & Montage.",
  },

  // — Rückgabe (Fakten von Inhaber noch zu bestätigen) —
  {
    id: "de-30",
    category: "Rückgabe",
    question: "Kann ich ein Möbelstück zurückgeben, wenn es mir nicht gefällt?",
    answer: "[TODO: Rückgabefrist mit dem Inhaber final klären, bevor diese Antwort live geschaltet wird.]",
  },
  {
    id: "de-31",
    category: "Rückgabe",
    question: "Was mache ich, wenn ein Möbelstück beschädigt ankommt?",
    answer:
      "Bitte kontaktieren Sie uns umgehend über WhatsApp oder E-Mail mit Fotos des Schadens — wir kümmern uns dann schnellstmöglich um Ersatz oder Reparatur.",
  },

  // — Zahlung (Fakten von Inhaber noch zu bestätigen) —
  {
    id: "de-40",
    category: "Zahlung",
    question: "Welche Zahlungsmethoden akzeptiert ihr?",
    answer: "[TODO: Zahlungsmethoden mit dem Inhaber final klären, bevor diese Antwort live geschaltet wird.]",
  },
  {
    id: "de-41",
    category: "Zahlung",
    question: "Bietet ihr Ratenzahlung oder Finanzierung an?",
    answer: "Ja, wir bieten eine 0%-Finanzierung an — bequem in Raten zahlen ohne zusätzliche Kosten. Details finden Sie im Bereich „0% Finanzierung“.",
  },

  // — Bestellung & Sonstiges —
  {
    id: "de-50",
    category: "Bestellung",
    question: "Wie bestelle ich ein Möbelstück?",
    answer:
      "Sie können direkt über die Website in den Warenkorb legen und bestellen, oder uns über WhatsApp/DM kontaktieren, um Ihre Bestellung persönlich aufzugeben.",
  },
  {
    id: "de-51",
    category: "Bestellung",
    question: "Kann ich eine Bestellung nachträglich ändern oder stornieren?",
    answer: "Solange die Bestellung noch nicht versendet wurde, ist eine Änderung oder Stornierung in der Regel möglich. Kontaktieren Sie uns dafür so schnell wie möglich über WhatsApp oder E-Mail.",
  },
  {
    id: "de-52",
    category: "Bestellung",
    question: "Gebt ihr Garantie auf eure Möbel?",
    answer: "Ja, wir bieten bis zu 5 Jahre Garantie auf viele unserer Produkte. Details entnehmen Sie bitte der jeweiligen Produktbeschreibung.",
  },
  {
    id: "de-53",
    category: "Bestellung",
    question: "Beliefert ihr auch außerhalb von Deutschland?",
    answer: "Bitte kontaktieren Sie uns direkt über WhatsApp oder E-Mail, um die Liefermöglichkeiten für Ihre Region zu klären.",
  },
];

export function getFaqContext(): string {
  return FAQ_DE.map((f) => `F: ${f.question}\nA: ${f.answer}`).join("\n\n");
}
