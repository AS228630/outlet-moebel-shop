"use client";

import { LegalPageShell, Section } from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";
import { useLocale } from "@/components/LocaleProvider";
import { legalT } from "@/lib/i18n/legal";

export default function WiderrufPage() {
  const { locale } = useLocale();
  const lt = legalT(locale);

  const C = {
    de: {
      s1: "Widerrufsrecht",
      p1: "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben.",
      p2: `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (${BUSINESS.legalName}, ${BUSINESS.addressLine}, Deutschland, E-Mail: ${BUSINESS.email}, Telefon: ${BUSINESS.phoneMain}) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.`,
      p3: "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
      s2: "Folgen des Widerrufs",
      p4: "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.",
      p5: "Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.",
      p6: "Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.",
      p7: "Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Aufgrund der Beschaffenheit der Waren (z. B. großformatige Möbelstücke) können diese Kosten erheblich sein.",
      p8: "Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.",
      s3: "Ausschluss des Widerrufsrechts",
      p9: "Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (z. B. Sonderanfertigungen nach Maß).",
      formTitle: "Muster-Widerrufsformular",
      formIntro: `(Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es an ${BUSINESS.email} zurück.)`,
      formTo: `An: ${BUSINESS.legalName}, ${BUSINESS.addressLine}, Deutschland, E-Mail: ${BUSINESS.email}`,
      formLine1: "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):",
      formLine2: "Bestellt am (*)/erhalten am (*):",
      formLine3: "Name des/der Verbraucher(s):",
      formLine4: "Anschrift des/der Verbraucher(s):",
      formLine5: "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):",
      formLine6: "Datum:",
      formNote: "(*) Unzutreffendes streichen.",
    },
    en: {
      s1: "Right of Withdrawal",
      p1: "You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period will expire fourteen days from the day on which you, or a third party other than the carrier and indicated by you, acquire physical possession of the last goods.",
      p2: `To exercise your right of withdrawal, you must inform us (${BUSINESS.legalName}, ${BUSINESS.addressLine}, Germany, email: ${BUSINESS.email}, phone: ${BUSINESS.phoneMain}) of your decision to withdraw from this contract by an unequivocal statement (e.g. a letter sent by post or an email). You may use the model withdrawal form below, although it is not obligatory.`,
      p3: "To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.",
      s2: "Effects of Withdrawal",
      p4: "If you withdraw from this contract, we shall reimburse all payments received from you, including delivery costs (except for supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and no later than fourteen days from the day on which we are informed about your decision to withdraw from this contract.",
      p5: "We may withhold reimbursement until we have received the goods back, or you have supplied evidence of having sent back the goods, whichever is the earliest.",
      p6: "You shall send back the goods, or hand them over to us, without undue delay and in any event no later than fourteen days from the day on which you communicate your withdrawal from this contract to us. The deadline is met if you send back the goods before the period of fourteen days has expired.",
      p7: "You will bear the direct cost of returning the goods. Due to the nature of the goods (e.g. large furniture items), these costs may be significant.",
      p8: "You are only liable for any diminished value of the goods resulting from handling other than what is necessary to establish the nature, characteristics, and functioning of the goods.",
      s3: "Exclusion of the Right of Withdrawal",
      p9: "The right of withdrawal does not apply to contracts for the supply of goods that are not prefabricated and for the production of which an individual choice or decision by the consumer is decisive, or which are clearly personalised to the consumer's individual requirements (e.g. custom-made items).",
      formTitle: "Model Withdrawal Form",
      formIntro: `(If you want to withdraw from the contract, please fill in this form and send it back to ${BUSINESS.email}.)`,
      formTo: `To: ${BUSINESS.legalName}, ${BUSINESS.addressLine}, Germany, email: ${BUSINESS.email}`,
      formLine1: "I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract of sale of the following goods (*):",
      formLine2: "Ordered on (*)/received on (*):",
      formLine3: "Name of consumer(s):",
      formLine4: "Address of consumer(s):",
      formLine5: "Signature of consumer(s) (only if this form is notified on paper):",
      formLine6: "Date:",
      formNote: "(*) Delete as appropriate.",
    },
    tr: {
      s1: "Cayma Hakkı",
      p1: "Herhangi bir gerekçe göstermeksizin bu sözleşmeden on dört gün içinde cayma hakkına sahipsiniz. Cayma süresi, siz veya sizin belirlediğiniz, taşıyıcı olmayan üçüncü bir kişinin son malı teslim aldığı günden itibaren on dört gündür.",
      p2: `Cayma hakkınızı kullanmak için, bizi (${BUSINESS.legalName}, ${BUSINESS.addressLine}, Almanya, e-posta: ${BUSINESS.email}, telefon: ${BUSINESS.phoneMain}) bu sözleşmeden cayma kararınız hakkında açık bir beyanla (örneğin postayla gönderilen bir mektup veya e-posta ile) bilgilendirmelisiniz. Bunun için aşağıdaki örnek cayma formunu kullanabilirsiniz, ancak bu zorunlu değildir.`,
      p3: "Cayma süresine uymak için, cayma hakkınızı kullandığınıza dair bildirimi cayma süresi dolmadan önce göndermeniz yeterlidir.",
      s2: "Caymanın Sonuçları",
      p4: "Bu sözleşmeden cayarsanız, sizden aldığımız teslimat ücreti dahil tüm ödemeleri (tarafımızca sunulan en ucuz standart teslimat türü dışında başka bir teslimat türü seçmenizden kaynaklanan ek maliyetler hariç), cayma kararınızın bize ulaştığı günden itibaren en geç on dört gün içinde gecikmeksizin iade edeceğiz.",
      p5: "Malları geri almadığımız veya malları geri gönderdiğinize dair kanıtı sunmadığınız sürece, hangisi daha önce gerçekleşirse, geri ödemeyi erteleyebiliriz.",
      p6: "Malları, bu sözleşmeden cayma kararınızı bize bildirdiğiniz günden itibaren en geç on dört gün içinde gecikmeksizin bize geri göndermeli veya teslim etmelisiniz. Malları on dört günlük süre dolmadan önce gönderirseniz, süreye uyulmuş sayılır.",
      p7: "Malların iadesine ilişkin doğrudan masrafları siz karşılarsınız. Malların niteliği gereği (örneğin büyük mobilya parçaları), bu masraflar önemli olabilir.",
      p8: "Malların niteliğini, özelliklerini ve işlevselliğini tespit etmek için gerekli olmayan bir kullanımdan kaynaklanan değer kaybından yalnızca siz sorumlusunuz.",
      s3: "Cayma Hakkının İstisnası",
      p9: "Cayma hakkı, önceden üretilmemiş ve üretimi için tüketici tarafından bireysel bir seçim veya belirleme yapılması gereken ya da açıkça tüketicinin kişisel ihtiyaçlarına göre uyarlanmış malların (örneğin özel ölçü ürünler) teslimine ilişkin sözleşmeler için geçerli değildir.",
      formTitle: "Örnek Cayma Formu",
      formIntro: `(Sözleşmeden caymak istiyorsanız, lütfen bu formu doldurup ${BUSINESS.email} adresine geri gönderin.)`,
      formTo: `Alıcı: ${BUSINESS.legalName}, ${BUSINESS.addressLine}, Almanya, e-posta: ${BUSINESS.email}`,
      formLine1: "İşbu belgeyle aşağıdaki malların satın alınmasına ilişkin sözleşmeden (*) cayıyorum/cayıyoruz (*):",
      formLine2: "Sipariş tarihi (*)/teslim alma tarihi (*):",
      formLine3: "Tüketici(ler)in adı:",
      formLine4: "Tüketici(ler)in adresi:",
      formLine5: "Tüketici(ler)in imzası (yalnızca kağıt üzerinde bildirimlerde):",
      formLine6: "Tarih:",
      formNote: "(*) Uygun olmayanı siliniz.",
    },
  }[locale];

  return (
    <LegalPageShell title={lt.pageTitle.widerruf}>
      {lt.bindingNotice && (
        <div className="rounded-xl border border-border bg-light-gray p-4 text-xs text-gray">{lt.bindingNotice}</div>
      )}

      <Section title={C.s1}>
        <p>{C.p1}</p>
        <p>{C.p2}</p>
        <p>{C.p3}</p>
      </Section>

      <Section title={C.s2}>
        <p>{C.p4}</p>
        <p>{C.p5}</p>
        <p>{C.p6}</p>
        <p>{C.p7}</p>
        <p>{C.p8}</p>
      </Section>

      <Section title={C.s3}>
        <p>{C.p9}</p>
      </Section>

      <div className="rounded-card border border-border bg-light-gray p-5">
        <h2 className="mb-3 text-base font-bold text-dark">{C.formTitle}</h2>
        <p className="mb-3 text-xs text-gray">{C.formIntro}</p>
        <div className="space-y-2 text-sm text-dark">
          <p>{C.formTo}</p>
          <p>{C.formLine1}</p>
          <p>{C.formLine2}</p>
          <p>{C.formLine3}</p>
          <p>{C.formLine4}</p>
          <p>{C.formLine5}</p>
          <p>{C.formLine6}</p>
        </div>
        <p className="mt-3 text-xs text-gray">{C.formNote}</p>
      </div>
    </LegalPageShell>
  );
}
