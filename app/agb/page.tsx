import { LegalPageShell, Section, Fill } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";

export default function AgbPage() {
  return (
    <LegalPageShell title="Allgemeine Geschäftsbedingungen (AGB)">
      <Section title="1. Geltungsbereich und Vertragspartner">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Outlet Möbel GmbH,
          {" "}{BUSINESS.addressLine}, Deutschland (E-Mail: {BUSINESS.email}) — nachfolgend „wir&rdquo; — und
          den Nutzern des Online-Shops (nachfolgend „Kunde&rdquo; oder „Sie&rdquo;).
        </p>
      </Section>

      <Section title="2. Vertragsschluss">
        <p>
          Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar, sondern eine
          unverbindliche Aufforderung zur Bestellung. Mit dem Absenden Ihrer Bestellung geben Sie ein
          verbindliches Angebot zum Kauf ab. Der Vertrag kommt zustande, sobald wir Ihre Bestellung durch eine
          Auftragsbestätigung per E-Mail annehmen.
        </p>
      </Section>

      <Section title="3. Preise und Versandkosten">
        <p>
          Alle angegebenen Preise verstehen sich als Endpreise inklusive der gesetzlichen Umsatzsteuer.
        </p>
        <p>
          Versandkosten: <Fill>[Genaue Versandkosten bzw. Freigrenze mit dem Inhaber final klären, bevor
          dieser Abschnitt live geschaltet wird]</Fill>
        </p>
      </Section>

      <Section title="4. Zahlungsmethoden">
        <p>
          Zahlungsmethoden: <Fill>[Akzeptierte Zahlungsmethoden mit dem Inhaber final klären, bevor dieser
          Abschnitt live geschaltet wird]</Fill>
        </p>
      </Section>

      <Section title="5. Lieferung und Montage">
        <p>
          Die Lieferzeit beträgt in der Regel 2–5 Werktage, abhängig von Produkt und Verfügbarkeit. Auf Wunsch
          bieten wir Lieferung und professionelle Montage zum Festpreis an.
        </p>
      </Section>

      <Section title="6. Eigentumsvorbehalt">
        <p>Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
      </Section>

      <Section title="7. Gewährleistung">
        <p>
          Es gelten die gesetzlichen Gewährleistungsrechte. Ergänzend bieten wir auf viele unserer Produkte eine
          Garantie von bis zu 5 Jahren — Details entnehmen Sie der jeweiligen Produktbeschreibung.
        </p>
      </Section>

      <Section title="8. Widerrufsrecht">
        <p>
          Informationen zum gesetzlichen Widerrufsrecht für Verbraucher finden Sie in unserer separaten
          Widerrufsbelehrung.
        </p>
      </Section>

      <Section title="9. Haftung">
        <p>
          Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des
          Produkthaftungsgesetzes. Für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit
          haften wir ebenfalls unbeschränkt. Bei leicht fahrlässiger Verletzung einer wesentlichen
          Vertragspflicht (Kardinalpflicht) ist unsere Haftung auf den vertragstypisch vorhersehbaren Schaden
          begrenzt. Im Übrigen ist die Haftung für leicht fahrlässige Pflichtverletzungen ausgeschlossen.
        </p>
      </Section>

      <Section title="10. Schlussbestimmungen">
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sollten einzelne
          Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </Section>

      <div className="rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs text-dark">
        <strong>Hinweis vor Veröffentlichung:</strong> Die gelb markierten Abschnitte (Versandkosten,
        Zahlungsmethoden) müssen mit dem Geschäftsinhaber final geklärt werden. Wir empfehlen außerdem, diesen
        Text vor dem Livegang einmalig von einem Rechtsanwalt prüfen zu lassen.
      </div>
    </LegalPageShell>
  );
}
