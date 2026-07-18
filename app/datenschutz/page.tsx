import { LegalPageShell, Section, Fill } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";

export default function DatenschutzPage() {
  return (
    <LegalPageShell title="Datenschutzerklärung">
      <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs text-dark">
        <strong>Hinweis:</strong> Dieser Text beschreibt wahrheitsgemäß den aktuellen technischen Stand der
        Website (Stand: Entwicklungsphase). Der Online-Shop hat aktuell noch keine Bestellfunktion, keine
        Kundenkonten und keine Zahlungsabwicklung — es wird ausschließlich über WhatsApp Kontakt aufgenommen.
        Dieser Abschnitt muss erweitert werden, sobald Warenkorb, Konto-Funktion oder Zahlungsdienste live
        gehen.
      </div>

      <Section title="1. Verantwortlicher">
        <p>
          Outlet Möbel GmbH, {BUSINESS.addressLine}, Deutschland
          <br />
          E-Mail: {BUSINESS.email}
        </p>
      </Section>

      <Section title="2. Hosting">
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website erhebt Vercel automatisch
          technische Server-Logdaten (u. a. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs), um den Betrieb der
          Website sicherzustellen. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f
          DSGVO. Da Vercel Inc. ihren Sitz in den USA hat, stützt sich die Datenübermittlung auf die
          EU-Standardvertragsklauseln als Übermittlungsmechanismus gemäß Art. 46 DSGVO.
        </p>
      </Section>

      <Section title="3. Kontaktaufnahme über WhatsApp">
        <p>
          Wenn Sie über einen WhatsApp-Button auf unserer Website Kontakt zu uns aufnehmen, öffnet sich der
          WhatsApp-Messenger (WhatsApp Ireland Limited) mit einer vorausgefüllten Nachricht an unsere
          Geschäftsnummer. Die Verarbeitung Ihrer Nachricht erfolgt dann über WhatsApp und unterliegt dessen
          eigener Datenschutzerklärung. Rechtsgrundlage für unsere Verarbeitung der eingehenden Nachricht ist
          Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Anfrage) bzw. lit. f (berechtigtes Interesse an
          Kundenkommunikation).
        </p>
      </Section>

      <Section title="4. Cookies und Analyse-Tools">
        <p>
          Aktuell setzt diese Website keine Analyse- oder Marketing-Cookies von Drittanbietern ein. Sollte sich
          dies künftig ändern (z. B. durch Einsatz eines Webanalyse-Tools), werden wir vor der Umsetzung ein
          Cookie-Consent-Banner mit Einwilligungsmöglichkeit einbauen und diesen Abschnitt entsprechend
          erweitern.
        </p>
      </Section>

      <Section title="5. Ihre Rechte">
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch bezüglich Ihrer personenbezogenen Daten. Wenden Sie sich hierfür
          an {BUSINESS.email}. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren.
        </p>
      </Section>

      <Section title="6. Zuständige Aufsichtsbehörde">
        <p>
          Zuständige Aufsichtsbehörde: <Fill>[Landesdatenschutzbehörde des jeweiligen Bundeslandes, z. B. Der
          Hessische Beauftragte für Datenschutz und Informationsfreiheit]</Fill>
        </p>
      </Section>
    </LegalPageShell>
  );
}
