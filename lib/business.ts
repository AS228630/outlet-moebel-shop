// Real business info, verified directly against the Google Business
// listing for "Outlet Möbel Weilbach" — do not invent or approximate
// any of these values; update this file if the real listing changes.
export const BUSINESS = {
  addressLine: "Weckbacherstrasse 12, 63937 Weilbach",
  phoneMain: "+49 9373 57 89 916",
  phoneSecondary: "+49 176 222 55 915",
  phoneMobile: "+49 175 5268479",
  whatsappNumber: "491755268479", // digits only, no +, for wa.me links
  email: "mail@om-moebel.de",
  hoursWeekday: "Mo - Fr: 09:00 - 18:00 Uhr",
  hoursSaturday: "Sa: 09:00 - 16:00 Uhr",
  googleRating: 4.4,
  googleReviewCount: 66,
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${BUSINESS.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
