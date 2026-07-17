"use client";

import { Star, Heart, ShoppingCart, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockNote?: string;
  delivery: string;
};

// Placeholder catalog for the design demo — real product data (names,
// prices, stock, images) needs to come from the actual product database
// once it exists; nothing here should be mistaken for a real listing.
const PRODUCTS: Product[] = [
  { name: "Ecksofa Milano", price: 899, oldPrice: 1299, discount: 30, rating: 4.5, reviews: 12, inStock: true, delivery: "Lieferung in 2-4 Tagen" },
  { name: "Boxspringbett Deluxe", price: 999, oldPrice: 1399, discount: 28, rating: 5, reviews: 18, inStock: true, delivery: "Lieferung in 2-4 Tagen" },
  { name: "Kleiderschrank 4-Türig", price: 499, oldPrice: 799, discount: 25, rating: 4, reviews: 6, inStock: true, stockNote: "Nur noch 3 Stück!", delivery: "Lieferung in 3-5 Tagen" },
  { name: "Esstisch Set (6 Stühle)", price: 599, oldPrice: 699, discount: 20, rating: 4.5, reviews: 7, inStock: true, delivery: "Lieferung in 2-4 Tagen" },
  { name: "Wohnwand Modern", price: 999, oldPrice: 1299, discount: 23, rating: 4, reviews: 11, inStock: true, delivery: "Lieferung in 2-4 Tagen" },
];

const TABS = ["Angebote", "Neuheiten", "Bestseller"];

export default function TopOffers() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 lg:px-10">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-extrabold text-dark">Unsere Top Angebote</h2>
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
          Alle Angebote anzeigen →
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

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-hover">
      <div className="relative flex h-[190px] items-center justify-center bg-light-gray text-[11px] text-gray/60">
        Produktbild
        <span className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-[10px] font-bold text-white">
          -{product.discount}%
        </span>
        <button className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-dark opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          <Heart size={14} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <p className="text-[13px] font-semibold text-dark">{product.name}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-extrabold text-primary">{product.price.toFixed(2)} €</span>
          <span className="text-[11px] text-gray line-through">{product.oldPrice.toFixed(2)} €</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-gray">
          <span className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < Math.round(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
            ))}
          </span>
          ({product.reviews})
        </div>
        <p className={`flex items-center gap-1 text-[10.5px] font-medium ${product.stockNote ? "text-primary" : "text-success"}`}>
          {product.stockNote ? <AlertTriangle size={11} /> : <CheckCircle2 size={11} />}
          {product.stockNote ?? "Auf Lager"}
        </p>
        <p className="text-[10.5px] text-gray">{product.delivery}</p>
        <Button size="sm" className="mt-1.5 w-full text-[11px]">
          <ShoppingCart size={13} />
          In den Warenkorb
        </Button>
      </div>
    </div>
  );
}
