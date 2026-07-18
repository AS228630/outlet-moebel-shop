import Image from "next/image";

// Real logo, cropped directly from the client's business card photo
// (with the black background made transparent) — hand-drawn SVG
// recreations were consistently getting the shape wrong across several
// attempts, so this uses the actual photo instead. Replace with the
// official vector file if/when the company provides one.
//
// The source image is NOT square (~1.65:1) — forcing it into a square
// box previously caused a visible white letterboxing artifact (a
// horizontal band above the icon). Sizing by height and letting width
// follow the real aspect ratio avoids that entirely.
const ASPECT_RATIO = 896 / 540;

export default function Logo({ size = 40 }: { size?: number }) {
  const height = size;
  const width = Math.round(size * ASPECT_RATIO);
  return (
    <Image
      src="/images/logo.png"
      alt="Outlet Möbel Logo"
      width={width}
      height={height}
      priority
    />
  );
}
