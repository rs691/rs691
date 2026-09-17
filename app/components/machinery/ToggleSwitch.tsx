"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ToggleSwitchProps {
  on: boolean;
  onToggle: () => void;
  label: string;
  guarded?: boolean;
}

export default function ToggleSwitch({
  on,
  onToggle,
  label,
  guarded = false,
}: ToggleSwitchProps) {
  const leverRef = useRef<HTMLDivElement>(null);
  const guardRef = useRef<HTMLDivElement>(null);
  const guardOpen = useRef(false);

  useEffect(() => {
    if (!leverRef.current) return;
    gsap.to(leverRef.current, {
      y: on ? -10 : 10,
      duration: 0.18,
      ease: "power2.inOut",
      overwrite: true,
    });
  }, [on]);

  const flip = () => {
    if (guarded && !guardOpen.current && guardRef.current) {
      guardOpen.current = true;
      gsap.to(guardRef.current, {
        rotateX: -110,
        duration: 0.28,
        ease: "power2.out",
        transformOrigin: "top center",
      });
      return;
    }
    onToggle();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={flip}
        className="relative flex h-14 w-11 min-h-11 min-w-11 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.82_0.16_75)]"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.32 0.01 250), oklch(0.2 0.01 250))",
          boxShadow:
            "inset 2px 2px 4px oklch(0 0 0 / 0.7), inset -1px -1px 0 oklch(1 0 0 / 0.1), 0 2px 4px oklch(0 0 0 / 0.4)",
          perspective: "400px",
        }}
        aria-pressed={on}
        aria-label={label}
      >
        {guarded ? (
          <div
            ref={guardRef}
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-full rounded-sm"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.75 0.04 220 / 0.35), oklch(0.6 0.03 220 / 0.15))",
              border: "1px solid oklch(0.85 0.04 220 / 0.35)",
              backdropFilter: "blur(1px)",
              transformStyle: "preserve-3d",
            }}
          />
        ) : null}
        <div
          ref={leverRef}
          className="relative z-10 h-7 w-5 rounded-sm"
          style={{
            background: on
              ? "linear-gradient(180deg, oklch(0.78 0.16 75), oklch(0.55 0.14 65))"
              : "linear-gradient(180deg, oklch(0.55 0.01 250), oklch(0.35 0.01 250))",
            boxShadow:
              "0 3px 6px oklch(0 0 0 / 0.55), inset 1px 1px 0 oklch(1 0 0 / 0.35), inset -1px -2px 2px oklch(0 0 0 / 0.35)",
          }}
        />
      </button>
      <span className="max-w-16 text-center font-mono text-[9px] uppercase leading-tight tracking-wider text-[oklch(0.7_0.03_85)]">
        {label}
      </span>
    </div>
  );
}
