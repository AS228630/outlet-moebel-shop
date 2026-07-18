// Real business info. Sources: Google Business listing, official
// Handelsregister lookup (viaductus.de, confirmed against the
// company's own Facebook page), and the client directly — do not
// invent or approximate any of these values; update this file if the
// real listing changes.
export const BUSINESS = {
  legalName: "OM Outlet Möbel GmbH",
  addressLine: "Weckbacherstrasse 12, 63937 Weilbach",
  phoneMain: "+49 9373 57 89 916",
  phoneSecondary: "+49 176 222 55 915",
  phoneMobile: "+49 175 5268479",
  whatsappNumber: "491755268479", // digits only, no +, for wa.me links
  email: "mail@om-moebel.de",
  // Corrected against the real Google Business listing (was wrong before)
  hoursWeekday: "Mo - Fr: 10:00 - 18:00 Uhr",
  hoursSaturday: "Sa: 10:00 - 17:00 Uhr",
  hoursSunday: "So: Geschlossen",
  googleRating: 4.4,
  googleReviewCount: 66,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=OM+Outlet+M%C3%B6bel+GmbH+Weckbacherstrasse+12+63937+Weilbach",
  facebookUrl: "https://www.facebook.com/share/19gA8Ucckq/",
  instagramUrl: "https://www.instagram.com/outletmobel_gmbh",
  tiktokUrl: "https://www.tiktok.com/@outletmobel",
  // Confirmed via the official Handelsregister (Amtsgericht Aschaffenburg,
  // HRB 16403) and the company's own Facebook page listing the owner
  geschaeftsfuehrer: "Hasim Savli",
  registergericht: "Amtsgericht Aschaffenburg",
  registernummer: "HRB 16403",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${BUSINESS.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
