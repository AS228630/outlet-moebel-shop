"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-light-gray">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            Bis zu 70% sparen
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-dark sm:text-5xl lg:text-6xl">
            Premium Möbel
            <br />
            zum <span className="text-primary">Outlet-Preis</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray">
            Hochwertige Möbel für Ihr Zuhause – unschlagbare Preise, Top Qualität und persönlicher
            Service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Jetzt entdecken</Button>
            <Button size="lg" variant="outline">
              <MapPin size={16} />
              Showroom besuchen
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-gray">
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-primary" />
              Kostenlose Lieferung ab 49 €
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-primary" />
              Geprüfte Qualität
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-hero"
        >
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-dark to-neutral-700 text-sm text-white/50">
            Produktbild folgt
          </div>
        </motion.div>
      </div>
    </section>
  );
}
