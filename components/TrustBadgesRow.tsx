import { Lock, RotateCcw, ShieldCheck, Receipt } from "lucide-react";

const ITEMS = [
  { icon: Lock, title: "Sicher einkaufen", subtitle: "SSL verschlüsselt" },
  { icon: RotateCcw, title: "14 Tage Rückgaberecht", subtitle: "ohne Risiko bestellen" },
  { icon: ShieldCheck, title: "5 Jahre Garantie", subtitle: "auf viele Produkte" },
  { icon: Receipt, title: "Zahlungsmethoden", subtitle: "Rechnung, Karte, PayPal u.v.m." },
];

export default function TrustBadgesRow() {
  return (
    <div className="border-y border-border bg-light-gray">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 px-6 py-5 sm:grid-cols-4 lg:px-10">
        {ITEMS.map((item) => (
          <div key={item.title} className="flex items-center gap-2.5">
            <item.icon size={20} className="shrink-0 text-primary" />
            <div className="leading-tight">
              <p className="text-[11.5px] font-semibold text-dark">{item.title}</p>
              <p className="text-[10px] text-gray">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center gap-2.5 px-6 pb-5 lg:px-10">
        {["VISA", "Mastercard", "PayPal", "Klarna"].map((p) => (
          <span key={p} className="rounded-md border border-border bg-white px-2.5 py-1 text-[10px] font-bold text-dark">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
