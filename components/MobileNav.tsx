"use client";

import Link from "next/link";
import {
  X,
  Home,
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Shirt,
  Briefcase,
  TreePine,
  Lamp,
  Tag,
  Sparkles,
  Award,
  Percent,
  Truck,
  Wrench,
  Store,
  Info,
  Mail,
  User,
  Heart,
  ShoppingCart,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";
import Logo from "@/components/Logo";
import { useLocale } from "@/components/LocaleProvider";
import type { DictionaryKey, Locale } from "@/lib/i18n/dictionaries";

const MAIN_LINKS: { key: DictionaryKey; href: string; icon: typeof Home }[] = [
  { key: "nav.home", href: "/", icon: Home },
  { key: "nav.livingRoom", href: "/wohnzimmer", icon: Sofa },
  { key: "nav.bedroom", href: "/schlafzimmer", icon: BedDouble },
  { key: "nav.kitchenDining", href: "/kueche-essen", icon: UtensilsCrossed },
  { key: "nav.wardrobes", href: "/kleiderschraenke", icon: Shirt },
  { key: "nav.office", href: "/bueromoebel", icon: Briefcase },
  { key: "nav.garden", href: "/gartenmoebel", icon: TreePine },
  { key: "nav.decoration", href: "/dekoration", icon: Lamp },
  { key: "nav.deals", href: "/angebote", icon: Tag },
  { key: "nav.new", href: "/neuheiten", icon: Sparkles },
  { key: "nav.bestsellers", href: "/bestseller", icon: Award },
];

const SECONDARY_LINKS: { key: DictionaryKey; href: string; icon: typeof Percent }[] = [
  { key: "footer.financing", href: "/finanzierung", icon: Percent },
  { key: "footer.delivery", href: "/lieferung", icon: Truck },
  { key: "footer.assembly", href: "/montage", icon: Wrench },
  { key: "footer.showroom", href: "/showroom", icon: Store },
  { key: "footer.contact", href: "/kontakt", icon: Mail },
  { key: "footer.aboutUs", href: "/ueber-uns", icon: Info },
];

const ACCOUNT_LINKS: { key: DictionaryKey; href: string; icon: typeof User }[] = [
  { key: "header.account", href: "/konto", icon: User },
  { key: "header.wishlist", href: "/wunschliste", icon: Heart },
  { key: "header.cart", href: "/warenkorb", icon: ShoppingCart },
];

const LANGS: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { locale, setLocale, t } = useLocale();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button aria-label={t("header.menuOpen")} className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className="absolute inset-y-0 left-0 flex w-[90%] max-w-sm flex-col overflow-y-auto bg-header-black text-white shadow-hover"
        style={{ animation: "slideInLeft 300ms ease-out" }}
      >
        <style>{`@keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="flex items-center gap-2">
            <Logo size={30} />
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold">
                <span className="text-logo-red">OUTLET</span> <span className="text-logo-gray">MÖBEL</span>
              </p>
              <p className="text-[9px] text-white/50">{t("header.subtitle")}</p>
            </div>
          </div>
          <button onClick={onClose} aria-label={t("header.menuOpen")} className="text-white">
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 py-2">
          {MAIN_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
            >
              <item.icon size={17} className="text-primary" />
              {t(item.key)}
            </Link>
          ))}

          <div className="my-2 border-t border-white/10" />

          {SECONDARY_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5"
            >
              <item.icon size={16} className="text-white/50" />
              {t(item.key)}
            </Link>
          ))}

          <div className="my-2 border-t border-white/10" />

          {ACCOUNT_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5"
            >
              <item.icon size={16} className="text-white/50" />
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 px-4 py-4">
          <div className="mb-3 flex items-center gap-2">
            <Globe size={13} className="text-white/50" />
            {LANGS.map((l, i) => (
              <span key={l.code} className="flex items-center">
                <button
                  onClick={() => setLocale(l.code)}
                  className={`text-xs font-semibold ${l.code === locale ? "text-primary" : "text-white/50"}`}
                >
                  {l.label}
                </button>
                {i < LANGS.length - 1 && <span className="mx-1.5 text-white/20">|</span>}
              </span>
            ))}
          </div>
          <p className="mb-2 flex items-center gap-2 text-xs text-white/60">
            <Phone size={13} className="shrink-0 text-primary" />
            {BUSINESS.phoneMain}
          </p>
          <p className="mb-2 flex items-center gap-2 text-xs text-white/60">
            <Mail size={13} className="shrink-0 text-primary" />
            {BUSINESS.email}
          </p>
          <p className="mb-3 flex items-start gap-2 text-xs text-white/60">
            <MapPin size={13} className="mt-0.5 shrink-0 text-primary" />
            {BUSINESS.addressLine}
          </p>
        </div>
      </div>
    </div>
  );
}
