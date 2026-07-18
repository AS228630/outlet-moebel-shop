import Link from "next/link";
import Image from "next/image";
import { Sofa, BedDouble, UtensilsCrossed, Shirt, Briefcase, TreePine, Lamp } from "lucide-react";

// Only Wohnzimmer has a real photo so far (the client's own Instagram
// photo, reused here). The rest use tinted gradient placeholders until
// real per-category photography is available — clearly a placeholder
// approach, not a claim that these are real product photos.
const CATEGORIES = [
  { label: "Wohnzimmer", href: "/wohnzimmer", icon: Sofa, photo: "/images/hero-living-room.jpg" },
  { label: "Schlafzimmer", href: "/schlafzimmer", icon: BedDouble, gradient: "from-neutral-700 to-neutral-900" },
  { label: "Küche & Essen", href: "/kueche-essen", icon: UtensilsCrossed, gradient: "from-stone-600 to-stone-800" },
  { label: "Kleiderschränke", href: "/kleiderschraenke", icon: Shirt, gradient: "from-zinc-600 to-zinc-800" },
  { label: "Büromöbel", href: "/bueromoebel", icon: Briefcase, gradient: "from-neutral-600 to-neutral-800" },
  { label: "Gartenmöbel", href: "/gartenmoebel", icon: TreePine, gradient: "from-stone-700 to-stone-900" },
  { label: "Dekoration", href: "/dekoration", icon: Lamp, gradient: "from-zinc-700 to-neutral-900" },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10 lg:px-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-display text-xl font-extrabold text-dark">Unsere Kategorien</h2>
        <Link href="/kategorien" className="text-xs font-semibold text-primary hover:underline">
          Alle Kategorien anzeigen →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative flex h-[130px] flex-col overflow-hidden rounded-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-hover sm:h-[160px]"
          >
            {cat.photo ? (
              <Image src={cat.photo} alt={cat.label} fill className="object-cover" sizes="200px" />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
            )}
            <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />

            <div className="relative flex h-9 w-9 items-center justify-center self-start rounded-full bg-white text-primary shadow-card m-2.5 sm:h-10 sm:w-10">
              <cat.icon size={17} strokeWidth={2} />
            </div>

            <div className="relative mt-auto bg-white/95 px-2 py-2 text-center">
              <p className="text-[11px] font-bold text-dark sm:text-xs">{cat.label}</p>
              <p className="hidden text-[10px] text-primary sm:block">Jetzt entdecken →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
