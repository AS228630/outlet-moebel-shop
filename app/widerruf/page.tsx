import { LegalPageShell, Section } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";

export default function WiderrufPage() {
  return (
    <LegalPageShell title="Widerrufsrecht">
      <Section title="Widerrufsrecht">
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die
          Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der
          nicht der Beförderer ist, die letzte Ware in Besitz genommen haben.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Outlet Möbel GmbH, {BUSINESS.addressLine},
          Deutschland, E-Mail: {BUSINESS.email}, Telefon: {BUSINESS.phoneMain}) mittels einer eindeutigen
          Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen
          Vertrag zu widerrufen, informieren. Sie können dafür das unten stehende Muster-Widerrufsformular
          verwenden, das jedoch nicht vorgeschrieben ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
          Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
        </p>
      </Section>

      <Section title="Folgen des Widerrufs">
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
          einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass
          Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt
          haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die
          Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
        </p>
        <p>
          Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den
          Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere
          Zeitpunkt ist.
        </p>
        <p>
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem
          Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
          Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
        </p>
        <p>
          Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Aufgrund der Beschaffenheit der Waren
          (z. B. großformatige Möbelstücke) können diese Kosten erheblich sein.
        </p>
        <p>
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen
          zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
          mit ihnen zurückzuführen ist.
        </p>
      </Section>

      <Section title="Ausschluss des Widerrufsrechts">
        <p>
          Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind
          und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich
          ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (z. B.
          Sonderanfertigungen nach Maß).
        </p>
      </Section>

      <div className="rounded-card border border-border bg-light-gray p-5">
        <h2 className="mb-3 text-base font-bold text-dark">Muster-Widerrufsformular</h2>
        <p className="mb-3 text-xs text-gray">
          (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es an{" "}
          {BUSINESS.email} zurück.)
        </p>
        <div className="space-y-2 text-sm text-dark">
          <p>An: Outlet Möbel GmbH, {BUSINESS.addressLine}, Deutschland, E-Mail: {BUSINESS.email}</p>
          <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):</p>
          <p>Bestellt am (*)/erhalten am (*):</p>
          <p>Name des/der Verbraucher(s):</p>
          <p>Anschrift des/der Verbraucher(s):</p>
          <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
          <p>Datum:</p>
        </div>
        <p className="mt-3 text-xs text-gray">(*) Unzutreffendes streichen.</p>
      </div>
    </LegalPageShell>
  );
}
