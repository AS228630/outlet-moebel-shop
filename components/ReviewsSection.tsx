"use client";

import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { useLocale } from "@/components/LocaleProvider";

// Placeholder testimonials for the design demo — real reviews should be
// pulled from the actual Google Business listing once connected.

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.93z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const { t } = useLocale();

  const REVIEWS = [
    { name: "Maria L.", time: t("review.maria.time"), text: t("review.maria.text"), delivery: t("product.delivery24") },
    { name: "Ahmet Y.", time: t("review.ahmet.time"), text: t("review.ahmet.text"), delivery: t("product.delivery34") },
    { name: "Thomas R.", time: t("review.thomas.time"), text: t("review.thomas.text"), delivery: t("product.delivery24") },
  ];

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-xl font-extrabold text-dark">{t("reviews.title")}</h2>
        <div className="flex items-center gap-2">
          <GoogleLogo />
          <span className="text-sm font-bold text-dark">{BUSINESS.googleRating}</span>
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
          <span className="text-xs text-gray">{BUSINESS.googleReviewCount} {t("reviews.count")}</span>
          <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mr-2 text-xs font-semibold text-primary hover:underline">
            {t("reviews.viewAll")} →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rounded-card border border-border bg-white p-5 shadow-card">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-dark">{r.name}</p>
                <p className="text-[10.5px] text-gray">{r.time}</p>
              </div>
            </div>
            <span className="mb-2 flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <p className="text-xs leading-relaxed text-text">{r.text}</p>
            <p className="mt-3 text-[10.5px] text-gray">{r.delivery}</p>
            <div className="mt-2 flex items-center gap-1">
              <GoogleLogo />
              <span className="text-[10px] text-gray">Google</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
