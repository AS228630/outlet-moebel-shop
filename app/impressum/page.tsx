"use client";

import { LegalPageShell, Section, Fill } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";
import { useLocale } from "@/components/LocaleProvider";
import { legalT } from "@/lib/i18n/legal";

export default function ImpressumPage() {
  const { locale } = useLocale();
  const lt = legalT(locale);

  const C = {
    de: {
      s1: "Angaben gemäß § 5 TMG",
      s2: "Vertreten durch",
      ceo: "Geschäftsführer",
      s3: "Kontakt",
      phone: "Telefon",
      email: "E-Mail",
      s4: "Registereintrag",
      registered: "Eintragung im Handelsregister.",
      court: "Registergericht",
      number: "Registernummer",
      s5: "Umsatzsteuer-ID",
      vatDesc: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
      s6: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      s7: "EU-Streitschlichtung",
      odrDesc1: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter",
      odrDesc2: "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      s8: "Verbraucherstreitbeilegung",
      disputeDesc: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      warning: "Hinweis: Geschäftsführer, Registergericht und Registernummer sind mit dem offiziellen Handelsregistereintrag (Amtsgericht Aschaffenburg, HRB 16403) verifiziert. Nur die Umsatzsteuer-ID fehlt noch — bitte vor dem Livegang der Website ergänzen.",
      country: "Deutschland",
    },
    en: {
      s1: "Information pursuant to § 5 TMG (German Telemedia Act)",
      s2: "Represented by",
      ceo: "Managing Director",
      s3: "Contact",
      phone: "Phone",
      email: "Email",
      s4: "Register Entry",
      registered: "Registered in the Commercial Register.",
      court: "Register Court",
      number: "Register Number",
      s5: "VAT Identification Number",
      vatDesc: "VAT identification number pursuant to § 27a of the German VAT Act:",
      s6: "Responsible for content pursuant to § 18 (2) MStV",
      s7: "EU Dispute Resolution",
      odrDesc1: "The European Commission provides a platform for online dispute resolution (ODR), available at",
      odrDesc2: "You can find our email address above in the legal notice.",
      s8: "Consumer Dispute Resolution",
      disputeDesc: "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
      warning: "Note: Managing Director, register court, and register number have been verified against the official Commercial Register entry (Amtsgericht Aschaffenburg, HRB 16403). Only the VAT ID is still missing — please add it before the site goes live.",
      country: "Germany",
    },
    tr: {
      s1: "§ 5 TMG (Alman Telemedya Yasası) uyarınca bilgiler",
      s2: "Temsilci",
      ceo: "Genel Müdür",
      s3: "İletişim",
      phone: "Telefon",
      email: "E-posta",
      s4: "Ticaret Sicili Kaydı",
      registered: "Ticaret Siciline kayıtlıdır.",
      court: "Sicil Mahkemesi",
      number: "Sicil Numarası",
      s5: "KDV Kimlik Numarası",
      vatDesc: "Alman KDV Kanunu § 27a uyarınca KDV kimlik numarası:",
      s6: "§ 18 (2) MStV uyarınca içerikten sorumlu kişi",
      s7: "AB Uyuşmazlık Çözümü",
      odrDesc1: "Avrupa Komisyonu, çevrimiçi uyuşmazlık çözümü (ODR) için bir platform sunmaktadır, adres:",
      odrDesc2: "E-posta adresimizi yukarıda, yasal bilgiler bölümünde bulabilirsiniz.",
      s8: "Tüketici Uyuşmazlık Çözümü",
      disputeDesc: "Bir tüketici hakem heyeti önünde uyuşmazlık çözüm sürecine katılmaya istekli veya yükümlü değiliz.",
      warning: "Not: Genel Müdür, sicil mahkemesi ve sicil numarası resmi Ticaret Sicili kaydına göre doğrulanmıştır (Amtsgericht Aschaffenburg, HRB 16403). Sadece KDV numarası hâlâ eksik — lütfen site yayına girmeden önce ekleyin.",
      country: "Almanya",
    },
  }[locale];

  return (
    <LegalPageShell title={lt.pageTitle.impressum}>
      {lt.bindingNotice && (
        <div className="rounded-xl border border-border bg-light-gray p-4 text-xs text-gray">{lt.bindingNotice}</div>
      )}

      <Section title={C.s1}>
        <p>
          {BUSINESS.legalName}
          <br />
          Großhandel · Einzelhandel
          <br />
          {BUSINESS.addressLine}
          <br />
          {C.country}
        </p>
      </Section>

      <Section title={C.s2}>
        <p>{C.ceo}: {BUSINESS.geschaeftsfuehrer}</p>
      </Section>

      <Section title={C.s3}>
        <p>
          {C.phone}: {BUSINESS.phoneMain}
          <br />
          {C.email}: {BUSINESS.email}
        </p>
      </Section>

      <Section title={C.s4}>
        <p>
          {C.registered}
          <br />
          {C.court}: {BUSINESS.registergericht}
          <br />
          {C.number}: {BUSINESS.registernummer}
        </p>
      </Section>

      <Section title={C.s5}>
        <p>
          {C.vatDesc}
          <br />
          <Fill>[USt-IdNr. — {lt.fillLabel}]</Fill>
        </p>
      </Section>

      <Section title={C.s6}>
        <p>
          {BUSINESS.geschaeftsfuehrer}
          <br />
          {BUSINESS.addressLine}
        </p>
      </Section>

      <Section title={C.s7}>
        <p>
          {C.odrDesc1}{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . {C.odrDesc2}
        </p>
      </Section>

      <Section title={C.s8}>
        <p>{C.disputeDesc}</p>
      </Section>

      <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs text-dark">{C.warning}</div>
    </LegalPageShell>
  );
}
