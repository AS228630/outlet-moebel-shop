// Recreates the real Outlet Möbel logo — a circular red-and-white "om"
// monogram — as an SVG, since no source logo file (SVG/PNG) was
// provided, only a photo of a printed business card. Built to match
// that photo's proportions and colors as closely as possible; swap
// this for the official vector file if/when the company provides one.
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#C31924" />
      <path
        d="M50 14a36 36 0 1 0 25.5 61.5A22 22 0 1 1 50 36a22 22 0 0 1 15.5 6.3A36 36 0 0 0 50 14Z"
        fill="white"
      />
      <circle cx="34" cy="50" r="14" fill="#C31924" />
    </svg>
  );
}
