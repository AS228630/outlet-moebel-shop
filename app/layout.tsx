import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: "Outlet Möbel GmbH — Premium Möbel zum Outlet-Preis",
  description:
    "Hochwertige Möbel für Ihr Zuhause – unschlagbare Preise, Top Qualität und persönlicher Service. Wohnzimmer, Schlafzimmer, Küche & Essen und mehr.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-text">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
