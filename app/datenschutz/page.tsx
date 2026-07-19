"use client";

import { LegalPageShell, Section, Fill } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";
import { useLocale } from "@/components/LocaleProvider";
import { legalT } from "@/lib/i18n/legal";

export default function DatenschutzPage() {
  const { locale } = useLocale();
  const lt = legalT(locale);

  const C = {
    de: {
      devNotice: "Hinweis: Dieser Text beschreibt wahrheitsgemäß den aktuellen technischen Stand der Website (Stand: Entwicklungsphase). Der Online-Shop hat aktuell noch keine Bestellfunktion, keine Kundenkonten und keine Zahlungsabwicklung — es wird ausschließlich über WhatsApp Kontakt aufgenommen. Dieser Abschnitt muss erweitert werden, sobald Warenkorb, Konto-Funktion oder Zahlungsdienste live gehen.",
      s1: "1. Verantwortlicher",
      s2: "2. Hosting",
      hostingBody: "Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website erhebt Vercel automatisch technische Server-Logdaten (u. a. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs), um den Betrieb der Website sicherzustellen. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Da Vercel Inc. ihren Sitz in den USA hat, stützt sich die Datenübermittlung auf die EU-Standardvertragsklauseln als Übermittlungsmechanismus gemäß Art. 46 DSGVO.",
      s3: "3. Kontaktaufnahme über WhatsApp",
      whatsappBody: "Wenn Sie über einen WhatsApp-Button auf unserer Website Kontakt zu uns aufnehmen, öffnet sich der WhatsApp-Messenger (WhatsApp Ireland Limited) mit einer vorausgefüllten Nachricht an unsere Geschäftsnummer. Die Verarbeitung Ihrer Nachricht erfolgt dann über WhatsApp und unterliegt dessen eigener Datenschutzerklärung. Rechtsgrundlage für unsere Verarbeitung der eingehenden Nachricht ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Anfrage) bzw. lit. f (berechtigtes Interesse an Kundenkommunikation).",
      s4: "4. Cookies und Analyse-Tools",
      cookiesBody: "Aktuell setzt diese Website keine Analyse- oder Marketing-Cookies von Drittanbietern ein. Sollte sich dies künftig ändern (z. B. durch Einsatz eines Webanalyse-Tools), werden wir vor der Umsetzung ein Cookie-Consent-Banner mit Einwilligungsmöglichkeit einbauen und diesen Abschnitt entsprechend erweitern.",
      s5: "5. Ihre Rechte",
      rightsBody: `Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch bezüglich Ihrer personenbezogenen Daten. Wenden Sie sich hierfür an ${BUSINESS.email}. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.`,
      s6: "6. Zuständige Aufsichtsbehörde",
      authorityLabel: "Zuständige Aufsichtsbehörde",
    },
    en: {
      devNotice: "Note: This text honestly reflects the current technical state of the website (development phase). The online shop currently has no ordering function, no customer accounts, and no payment processing — contact is made exclusively via WhatsApp. This section must be expanded once cart, account, or payment features go live.",
      s1: "1. Data Controller",
      s2: "2. Hosting",
      hostingBody: "This website is hosted by Vercel Inc. When you visit the website, Vercel automatically collects technical server log data (including IP address, browser type, and time of access) to ensure the website's operation. The legal basis is our legitimate interest pursuant to Art. 6(1)(f) GDPR. As Vercel Inc. is based in the USA, data transfer relies on the EU Standard Contractual Clauses as the transfer mechanism pursuant to Art. 46 GDPR.",
      s3: "3. Contacting Us via WhatsApp",
      whatsappBody: "If you contact us via a WhatsApp button on our website, the WhatsApp messenger app (WhatsApp Ireland Limited) opens with a pre-filled message to our business number. Your message is then processed via WhatsApp and is subject to its own privacy policy. The legal basis for our processing of the incoming message is Art. 6(1)(b) GDPR (pre-contractual inquiry) or (f) (legitimate interest in customer communication).",
      s4: "4. Cookies and Analytics Tools",
      cookiesBody: "This website currently does not use any third-party analytics or marketing cookies. Should this change in the future (e.g. through the use of a web analytics tool), we will implement a cookie consent banner with an opt-in option before doing so, and expand this section accordingly.",
      s5: "5. Your Rights",
      rightsBody: `You have the right to access, rectify, erase, restrict the processing of, and object to the processing of your personal data, as well as the right to data portability. Please contact us at ${BUSINESS.email} for any such requests. You also have the right to lodge a complaint with a data protection supervisory authority.`,
      s6: "6. Responsible Supervisory Authority",
      authorityLabel: "Responsible supervisory authority",
    },
    tr: {
      devNotice: "Not: Bu metin, web sitesinin mevcut teknik durumunu doğru şekilde yansıtmaktadır (geliştirme aşaması). Çevrimiçi mağazada şu anda sipariş verme işlevi, müşteri hesapları veya ödeme işleme bulunmamaktadır — iletişim yalnızca WhatsApp üzerinden sağlanmaktadır. Sepet, hesap veya ödeme özellikleri devreye girdiğinde bu bölüm genişletilmelidir.",
      s1: "1. Veri Sorumlusu",
      s2: "2. Barındırma (Hosting)",
      hostingBody: "Bu web sitesi Vercel Inc. tarafından barındırılmaktadır. Web sitesini ziyaret ettiğinizde, Vercel web sitesinin çalışmasını sağlamak amacıyla otomatik olarak teknik sunucu günlük verilerini (IP adresi, tarayıcı türü, erişim zamanı dahil) toplar. Hukuki dayanak, GDPR Madde 6(1)(f) uyarınca meşru menfaatimizdir. Vercel Inc.'in merkezi ABD'de olduğundan, veri aktarımı GDPR Madde 46 uyarınca aktarım mekanizması olarak AB Standart Sözleşme Maddelerine dayanmaktadır.",
      s3: "3. WhatsApp Üzerinden İletişim",
      whatsappBody: "Web sitemizdeki bir WhatsApp düğmesi aracılığıyla bizimle iletişime geçerseniz, işletme numaramıza önceden doldurulmuş bir mesajla WhatsApp mesajlaşma uygulaması (WhatsApp Ireland Limited) açılır. Mesajınız daha sonra WhatsApp üzerinden işlenir ve kendi gizlilik politikasına tabidir. Gelen mesajı işlememizin hukuki dayanağı GDPR Madde 6(1)(b) (sözleşme öncesi talep) veya (f) (müşteri iletişiminde meşru menfaat)'dir.",
      s4: "4. Çerezler ve Analiz Araçları",
      cookiesBody: "Bu web sitesi şu anda üçüncü taraf analiz veya pazarlama çerezleri kullanmamaktadır. Bu durum gelecekte değişirse (örneğin bir web analiz aracının kullanılması durumunda), uygulamadan önce onay seçeneği içeren bir çerez izni banner'ı ekleyecek ve bu bölümü buna göre genişleteceğiz.",
      s5: "5. Haklarınız",
      rightsBody: `Kişisel verilerinize erişim, düzeltme, silme, işlemenin kısıtlanması ve itiraz etme hakkına, ayrıca veri taşınabilirliği hakkına sahipsiniz. Bu tür talepler için lütfen ${BUSINESS.email} adresinden bizimle iletişime geçin. Ayrıca bir veri koruma denetim makamına şikayette bulunma hakkınız da vardır.`,
      s6: "6. Yetkili Denetim Makamı",
      authorityLabel: "Yetkili denetim makamı",
    },
  }[locale];

  return (
    <LegalPageShell title={lt.pageTitle.datenschutz}>
      {lt.bindingNotice && (
        <div className="rounded-xl border border-border bg-light-gray p-4 text-xs text-gray">{lt.bindingNotice}</div>
      )}

      <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs text-dark">{C.devNotice}</div>

      <Section title={C.s1}>
        <p>
          {BUSINESS.legalName}, {BUSINESS.addressLine}, {locale === "de" ? "Deutschland" : locale === "en" ? "Germany" : "Almanya"}
          <br />
          {locale === "de" ? "E-Mail" : locale === "en" ? "Email" : "E-posta"}: {BUSINESS.email}
        </p>
      </Section>

      <Section title={C.s2}>
        <p>{C.hostingBody}</p>
      </Section>

      <Section title={C.s3}>
        <p>{C.whatsappBody}</p>
      </Section>

      <Section title={C.s4}>
        <p>{C.cookiesBody}</p>
      </Section>

      <Section title={C.s5}>
        <p>{C.rightsBody}</p>
      </Section>

      <Section title={C.s6}>
        <p>{C.authorityLabel}: <Fill>[Landesdatenschutzbehörde — {lt.fillLabel}]</Fill></p>
      </Section>
    </LegalPageShell>
  );
}
