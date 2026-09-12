export default function CornerBrackets({ color = "crimson" }: { color?: "crimson" | "cyan" }) {
  const stroke = color === "cyan" ? "#3ee6e0" : "#ff2b3d";
  const corners = [
    "top-0 left-0",
    "top-0 right-0 rotate-90",
    "bottom-0 right-0 rotate-180",
    "bottom-0 left-0 -rotate-90",
  ];

  return (
    <>
      {corners.map((pos) => (
        <svg
          key={pos}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`pointer-events-none absolute ${pos} opacity-70`}
        >
          <path d="M1 8V1H8" stroke={stroke} strokeWidth="1.5" />
        </svg>
      ))}
    </>
  );
}
