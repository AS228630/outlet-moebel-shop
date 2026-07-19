"use client";

import { Star, Heart, ShoppingCart, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/LocaleProvider";

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

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLocale();
  return (
    <div className="group flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-hover">
      <div className="relative flex h-[300px] items-center justify-center bg-light-gray text-[11px] text-gray/60">
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
          {product.stockNote ?? t("products.inStock")}
        </p>
        <p className="text-[10.5px] text-gray">{product.delivery}</p>
        <Button size="sm" variant="dark" className="mt-1.5 w-full text-[11px]">
          <ShoppingCart size={13} />
          {t("products.addToCart")}
        </Button>
      </div>
    </div>
  );
}
