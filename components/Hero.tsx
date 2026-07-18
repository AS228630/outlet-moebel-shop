"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Zap, Truck, ShieldCheck, CreditCard, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, whatsappLink } from "@/lib/business";

const SIDE_FEATURES = [
  { icon: Zap, label: "Sofort verfügbar" },
  { icon: Truck, label: "Schnelle Lieferung" },
  { icon: ShieldCheck, label: "Top Qualität" },
  { icon: CreditCard, label: "Sichere Zahlung" },
];

export default function Hero() {
  return (
    <section className="bg-light-gray px-6 pb-6 pt-4 lg:px-10 lg:pb-10">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[20px] shadow-hero lg:rounded-card">
        {/* Real reference photo (to be replaced with the client's own
           showroom/product photography, or a properly licensed stock
           photo, before the site goes live — see the copyright note
           in the project notes). */}
        <div className="relative flex h-[300px] items-end sm:h-[420px] lg:h-[560px]">
          <Image
            src="/images/hero-living-room.jpg"
            alt="Modernes Wohnzimmer mit stilvollem Sofa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/55 to-black/85" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-lg p-5 sm:p-8 lg:p-12"
          >
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">
              Bis zu 70% sparen
            </span>
            <h1 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Premium Möbel
              <br />
              zum <span className="text-primary">Outlet-Preis</span>
            </h1>
            <p className="mt-2 hidden max-w-sm text-sm leading-relaxed text-white/80 sm:block">
              Hochwertige Möbel für Ihr Zuhause – unschlagbare Preise, Top Qualität und persönlicher
              Service!
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              <Button size="sm" className="sm:hidden">Jetzt entdecken</Button>
              <Button size="lg" className="hidden sm:inline-flex">Jetzt entdecken</Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-dark sm:hidden"
              >
                Showroom
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hidden border-white/40 bg-white/10 text-white hover:bg-white hover:text-dark sm:inline-flex"
              >
                <MapPin size={16} />
                Showroom besuchen
              </Button>
            </div>

            <div className="mt-3 hidden items-center gap-2 sm:flex sm:mt-8">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                />
                <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93z" />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                />
              </svg>
              <span className="text-sm font-bold text-white">{BUSINESS.googleRating}</span>
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill={i < Math.round(BUSINESS.googleRating) ? "currentColor" : "none"}
                    strokeWidth={i < Math.round(BUSINESS.googleRating) ? 0 : 1.5}
                  />
                ))}
              </span>
              <span className="text-xs text-white/70">{BUSINESS.googleReviewCount} Bewertungen</span>
            </div>
          </motion.div>

          {/* Feature card, right side */}
          <div className="absolute left-6 top-6 hidden w-40 flex-col gap-2 rounded-2xl bg-dark/85 p-4 text-white backdrop-blur sm:flex lg:left-10 lg:top-10">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-white/60">
              Bis zu <span className="text-primary">70%</span> sparen
            </p>
            {SIDE_FEATURES.map((f) => (
              <div key={f.label} className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2 text-[11px] font-semibold">
                <f.icon size={14} className="text-primary" />
                {f.label}
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 sm:left-auto sm:right-[220px] sm:translate-x-0">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-5 bg-primary" : "w-1.5 bg-white/40"}`} />
            ))}
          </div>

          {/* In-hero WhatsApp prompt — bottom-right of the hero card
             itself, matching the reference exactly. Distinct from the
             separate fixed button below (visible once scrolled past
             the hero). */}
          <a
            href={whatsappLink("Hallo! Ich habe eine Frage zu Ihren Möbeln.")}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 rounded-full bg-white py-2 pl-4 pr-2 shadow-hover sm:flex"
          >
            <div className="text-left leading-tight">
              <p className="text-xs font-bold text-dark">Brauchen Sie Hilfe?</p>
              <p className="text-[10.5px] text-gray">Jetzt chatten</p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
              <MessageCircle size={17} fill="white" className="text-whatsapp" />
            </span>
          </a>
        </div>
      </div>

      {/* WhatsApp widget — separate fixed circular button, bottom-right
         of the viewport, always visible once scrolled past the hero
         (where the in-hero prompt above is no longer on screen). */}
      <div className="fixed bottom-[80px] right-4 z-40 lg:bottom-5 lg:right-5">
        <a
          href={whatsappLink("Hallo! Ich habe eine Frage zu Ihren Möbeln.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Kontakt"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-whatsapp text-white"
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,.2)" }}
        >
          <MessageCircle size={23} fill="white" className="text-whatsapp" />
        </a>
      </div>
    </section>
  );
}
