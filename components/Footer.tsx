import Link from "next/link";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
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
function YoutubeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer hover:text-primary">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Kategorien",
    links: ["Wohnzimmer", "Schlafzimmer", "Küche & Essen", "Kleiderschränke", "Büromöbel", "Gartenmöbel", "Dekoration", "Angebote"],
  },
  {
    title: "Service",
    links: ["Lieferung", "Montage", "Finanzierung", "Beratung vor Ort", "FAQ", "Kontakt"],
  },
  {
    title: "Unternehmen",
    links: ["Über uns", "Showroom", "Karriere", "Blog", "Nachhaltigkeit"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold text-white">Newsletter</p>
            <p className="text-xs text-white/60">Exklusive Angebote, Neuheiten & Inspirationen.</p>
          </div>
          <div className="flex w-full max-w-sm gap-2 sm:w-auto">
            <input
              placeholder="E-Mail-Adresse eingeben"
              className="flex-1 rounded-input border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 outline-none"
            />
            <Button size="sm">
              <Send size={13} />
              Abonnieren
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Logo size={32} />
              <p className="font-display text-lg font-extrabold text-white">
                <span className="text-logo-red">OUTLET</span> <span className="text-logo-gray">MÖBEL</span>
              </p>
            </div>
            <p className="mt-3 flex items-start gap-2 text-xs text-white/60">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
              {BUSINESS.addressLine}
            </p>
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
              <MessageCircle size={14} className="shrink-0 text-[#25D366]" />
              {BUSINESS.phoneMobile} (WhatsApp)
            </a>
            <p className="mt-2 flex items-center gap-2 text-xs text-white/60">
              <Mail size={14} className="shrink-0 text-primary" />
              {BUSINESS.email}
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/50">
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-white">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-xs text-white/60 hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
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
