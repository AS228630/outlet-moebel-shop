# Outlet Möbel GmbH — Online-Shop

فروشگاه آنلاین مبلمان برای شرکت واقعی Outlet Möbel GmbH (Weckbacherstrasse 12, 63937 Wertheim, Deutschland).

## پشته‌ی فنی

- **Next.js 16** (App Router) + **React** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config در `app/globals.css`)
- کامپوننت‌های پایه به سبک **shadcn/ui** (دستی ساخته شده — CLI نیاز به دسترسی به `ui.shadcn.com` داره که در محیط توسعه در دسترس نبود)
- **Framer Motion** برای انیمیشن
- **Lucide React** برای آیکون‌ها
- فونت‌ها self-hosted از طریق `@fontsource/manrope` و `@fontsource/inter` (نه `next/font/google`، چون به شبکه‌ی Google Fonts دسترسی نبود)

## هویت بصری (Design Tokens)

تمام توکن‌های رنگ، فونت، radius، و سایه در `app/globals.css` تعریف شدن:

| توکن | مقدار |
|---|---|
| رنگ اصلی | `#C31924` |
| تیره | `#111111` |
| متن | `#2B2B2B` |
| خاکستری | `#6B7280` |
| خاکستری روشن | `#F5F5F5` |
| فونت تیتر | Manrope (700/800) |
| فونت متن | Inter (400/500/600) |
| Radius دکمه | 14px |
| Radius کارت | 20px |
| Radius اینپوت | 12px |

## نصب و اجرا

```bash
npm install
npm run dev
```

## وضعیت فعلی

- [x] اسکلت پروژه (Next.js + TypeScript + Tailwind)
- [x] سیستم طراحی (رنگ‌ها، فونت‌ها، radius، سایه)
- [x] کامپوننت‌های پایه (Button، Card)
- [x] Header با ناوبری و لوگو
- [x] بخش Hero صفحه‌ی اصلی
- [ ] بقیه‌ی صفحات (دسته‌بندی محصولات، صفحه‌ی محصول، سبد خرید، چک‌اوت)
- [ ] اتصال به دیتابیس (PostgreSQL + Prisma)
- [ ] احراز هویت
- [ ] پرداخت (Stripe)
- [ ] CMS محصولات

برای جزئیات کامل معماری و برنامه‌ریزی، به بخش ۱۳ فایل `PROJECT_GUIDE.md` در مخزن پروژه‌ی CertCoach مراجعه کنید (این پروژه به‌عنوان یک پروژه‌ی جدا مستند شده، اما تاریخچه‌ی تصمیمات اونجا ثبت شده).
