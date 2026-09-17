"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface VuMeterProps {
  level: number;
  label: string;
  bootDelay?: number;
}

export default function VuMeter({ level, label, bootDelay = 0 }: VuMeterProps) {
  const needleRef = useRef<SVGLineElement>(null);
  const clamped = Math.min(100, Math.max(0, level));

  useEffect(() => {
    if (!needleRef.current) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const angle = -40 + (clamped / 100) * 80;

    if (reduce) {
      gsap.set(needleRef.current, { rotation: angle, transformOrigin: "50px 58px" });
      return;
    }

    gsap.fromTo(
      needleRef.current,
      { rotation: -40, transformOrigin: "50px 58px" },
      {
        rotation: angle,
        duration: 1.1,
        delay: bootDelay,
        ease: "elastic.out(1, 0.3)",
      },
    );

    const idle = gsap.to(needleRef.current, {
      rotation: `+=${2 + Math.random() * 3}`,
      duration: 0.45 + Math.random() * 0.3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: bootDelay + 1.2,
    });

    return () => {
      idle.kill();
    };
  }, [clamped, bootDelay]);

  return (
    <div className="flex w-full max-w-[140px] flex-col items-center gap-1">
      <div
        className="relative w-full overflow-hidden rounded-md px-1 pt-1"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.88 0.04 95), oklch(0.78 0.05 90))",
          boxShadow:
            "inset 2px 2px 4px oklch(0 0 0 / 0.35), 0 1px 0 oklch(1 0 0 / 0.15)",
          border: "1px solid oklch(0.45 0.02 85)",
        }}
      >
        <svg viewBox="0 0 100 70" className="h-16 w-full">
          <path
            d="M 12 58 A 38 38 0 0 1 88 58"
            fill="none"
            stroke="oklch(0.25 0.02 85)"
            strokeWidth="1.5"
          />
          {[0, 25, 50, 75, 100].map((tick) => {
            const a = ((-40 + (tick / 100) * 80) * Math.PI) / 180;
            const x1 = 50 + Math.sin(a) * 30;
            const y1 = 58 - Math.cos(a) * 30;
            const x2 = 50 + Math.sin(a) * 36;
            const y2 = 58 - Math.cos(a) * 36;
            return (
              <line
                key={tick}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={tick >= 75 ? "oklch(0.55 0.2 25)" : "oklch(0.25 0.02 85)"}
                strokeWidth="1.2"
              />
            );
          })}
          <line
            ref={needleRef}
            x1="50"
            y1="58"
            x2="50"
            y2="22"
            stroke="oklch(0.35 0.08 40)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="50" cy="58" r="3.5" fill="oklch(0.3 0.02 85)" />
        </svg>
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[oklch(0.7_0.03_85)]">
        {label}
      </span>
    </div>
  );
}
