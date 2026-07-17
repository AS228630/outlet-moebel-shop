import { Truck, RotateCcw, ShieldCheck, Percent, BadgeCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "Kostenlose Lieferung", subtitle: "ab 49 € Bestellwert" },
  { icon: RotateCcw, title: "14 Tage Rückgabe", subtitle: "ohne Risiko bestellen" },
  { icon: ShieldCheck, title: "Geprüfte Qualität", subtitle: "strenge Qualitätskontrollen" },
  { icon: Percent, title: "0% Finanzierung", subtitle: "bequem in Raten zahlen" },
  { icon: BadgeCheck, title: "Trusted Shops", subtitle: "zertifizierter Käuferschutz" },
];

export default function TrustBar() {
  return (
    <div className="hidden border-b border-border bg-white lg:block">
      <div className="mx-auto grid max-w-[1440px] grid-cols-5 divide-x divide-x-reverse divide-border px-6 py-3">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-2.5 px-4 first:pr-0 last:pl-0">
            <item.icon size={20} className="shrink-0 text-primary" />
            <div className="leading-tight">
              <p className="text-xs font-semibold text-dark">{item.title}</p>
              <p className="text-[10.5px] text-gray">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
