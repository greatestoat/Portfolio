export default function ScanlineOverlay() {
  return (
    <div
      aria-hidden
      className="scanline-overlay pointer-events-none fixed inset-0 z-40 opacity-[0.06]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 3px)",
      }}
    />
  );
}
