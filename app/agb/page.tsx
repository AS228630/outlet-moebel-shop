"use client";

import { LegalPageShell, Section, Fill } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";
import { useLocale } from "@/components/LocaleProvider";
import { legalT } from "@/lib/i18n/legal";

export default function AgbPage() {
  const { locale } = useLocale();
  const lt = legalT(locale);

  const C = {
    de: {
      s1: "1. Geltungsbereich und Vertragspartner",
      p1: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der ${BUSINESS.legalName}, ${BUSINESS.addressLine}, Deutschland (E-Mail: ${BUSINESS.email}) — nachfolgend „wir" — und den Nutzern des Online-Shops (nachfolgend „Kunde" oder „Sie").`,
      s2: "2. Vertragsschluss",
      p2: "Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern eine unverbindliche Aufforderung zur Bestellung. Mit dem Absenden Ihrer Bestellung geben Sie ein verbindliches Angebot zum Kauf ab. Der Vertrag kommt zustande, sobald wir Ihre Bestellung durch eine Auftragsbestätigung per E-Mail annehmen.",
      s3: "3. Preise und Versandkosten",
      p3: "Alle angegebenen Preise verstehen sich als Endpreise inklusive der gesetzlichen Umsatzsteuer.",
      p3b: "Versandkosten",
      p3fill: "[Genaue Versandkosten bzw. Freigrenze mit dem Inhaber final klären, bevor dieser Abschnitt live geschaltet wird]",
      s4: "4. Zahlungsmethoden",
      p4fillLabel: "Zahlungsmethoden",
      p4fill: "[Akzeptierte Zahlungsmethoden mit dem Inhaber final klären, bevor dieser Abschnitt live geschaltet wird]",
      s5: "5. Lieferung und Montage",
      p5: "Die Lieferzeit beträgt in der Regel 2–5 Werktage, abhängig von Produkt und Verfügbarkeit. Auf Wunsch bieten wir Lieferung und professionelle Montage zum Festpreis an.",
      s6: "6. Eigentumsvorbehalt",
      p6: "Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.",
      s7: "7. Gewährleistung",
      p7: "Es gelten die gesetzlichen Gewährleistungsrechte. Ergänzend bieten wir auf viele unserer Produkte eine Garantie von bis zu 5 Jahren — Details entnehmen Sie der jeweiligen Produktbeschreibung.",
      s8: "8. Widerrufsrecht",
      p8: "Informationen zum gesetzlichen Widerrufsrecht für Verbraucher finden Sie in unserer separaten Widerrufsbelehrung.",
      s9: "9. Haftung",
      p9: "Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des Produkthaftungsgesetzes. Für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit haften wir ebenfalls unbeschränkt. Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) ist unsere Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung für leicht fahrlässige Pflichtverletzungen ausgeschlossen.",
      s10: "10. Schlussbestimmungen",
      p10: "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
      warning: "Hinweis: Die gelb markierten Abschnitte (Versandkosten, Zahlungsmethoden) müssen mit dem Geschäftsinhaber final geklärt werden. Dieser Text basiert auf den in Deutschland üblichen Standardformulierungen für Online-Shops (u. a. der gesetzlichen Muster-Widerrufsbelehrung). Eine kostengünstige Alternative zur anwaltlichen Prüfung ist eine kostenlose Erstberatung bei der zuständigen IHK oder Verbraucherzentrale.",
    },
    en: {
      s1: "1. Scope and Contracting Parties",
      p1: `These General Terms and Conditions (T&Cs) apply to all contracts between ${BUSINESS.legalName}, ${BUSINESS.addressLine}, Germany (email: ${BUSINESS.email}) — hereinafter "we" — and users of the online shop (hereinafter "customer" or "you").`,
      s2: "2. Conclusion of Contract",
      p2: "The presentation of products in the online shop does not constitute a legally binding offer, but rather a non-binding invitation to order. By submitting your order, you make a binding offer to purchase. The contract is concluded once we accept your order by sending an order confirmation via email.",
      s3: "3. Prices and Shipping Costs",
      p3: "All stated prices are final prices including statutory VAT.",
      p3b: "Shipping costs",
      p3fill: "[Exact shipping costs / free-shipping threshold to be finalized with the owner before this section goes live]",
      s4: "4. Payment Methods",
      p4fillLabel: "Payment methods",
      p4fill: "[Accepted payment methods to be finalized with the owner before this section goes live]",
      s5: "5. Delivery and Assembly",
      p5: "Delivery time is typically 2–5 business days, depending on the product and availability. Upon request, we offer delivery and professional assembly at a fixed price.",
      s6: "6. Retention of Title",
      p6: "The delivered goods remain our property until paid for in full.",
      s7: "7. Warranty",
      p7: "Statutory warranty rights apply. In addition, we offer a warranty of up to 5 years on many of our products — see the respective product description for details.",
      s8: "8. Right of Withdrawal",
      p8: "Information on the statutory right of withdrawal for consumers can be found in our separate withdrawal policy.",
      s9: "9. Liability",
      p9: "We are liable without limitation for intent and gross negligence, as well as under the Product Liability Act. We are also liable without limitation for damages resulting from injury to life, body, or health. In the event of a slightly negligent breach of a material contractual obligation (cardinal obligation), our liability is limited to the foreseeable damage typical for this type of contract. Liability for slightly negligent breaches of duty is otherwise excluded.",
      s10: "10. Final Provisions",
      p10: "The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). Should individual provisions of these T&Cs be invalid, the validity of the remaining provisions shall remain unaffected.",
      warning: "Note: The highlighted sections (shipping costs, payment methods) must be finalized with the business owner. This text is based on the standard formulations commonly used by online shops in Germany (including the statutory model withdrawal instructions). A cost-effective alternative to a full legal review is a free initial consultation with the local Chamber of Commerce (IHK) or a consumer advice center.",
    },
    tr: {
      s1: "1. Kapsam ve Sözleşme Tarafları",
      p1: `Bu Genel İşlem Koşulları (GİK), ${BUSINESS.legalName}, ${BUSINESS.addressLine}, Almanya (e-posta: ${BUSINESS.email}) — bundan böyle "biz" — ile çevrimiçi mağazanın kullanıcıları (bundan böyle "müşteri" veya "siz") arasındaki tüm sözleşmeler için geçerlidir.`,
      s2: "2. Sözleşmenin Kurulması",
      p2: "Çevrimiçi mağazadaki ürün sunumu, yasal olarak bağlayıcı bir teklif değil, bağlayıcı olmayan bir sipariş davetidir. Siparişinizi göndererek bağlayıcı bir satın alma teklifinde bulunmuş olursunuz. Sözleşme, siparişinizi e-posta yoluyla bir sipariş onayı göndererek kabul ettiğimizde kurulmuş olur.",
      s3: "3. Fiyatlar ve Kargo Ücretleri",
      p3: "Belirtilen tüm fiyatlar, yasal KDV dahil nihai fiyatlardır.",
      p3b: "Kargo ücretleri",
      p3fill: "[Kesin kargo ücretleri / ücretsiz kargo eşiği, bu bölüm yayına girmeden önce işletme sahibiyle netleştirilecektir]",
      s4: "4. Ödeme Yöntemleri",
      p4fillLabel: "Ödeme yöntemleri",
      p4fill: "[Kabul edilen ödeme yöntemleri, bu bölüm yayına girmeden önce işletme sahibiyle netleştirilecektir]",
      s5: "5. Teslimat ve Montaj",
      p5: "Teslimat süresi genellikle ürüne ve stok durumuna bağlı olarak 2–5 iş günüdür. Talep üzerine sabit bir fiyatla teslimat ve profesyonel montaj hizmeti sunuyoruz.",
      s6: "6. Mülkiyet Muhafazası",
      p6: "Teslim edilen mallar, tam ödeme yapılana kadar bizim mülkiyetimizde kalır.",
      s7: "7. Garanti",
      p7: "Yasal garanti hakları geçerlidir. Buna ek olarak, birçok ürünümüzde 5 yıla varan garanti sunuyoruz — ayrıntılar için ilgili ürün açıklamasına bakınız.",
      s8: "8. Cayma Hakkı",
      p8: "Tüketiciler için yasal cayma hakkı hakkında bilgi, ayrı cayma politikamızda bulunabilir.",
      s9: "9. Sorumluluk",
      p9: "Kasıt ve ağır ihmalden, ayrıca Ürün Sorumluluğu Yasası kapsamında sınırsız olarak sorumluyuz. Yaşam, vücut veya sağlığa verilen zararlardan kaynaklanan hasarlardan da sınırsız olarak sorumluyuz. Önemli bir sözleşme yükümlülüğünün (kardinal yükümlülük) hafif ihmalle ihlali durumunda, sorumluluğumuz bu tür sözleşmeler için tipik olarak öngörülebilir zararla sınırlıdır. Aksi takdirde, hafif ihmalli yükümlülük ihlallerinden sorumluluk hariç tutulmuştur.",
      s10: "10. Son Hükümler",
      p10: "Almanya Federal Cumhuriyeti hukuku, BM Satış Sözleşmesi (CISG) hariç olmak üzere geçerlidir. Bu GİK'in tek tek hükümlerinin geçersiz olması durumunda, kalan hükümlerin geçerliliği etkilenmeyecektir.",
      warning: "Not: Vurgulanan bölümler (kargo ücretleri, ödeme yöntemleri) işletme sahibiyle netleştirilmelidir. Bu metin, Almanya'da çevrimiçi mağazalar tarafından yaygın olarak kullanılan standart ifadelere dayanmaktadır (yasal örnek cayma talimatları dahil). Tam bir hukuki incelemeye uygun maliyetli bir alternatif, yerel Ticaret Odası (IHK) veya bir tüketici danışma merkezinden ücretsiz bir ön danışmanlık almaktır.",
    },
  }[locale];

  return (
    <LegalPageShell title={lt.pageTitle.agb}>
      {lt.bindingNotice && (
        <div className="rounded-xl border border-border bg-light-gray p-4 text-xs text-gray">{lt.bindingNotice}</div>
      )}

      <Section title={C.s1}><p>{C.p1}</p></Section>
      <Section title={C.s2}><p>{C.p2}</p></Section>
      <Section title={C.s3}>
        <p>{C.p3}</p>
        <p>{C.p3b}: <Fill>{C.p3fill}</Fill></p>
      </Section>
      <Section title={C.s4}>
        <p>{C.p4fillLabel}: <Fill>{C.p4fill}</Fill></p>
      </Section>
      <Section title={C.s5}><p>{C.p5}</p></Section>
      <Section title={C.s6}><p>{C.p6}</p></Section>
      <Section title={C.s7}><p>{C.p7}</p></Section>
      <Section title={C.s8}><p>{C.p8}</p></Section>
      <Section title={C.s9}><p>{C.p9}</p></Section>
      <Section title={C.s10}><p>{C.p10}</p></Section>

      <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs text-dark">{C.warning}</div>
    </LegalPageShell>
  );
}
