// Leichter Sternenhimmel — deterministische Positionen (kein Random → kein
// Hydration-Mismatch), reine CSS-Punkte statt WebGL.

const frac = (n: number) => {
  const v = Math.sin(n) * 43758.5453;
  return v - Math.floor(v);
};

const STARS = Array.from({ length: 70 }, (_, i) => ({
  top: frac(i * 1.3) * 100,
  left: frac(i * 2.7 + 1) * 100,
  size: 1 + frac(i * 3.1) * 2,
  delay: frac(i * 4.9) * 5,
  opacity: 0.25 + frac(i * 5.5) * 0.6,
}));

export default function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
