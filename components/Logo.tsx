import Image from "next/image";

// Real logo, cropped directly from the client's business card photo
// (with the black background made transparent) — hand-drawn SVG
// recreations were consistently getting the shape wrong across several
// attempts, so this uses the actual photo instead. Replace with the
// official vector file if/when the company provides one.
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Outlet Möbel Logo"
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      priority
    />
  );
}
