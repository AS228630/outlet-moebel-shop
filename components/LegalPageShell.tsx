import type { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export function LegalPageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <CategoryNav />
      <TrustBar />
      <main className="mx-auto max-w-3xl px-4 py-10 pb-28 lg:px-6 lg:pb-16">
        <h1 className="mb-8 font-display text-2xl font-extrabold text-dark sm:text-3xl">{title}</h1>
        <div className="space-y-8">{children}</div>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-dark">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-gray">{children}</div>
    </section>
  );
}

/** Highlights text that still needs to be confirmed by the business
 * owner (e.g. Handelsregisternummer, USt-IdNr, exact Geschäftsführer
 * name) — visibly marked rather than guessed, per the project's
 * no-fake-data principle. Must be resolved before the site goes live. */
export function Fill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-warning/15 px-1.5 py-0.5 font-mono text-xs font-semibold text-warning">
      {children}
    </span>
  );
}
