"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, Heart, User, ShoppingCart, Search, ChevronDown, Menu } from "lucide-react";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import { useLocale } from "@/components/LocaleProvider";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { t } = useLocale();

  return (
    // Black at every screen size — only the search input itself is white,
    // matching the reference exactly (was a fully white bar on desktop
    // before, which was wrong).
    <div className="bg-header-black">
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />

      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-3 px-4 lg:h-[90px] lg:gap-6 lg:px-6">
        <button className="text-white lg:hidden" aria-label={t("header.menuOpen")} onClick={() => setNavOpen(true)}>
          <Menu size={26} />
        </button>

        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-2">
            <Logo size={36} />
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold lg:text-lg">
                <span className="text-logo-red">OUTLET</span>{" "}
                <span className="text-logo-gray">MÖBEL</span>
                <span className="ml-1 text-[10px] font-bold text-primary">GmbH</span>
              </p>
              <p className="text-[10px] font-medium tracking-wide text-white/60">{t("header.subtitle")}</p>
            </div>
          </div>
        </Link>

        {/* Desktop search — white pill on the black bar */}
        <div className="hidden h-12 max-w-[620px] flex-1 items-center overflow-hidden rounded-input bg-white lg:flex">
          <button className="flex h-full shrink-0 items-center gap-1 border-l border-border bg-light-gray px-4 text-xs font-medium text-text">
            {t("header.allCategories")}
            <ChevronDown size={14} />
          </button>
          <input
            placeholder={t("header.searchPlaceholder")}
            className="h-full flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-gray"
          />
          <button className="flex h-full shrink-0 items-center bg-primary px-5 text-white hover:bg-primary-dark">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile icon row */}
        <div className="flex flex-1 items-center justify-end gap-4 lg:hidden">
          <button aria-label={t("header.compare")} className="text-white">
            <Search size={22} />
          </button>
          <button aria-label={t("header.wishlist")} className="relative text-white">
            <Heart size={22} />
          </button>
          <button aria-label={t("header.cart")} className="relative text-white">
            <ShoppingCart size={22} />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white">
              0
            </span>
          </button>
        </div>

        {/* Desktop icon row — white text/icons on the black bar */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <IconWithBadge icon={Scale} label={t("header.compare")} count={2} />
          <IconWithBadge icon={Heart} label={t("header.wishlist")} count={0} />
          <button className="hidden flex-col items-center gap-1 text-white lg:flex" aria-label={t("header.account")}>
            <User size={20} />
            <span className="text-[10px] font-medium">{t("header.account")}</span>
          </button>
          <IconWithBadge icon={ShoppingCart} label={t("header.cart")} count={0} highlight />
        </div>
      </div>

      {/* Mobile search — white pill floating on the same black background
         as the header (one continuous dark area). */}
      <div className="bg-header-black px-4 pb-3 lg:hidden">
        <div
          className="flex h-[52px] items-center gap-2 rounded-[30px] border border-border bg-white px-4"
          style={{ boxShadow: "0 8px 20px rgba(0,0,0,.08)" }}
        >
          <input
            placeholder={t("header.searchPlaceholderShort")}
            className="h-full flex-1 bg-transparent text-sm outline-none placeholder:text-gray"
          />
          <Search size={17} className="shrink-0 text-gray" />
        </div>
      </div>
    </div>
  );
}

function IconWithBadge({
  icon: Icon,
  label,
  count,
  highlight,
}: {
  icon: typeof Heart;
  label: string;
  count: number;
  highlight?: boolean;
}) {
  return (
    <button className="relative hidden flex-col items-center gap-1 text-white lg:flex" aria-label={label}>
      <Icon size={20} />
      {count > 0 && (
        <span
          className={`absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white ${
            highlight ? "bg-primary" : "bg-white/20"
          }`}
        >
          {count}
        </span>
      )}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
