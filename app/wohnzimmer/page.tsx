"use client";

import Link from "next/link";
import { ChevronRight, SlidersHorizontal, Star } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import TrustBadgesRow from "@/components/TrustBadgesRow";
import ProductCard, { type Product } from "@/components/ProductCard";
import { useLocale } from "@/components/LocaleProvider";

// Placeholder catalog for the design demo — swap for the real sofa/
// living-room product data once the catalog/database exists.
const SUBCATEGORIES = ["Alle", "Sofas & Couches", "Sessel", "Couchtische", "Wohnwände", "TV-Möbel", "Teppiche"];

export default function WohnzimmerPage() {
  const { t } = useLocale();

  // Placeholder catalog for the design demo — swap for the real sofa/
  // living-room product data once the catalog/database exists.
  const SOFAS: Product[] = [
    { name: t("product.cornerSofaMilano"), price: 899, oldPrice: 1299, discount: 30, rating: 4.5, reviews: 12, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.sofa3SeaterTorino"), price: 649, oldPrice: 899, discount: 27, rating: 4.5, reviews: 22, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.sofaBedVerona"), price: 749, oldPrice: 999, discount: 25, rating: 4, reviews: 9, inStock: true, delivery: t("product.delivery35") },
    { name: t("product.wallUnitModern"), price: 999, oldPrice: 1299, discount: 23, rating: 4, reviews: 11, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.coffeeTableOak"), price: 219, oldPrice: 289, discount: 24, rating: 5, reviews: 14, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.armchairOslo"), price: 349, oldPrice: 449, discount: 22, rating: 4.5, reviews: 8, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.cornerSofaBolognaXL"), price: 1199, oldPrice: 1699, discount: 29, rating: 4.5, reviews: 16, inStock: true, stockNote: t("product.stock2Left"), delivery: t("product.delivery35") },
    { name: t("product.tvLowboardVintage"), price: 279, oldPrice: 349, discount: 20, rating: 4, reviews: 5, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.chaiseLoungeRimini"), price: 799, oldPrice: 1099, discount: 27, rating: 4.5, reviews: 19, inStock: true, delivery: t("product.delivery24") },
  ];

  return (
    <>
      <TopBar />
      <Header />
      <CategoryNav />
      <TrustBar />

      <main className="flex-1 pb-16 lg:pb-0">
        <div className="mx-auto max-w-[1440px] px-4 py-4 lg:px-10">
          <div className="flex items-center gap-1.5 text-xs text-gray">
            <Link href="/" className="hover:text-primary">{t("categorypage.breadcrumbHome")}</Link>
            <ChevronRight size={12} />
            <span className="font-semibold text-dark">{t("nav.livingRoom")}</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-4 pb-4 lg:px-10">
          <h1 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">{t("categorypage.livingRoomTitle")}</h1>
          <p className="mt-1.5 max-w-2xl text-sm text-gray">{t("categorypage.livingRoomDesc")}</p>
        </div>

        <div className="mx-auto flex max-w-[1440px] gap-4 px-4 pb-6 lg:hidden">
          {SUBCATEGORIES.map((c, i) => (
            <button
              key={c}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                i === 0 ? "border-primary bg-primary text-white" : "border-border text-text"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-[1440px] gap-6 px-4 pb-14 lg:flex lg:px-10">
          {/* Filter sidebar — desktop */}
          <aside className="hidden w-60 shrink-0 lg:block">
            <div className="rounded-card border border-border bg-white p-4 shadow-card">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-dark">
                <SlidersHorizontal size={15} className="text-primary" />
                {t("categorypage.filter")}
              </p>

              <FilterGroup title={t("categorypage.category")}>
                {SUBCATEGORIES.map((c, i) => (
                  <FilterCheckbox key={c} label={c} defaultChecked={i === 0} />
                ))}
              </FilterGroup>

              <FilterGroup title={t("categorypage.price")}>
                <div className="flex items-center gap-2">
                  <input
                    placeholder={t("categorypage.priceFrom")}
                    className="w-full rounded-input border border-border px-2.5 py-1.5 text-xs outline-none"
                  />
                  <span className="text-gray">–</span>
                  <input
                    placeholder={t("categorypage.priceTo")}
                    className="w-full rounded-input border border-border px-2.5 py-1.5 text-xs outline-none"
                  />
                </div>
              </FilterGroup>

              <FilterGroup title={t("categorypage.rating")}>
                {[5, 4, 3].map((n) => (
                  <label key={n} className="mb-1.5 flex cursor-pointer items-center gap-2 text-xs text-text">
                    <input type="checkbox" className="accent-primary" />
                    <span className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} fill={i < n ? "currentColor" : "none"} strokeWidth={1.5} />
                      ))}
                    </span>
                    <span className="text-gray">{t("categorypage.andMore")}</span>
                  </label>
                ))}
              </FilterGroup>

              <FilterGroup title={t("categorypage.availability")} last>
                <FilterCheckbox label={t("categorypage.availableNow")} />
                <FilterCheckbox label={t("categorypage.discountedOnly")} />
              </FilterGroup>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs text-gray">{SOFAS.length} {t("categorypage.products")}</p>
              <select className="rounded-input border border-border px-3 py-1.5 text-xs text-text outline-none">
                <option>{t("categorypage.sortPopularity")}</option>
                <option>{t("categorypage.sortPriceAsc")}</option>
                <option>{t("categorypage.sortPriceDesc")}</option>
                <option>{t("categorypage.sortNewest")}</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {SOFAS.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <TrustBadgesRow />
      <Footer />
      <BottomNav />
    </>
  );
}

function FilterGroup({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`py-3 ${last ? "" : "border-b border-border"}`}>
      <p className="mb-2 text-xs font-bold text-dark">{title}</p>
      {children}
    </div>
  );
}

function FilterCheckbox({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  return (
    <label className="mb-1.5 flex cursor-pointer items-center gap-2 text-xs text-text">
      <input type="checkbox" defaultChecked={defaultChecked} className="accent-primary" />
      {label}
    </label>
  );
}
