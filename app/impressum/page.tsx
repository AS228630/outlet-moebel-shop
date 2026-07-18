import { LegalPageShell, Section, Fill } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";

export default function ImpressumPage() {
  return (
    <LegalPageShell title="Impressum">
      <Section title="Angaben gemäß § 5 TMG">
        <p>
          {BUSINESS.legalName}
          <br />
          Großhandel · Einzelhandel
          <br />
          {BUSINESS.addressLine}
          <br />
          Deutschland
        </p>
      </Section>

      <Section title="Vertreten durch">
        <p>Geschäftsführer: {BUSINESS.geschaeftsfuehrer}</p>
      </Section>

      <Section title="Kontakt">
        <p>
          Telefon: {BUSINESS.phoneMain}
          <br />
          E-Mail: {BUSINESS.email}
        </p>
      </Section>

      <Section title="Registereintrag">
        <p>
          Eintragung im Handelsregister.
          <br />
          Registergericht: {BUSINESS.registergericht}
          <br />
          Registernummer: {BUSINESS.registernummer}
        </p>
      </Section>

      <Section title="Umsatzsteuer-ID">
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          <Fill>[USt-IdNr., z. B. DE123456789 — noch zu bestätigen]</Fill>
        </p>
      </Section>

      <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          {BUSINESS.geschaeftsfuehrer}
          <br />
          {BUSINESS.addressLine}
        </p>
      </Section>

      <Section title="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar
          unter{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </Section>

      <Section title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Section>

      <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs text-dark">
        <strong>Hinweis vor Veröffentlichung:</strong> Geschäftsführer, Registergericht und Registernummer sind
        mit dem offiziellen Handelsregistereintrag (Amtsgericht Aschaffenburg, HRB 16403) verifiziert. Nur die
        Umsatzsteuer-ID (<Fill>[…]</Fill>) fehlt noch — bitte vor dem Livegang der Website ergänzen.
      </div>
    </LegalPageShell>
  );
}
