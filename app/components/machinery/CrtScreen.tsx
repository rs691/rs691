"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

interface CrtScreenProps {
  title: string;
  children: ReactNode;
  live?: boolean;
  className?: string;
}

export default function CrtScreen({
  title,
  children,
  live = false,
  className = "",
}: CrtScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!screenRef.current) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.fromTo(
      screenRef.current,
      { opacity: 0.15, filter: "brightness(0.4)" },
      {
        opacity: 1,
        filter: "brightness(1)",
        duration: 0.9,
        ease: "power2.out",
        delay: 0.35,
      },
    );
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        background:
          "linear-gradient(145deg, oklch(0.28 0.01 250), oklch(0.18 0.01 250))",
        boxShadow:
          "0 10px 28px oklch(0 0 0 / 0.55), inset 1px 1px 0 oklch(1 0 0 / 0.12), inset -2px -3px 6px oklch(0 0 0 / 0.55)",
        border: "2px solid oklch(0.32 0.01 250)",
      }}
    >
      <div
        className="flex items-center justify-between border-b px-3 py-2"
        style={{
          borderColor: "oklch(0.25 0.01 250)",
          background: "oklch(0.2 0.01 250)",
        }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.72_0.03_85)]">
          {title}
        </span>
        {live ? (
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-[oklch(0.82_0.18_145)]">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{
                background: "oklch(0.82 0.18 145)",
                boxShadow: "0 0 8px oklch(0.82 0.18 145)",
              }}
            />
            LIVE
          </span>
        ) : null}
      </div>

      <div
        ref={screenRef}
        className="relative min-h-[180px] p-4"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.22 0.04 145 / 0.35), oklch(0.12 0.02 145) 70%)",
          boxShadow: "inset 2px 2px 8px oklch(0 0 0 / 0.85)",
          color: "oklch(0.86 0.14 145)",
        }}
      >
        {/* Scanlines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0 0 0 / 0.28) 2px, oklch(0 0 0 / 0.28) 4px)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, oklch(0 0 0 / 0.55) 100%)",
          }}
        />
        <div className="relative z-10 font-mono text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
