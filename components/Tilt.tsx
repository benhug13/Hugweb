"use client";

import { useRef, type ReactNode } from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** maximale Neigung in Grad */
  max?: number;
};

// Leichter 3D-Tilt bei Mausbewegung — reine CSS-Transforms, kein WebGL.
export default function Tilt({ children, className, max = 7 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-py * max}deg) rotateY(${px * max}deg) scale(1.02)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: "transform 0.25s ease-out", transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
