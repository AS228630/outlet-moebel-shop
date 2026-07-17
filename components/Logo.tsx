// Real Outlet Möbel monogram: a red ring forming the "O", interlocked
// with a white "M" (outlined in black) forming the second half of the
// mark — per the client-provided brand spec. No background badge/card
// here (transparent), matching how the icon appears standalone next to
// the wordmark in the header/footer.
const COLORS = {
  red: "#D91F26",
  white: "#FFFFFF",
  outline: "#111111",
};

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* "O" — thick red ring */}
      <circle cx="38" cy="50" r="30" fill={COLORS.red} />
      <circle cx="38" cy="50" r="17" fill="white" />

      {/* "M" — white letterform with a black outline, overlapping the
         right side of the O */}
      <path
        d="M52 74V32a3 3 0 0 1 3-3h3a3 3 0 0 1 2.6 1.5L68 47l7.4-16.5A3 3 0 0 1 78 29h3a3 3 0 0 1 3 3v42"
        stroke={COLORS.outline}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M52 74V32a3 3 0 0 1 3-3h3a3 3 0 0 1 2.6 1.5L68 47l7.4-16.5A3 3 0 0 1 78 29h3a3 3 0 0 1 3 3v42"
        stroke={COLORS.white}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
