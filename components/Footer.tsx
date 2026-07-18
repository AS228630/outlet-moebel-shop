import Link from "next/link";
import { MapPin, Phone, Mail, Send, FileText, Ruler, Home as HomeIcon, Star } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { BUSINESS, whatsappLink } from "@/lib/business";
import Logo from "@/components/Logo";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-primary">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-primary">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85C2.35 3.9 3.87 2.35 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-primary">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Kategorien",
    links: [
      { label: "Wohnzimmer", href: "/wohnzimmer" },
      { label: "Schlafzimmer", href: "/schlafzimmer" },
      { label: "Küche & Essen", href: "/kueche-essen" },
      { label: "Kleiderschränke", href: "/kleiderschraenke" },
      { label: "Büromöbel", href: "/bueromoebel" },
      { label: "Gartenmöbel", href: "/gartenmoebel" },
      { label: "Dekoration", href: "/dekoration" },
      { label: "Angebote", href: "/angebote" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Lieferung", href: "/lieferung" },
      { label: "Montage", href: "/montage" },
      { label: "Finanzierung", href: "/finanzierung" },
      { label: "Beratung vor Ort", href: "/beratung-vor-ort" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Showroom", href: "/showroom" },
      { label: "Karriere", href: "/karriere" },
      { label: "Blog", href: "/blog" },
      { label: "Nachhaltigkeit", href: "/nachhaltigkeit" },
    ],
  },
];

const TOP_SERVICES = [
  { icon: FileText, label: "Download Katalog", desc: "Jetzt Katalog als PDF herunterladen", href: "/katalog" },
  { icon: HomeIcon, label: "Room Planner", desc: "Planen Sie Ihr Zimmer in 3D online", href: "/room-planner" },
  { icon: Ruler, label: "Maßaufnahme", desc: "Wir messen bei Ihnen zuhause aus", href: "/mass-aufnahme" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="mx-auto max-w-[1440px] px-6 py-10 pb-28 lg:px-10 lg:pb-10">
        <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/10 pb-8 sm:grid-cols-2 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-white">Newsletter</p>
            <p className="mb-3 text-xs text-white/60">Exklusive Angebote, Neuheiten & Inspirationen.</p>
            <div className="flex max-w-sm gap-2">
              <input
                placeholder="E-Mail-Adresse eingeben"
                className="flex-1 rounded-input border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 outline-none"
              />
              <Button size="sm">
                <Send size={13} />
                Abonnieren
              </Button>
            </div>
            <p className="mt-4 text-sm font-bold text-white">Folgen Sie uns</p>
            <div className="mt-2.5 flex items-center gap-2.5">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-primary hover:text-white"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {TOP_SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="group">
              <s.icon size={20} className="mb-2 text-primary" />
              <p className="text-xs font-bold text-white group-hover:text-primary">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-white/50">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Logo size={32} />
              <p className="font-display text-lg font-extrabold text-white">
                <span className="text-logo-red">OUTLET</span> <span className="text-logo-gray">MÖBEL</span>
              </p>
            </div>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-start gap-2 text-xs text-white/60 hover:text-primary hover:underline"
            >
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
              {BUSINESS.addressLine}
            </a>
            <p className="mt-2 flex items-center gap-2 text-xs text-white/60">
              <Phone size={14} className="shrink-0 text-primary" />
              {BUSINESS.phoneMain}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-xs text-white/60 hover:text-[#25D366]"
            >
              <WhatsAppIcon size={14} className="shrink-0 text-whatsapp" />
              {BUSINESS.phoneMobile} (WhatsApp)
            </a>
            <p className="mt-2 flex items-center gap-2 text-xs text-white/60">
              <Mail size={14} className="shrink-0 text-primary" />
              {BUSINESS.email}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-white">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-white/60 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/60">
            <p className="mb-1.5 font-bold text-white">Öffnungszeiten</p>
            <p>{BUSINESS.hoursWeekday}</p>
            <p>{BUSINESS.hoursSaturday}</p>
            <p className="mt-1 text-white/40">{BUSINESS.hoursSunday}</p>
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-white hover:border-primary hover:text-primary"
            >
              <MapPin size={12} />
              Auf Google Maps ansehen
            </a>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">e</div>
            <div className="leading-tight">
              <p className="text-xs font-bold text-white">Trusted Shops</p>
              <p className="text-[11px] text-white/50">Käuferschutz</p>
              <div className="mt-0.5 flex items-center gap-1">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="text-[10px] text-white/50">{BUSINESS.googleRating}/5.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© 2026 Outlet Möbel GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/widerruf" className="hover:text-primary">Widerruf</Link>
            <Link href="/datenschutz" className="hover:text-primary">Datenschutz</Link>
            <Link href="/agb" className="hover:text-primary">AGB</Link>
            <Link href="/impressum" className="hover:text-primary">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
