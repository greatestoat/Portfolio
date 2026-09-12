export default function CircuitLines() {
  return (
    <>
      <div
        aria-hidden
        className="parallax-bg pointer-events-none fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat opacity-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=2400&q=85'), url('/japanese-castle-background.svg')",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,rgba(3,3,5,0.78)_0%,rgba(3,3,5,0.48)_45%,rgba(3,3,5,0.82)_100%)]"
      />
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.18]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#ff2b3d" strokeWidth="1">
          <path className="circuit-trace" d="M0 120 H260 L300 160 V400 L340 440 H620" />
          <path className="circuit-trace" d="M1440 200 H1180 L1140 240 V500 L1100 540 H820" />
          <path className="circuit-trace" d="M0 780 H180 L220 740 V600" />
          <path className="circuit-trace" d="M1440 700 H1260 L1220 660 V520" />
          <path className="circuit-trace" d="M100 0 V80 L140 120" />
          <path className="circuit-trace" d="M1340 900 V800 L1300 760" />
        </g>
        <g fill="#ff2b3d">
          <circle cx="300" cy="160" r="3" />
          <circle cx="340" cy="440" r="3" />
          <circle cx="1140" cy="240" r="3" />
          <circle cx="1100" cy="540" r="3" />
          <circle cx="220" cy="740" r="3" />
          <circle cx="1220" cy="660" r="3" />
        </g>
      </svg>
    </>
  );
}
