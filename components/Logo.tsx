// Recreated per the precise brand spec provided by the client's
// designer: a charcoal badge containing a thick ring ("o", split
// red/light-gray) with a small white accent ellipse at the
// letter-connection point, next to a rounded "n" shape — plus a thin
// outer stroke and soft shadow. Exact hex values honored below.
const COLORS = {
  background: "#1F1C1D",
  red: "#D61E28",
  white: "#EAEAEA",
  border: "#4A4A4A",
};

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,.35))" }}
    >
      {/* Charcoal badge background */}
      <rect x="1" y="1" width="98" height="98" rx="22" fill={COLORS.background} stroke={COLORS.border} strokeWidth="2" />

      {/* "o" — thick ring, split red (left ~60%) / light gray (right ~40%) */}
      <path
        d="M38 24a26 26 0 1 0 0 52 26 26 0 0 0 18.4-44.4A25.9 25.9 0 0 0 38 24Z"
        fill={COLORS.red}
      />
      <path
        d="M38 24a26 26 0 0 1 18.4 7.6A26 26 0 0 1 38 76a25.9 25.9 0 0 1-9-1.6A26 26 0 0 0 38 24Z"
        fill={COLORS.white}
      />
      {/* hollow center of the ring, matching the badge background */}
      <circle cx="38" cy="50" r="15.5" fill={COLORS.background} />

      {/* "n" — thick rounded stroke */}
      <path
        d="M64 76V38a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a13 13 0 0 1 20 11v24"
        stroke={COLORS.white}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* white accent ellipse at the letter-connection point */}
      <ellipse cx="52" cy="30" rx="7" ry="5" fill={COLORS.white} />
    </svg>
  );
}
