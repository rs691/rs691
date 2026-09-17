"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type LedColor = "amber" | "green" | "red" | "blue";

const COLOR_MAP: Record<LedColor, { core: string; glow: string }> = {
  amber: { core: "oklch(0.82 0.16 75)", glow: "oklch(0.75 0.16 75 / 0.85)" },
  green: { core: "oklch(0.84 0.22 145)", glow: "oklch(0.78 0.2 145 / 0.85)" },
  red: { core: "oklch(0.68 0.22 25)", glow: "oklch(0.62 0.22 25 / 0.9)" },
  blue: { core: "oklch(0.78 0.12 240)", glow: "oklch(0.72 0.12 240 / 0.85)" },
};

interface LedIndicatorProps {
  on?: boolean;
  color?: LedColor;
  label?: string;
  pulse?: boolean;
  size?: "sm" | "md";
  bootDelay?: number;
}

export default function LedIndicator({
  on = true,
  color = "amber",
  label,
  pulse = false,
  size = "md",
  bootDelay = 0,
}: LedIndicatorProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const palette = COLOR_MAP[color];
  const dim = size === "sm" ? "h-2.5 w-2.5" : "h-3.5 w-3.5";

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.set(el, { opacity: 0.15 });

    if (!on) {
      gsap.to(el, { opacity: 0.18, duration: 0.2 });
      return;
    }

    if (reduce) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ delay: bootDelay });
    tl.to(el, { opacity: 1, duration: 0.05 })
      .to(el, { opacity: 0.2, duration: 0.05 })
      .to(el, { opacity: 1, duration: 0.04 })
      .to(el, { opacity: 0.35, duration: 0.06 })
      .to(el, { opacity: 1, duration: 0.12 });

    let pulseTween: gsap.core.Tween | undefined;
    if (pulse) {
      pulseTween = gsap.to(el, {
        opacity: 0.45,
        duration: 0.7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: bootDelay + 0.4,
      });
    }

    return () => {
      tl.kill();
      pulseTween?.kill();
    };
  }, [on, pulse, bootDelay]);

  return (
    <span className="inline-flex items-center gap-2">
      <span
        ref={ref}
        className={`${dim} relative inline-block rounded-full border border-black/60`}
        style={{
          background: on
            ? `radial-gradient(circle at 35% 30%, oklch(0.95 0.05 95), ${palette.core} 55%, oklch(0.35 0.05 60))`
            : "oklch(0.28 0.01 250)",
          boxShadow: on
            ? `0 0 10px ${palette.glow}, inset 0 1px 1px oklch(1 0 0 / 0.45)`
            : "inset 0 1px 2px oklch(0 0 0 / 0.8)",
        }}
        aria-hidden
      >
        <span
          className="absolute left-1/2 top-1/2 h-[35%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35"
          style={{ transform: "translate(-40%, -55%) rotate(-25deg)" }}
        />
      </span>
      {label ? (
        <span className="font-mono text-[10px] uppercase tracking-wider text-[oklch(0.72_0.02_85)]">
          {label}
        </span>
      ) : null}
    </span>
  );
}
