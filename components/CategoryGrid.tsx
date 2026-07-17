import Link from "next/link";
import { Sofa, BedDouble, UtensilsCrossed, Shirt, Briefcase, TreePine, Lamp } from "lucide-react";

const CATEGORIES = [
  { label: "Wohnzimmer", href: "/wohnzimmer", icon: Sofa },
  { label: "Schlafzimmer", href: "/schlafzimmer", icon: BedDouble },
  { label: "Küche & Essen", href: "/kueche-essen", icon: UtensilsCrossed },
  { label: "Kleiderschränke", href: "/kleiderschraenke", icon: Shirt },
  { label: "Büromöbel", href: "/bueromoebel", icon: Briefcase },
  { label: "Gartenmöbel", href: "/gartenmoebel", icon: TreePine },
  { label: "Dekoration", href: "/dekoration", icon: Lamp },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-display text-xl font-extrabold text-dark">Unsere Kategorien</h2>
        <Link href="/kategorien" className="text-xs font-semibold text-primary hover:underline">
          Alle Kategorien anzeigen →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group flex h-[170px] flex-col items-center justify-center gap-3 rounded-card border border-border bg-white p-4 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-hover"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light-gray text-dark transition-colors group-hover:bg-primary group-hover:text-white">
              <cat.icon size={26} strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-xs font-semibold text-dark">{cat.label}</p>
              <p className="text-[10px] text-primary">Jetzt entdecken →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
