"use client";

import Link from "next/link";
import { ChevronRight, SlidersHorizontal, Star, PackageSearch } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import TrustBadgesRow from "@/components/TrustBadgesRow";
import ProductCard, { type Product } from "@/components/ProductCard";
import { useLocale } from "@/components/LocaleProvider";

/**
 * Shared shell for a product-category page (breadcrumb, filter sidebar,
 * sort bar, product grid). Modeled on the original /wohnzimmer page.
 *
 * If `products` is omitted or empty, an honest "catalog pending" empty
 * state is shown instead of a grid — never fake/placeholder products.
 * Pass `products` once the real catalog data for this category exists.
 */
export default function CategoryPageShell({
  navLabel,
  title,
  description,
  subcategories,
  products,
}: {
  navLabel: string;
  title: string;
  description: string;
  subcategories: string[];
  products?: Product[];
}) {
  const { t } = useLocale();
  const items = products ?? [];

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
            <span className="font-semibold text-dark">{navLabel}</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-4 pb-4 lg:px-10">
          <h1 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">{title}</h1>
          <p className="mt-1.5 max-w-2xl text-sm text-gray">{description}</p>
        </div>

        <div className="mx-auto flex max-w-[1440px] gap-4 px-4 pb-6 lg:hidden">
          {subcategories.map((c, i) => (
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
                {subcategories.map((c, i) => (
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
            {items.length > 0 ? (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs text-gray">{items.length} {t("categorypage.products")}</p>
                  <select className="rounded-input border border-border px-3 py-1.5 text-xs text-text outline-none">
                    <option>{t("categorypage.sortPopularity")}</option>
                    <option>{t("categorypage.sortPriceAsc")}</option>
                    <option>{t("categorypage.sortPriceDesc")}</option>
                    <option>{t("categorypage.sortNewest")}</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  {items.map((p) => (
                    <ProductCard key={p.name} product={p} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-border bg-light-gray/50 px-6 py-20 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-card">
                  <PackageSearch size={26} />
                </div>
                <p className="font-display text-lg font-bold text-dark">{t("categorypage.catalogPending")}</p>
                <p className="mt-1.5 max-w-sm text-sm text-gray">{t("categorypage.catalogPendingDesc")}</p>
              </div>
            )}
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
