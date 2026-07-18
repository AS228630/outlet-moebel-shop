import type { LucideIcon } from "lucide-react";
import { Construction } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComingSoonPage({
  title,
  description,
  icon: Icon = Construction,
}: {
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <>
      <TopBar />
      <Header />
      <CategoryNav />
      <TrustBar />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 pb-32 text-center lg:pb-24">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-light-gray text-primary">
          <Icon size={28} />
        </div>
        <h1 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">{title}</h1>
        <p className="mt-2 max-w-sm text-sm text-gray">
          {description ?? "Diese Seite wird gerade aufgebaut und ist bald vollständig verfügbar."}
        </p>
        <Link href="/" className="mt-6">
          <Button>Zur Startseite</Button>
        </Link>
      </main>

      <Footer />
      <BottomNav />
    </>
  );
}
