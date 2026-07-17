import { Button } from "@/components/ui/button";

const CARDS = [
  { tag: "Traumwohnung", title: "Gestalten", desc: "Lassen Sie sich inspirieren und entdecken Sie moderne Einrichtungsideen für jedes Zuhause.", cta: "Inspiration ansehen" },
  { tag: "Persönliche", title: "Einrichtungsberatung", desc: "Unsere Experten helfen Ihnen bei der Auswahl der perfekten Möbel für Ihr Zuhause.", cta: "Beratung buchen" },
  { tag: "Unser Showroom", title: "Besuchen", desc: "Erleben Sie unsere Möbel live vor Ort. Wir freuen uns auf Ihren Besuch!", cta: "Route planen" },
];

export default function InspirationCards() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 lg:px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.tag}
            className="relative flex h-56 flex-col justify-end overflow-hidden rounded-card bg-gradient-to-br from-neutral-700 to-neutral-900 p-5 text-white shadow-card"
          >
            <span className="mb-1 text-[10px] font-bold uppercase tracking-wide text-primary">{card.tag}</span>
            <h3 className="font-display text-lg font-extrabold">{card.title}</h3>
            <p className="mt-1 text-xs text-white/75">{card.desc}</p>
            <Button size="sm" className="mt-3 w-fit">
              {card.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
