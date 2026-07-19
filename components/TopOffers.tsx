"use client";

import ProductCard, { type Product } from "@/components/ProductCard";
import { useLocale } from "@/components/LocaleProvider";

export default function TopOffers() {
  const { t } = useLocale();
  const TABS = [t("products.tabDeals"), t("products.tabNew"), t("products.tabBestsellers")];

  // Placeholder catalog for the design demo — real product data (names,
  // prices, stock, images) needs to come from the actual product database
  // once it exists; nothing here should be mistaken for a real listing.
  const PRODUCTS: Product[] = [
    { name: t("product.cornerSofaMilano"), price: 899, oldPrice: 1299, discount: 30, rating: 4.5, reviews: 12, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.boxSpringBedDeluxe"), price: 999, oldPrice: 1399, discount: 28, rating: 5, reviews: 18, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.wardrobe4Door"), price: 499, oldPrice: 799, discount: 25, rating: 4, reviews: 6, inStock: true, stockNote: t("product.stock3Left"), delivery: t("product.delivery35") },
    { name: t("product.diningSet6Chairs"), price: 599, oldPrice: 699, discount: 20, rating: 4.5, reviews: 7, inStock: true, delivery: t("product.delivery24") },
    { name: t("product.wallUnitModern"), price: 999, oldPrice: 1299, discount: 23, rating: 4, reviews: 11, inStock: true, delivery: t("product.delivery24") },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 lg:px-10">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-extrabold text-dark">{t("products.title")}</h2>
        <div className="flex items-center gap-5">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`border-b-2 pb-1 text-sm font-semibold ${
                i === 0 ? "border-primary text-primary" : "border-transparent text-gray hover:text-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <a href="/angebote" className="text-xs font-semibold text-primary hover:underline">
          {t("products.viewAll")} →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}
