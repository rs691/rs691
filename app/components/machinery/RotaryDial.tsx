"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface RotaryDialProps {
  value: number;
  max: number;
  onChange: (next: number) => void;
  label: string;
  size?: number;
}

export default function RotaryDial({
  value,
  max,
  onChange,
  label,
  size = 72,
}: RotaryDialProps) {
  const knobRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const lastY = useRef(0);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
    if (!knobRef.current) return;
    const angle = (value / Math.max(max, 1)) * 270 - 135;
    gsap.to(knobRef.current, {
      rotation: angle,
      duration: 0.28,
      ease: "power2.out",
      overwrite: true,
    });
  }, [value, max]);

  useEffect(() => {
    const onMove = (clientY: number) => {
      if (!dragging.current) return;
      const delta = lastY.current - clientY;
      if (Math.abs(delta) < 14) return;
      const dir = delta > 0 ? 1 : -1;
      lastY.current = clientY;
      const next = Math.min(max, Math.max(0, valueRef.current + dir));
      if (next !== valueRef.current) {
        valueRef.current = next;
        onChange(next);
        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
          navigator.vibrate(8);
        }
      }
    };

    const onPointerMove = (e: PointerEvent) => onMove(e.clientY);
    const onPointerUp = () => {
      dragging.current = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [max, onChange]);

  const diameter = Math.max(size, 52);

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div
        className="relative touch-none"
        style={{ width: diameter, height: diameter }}
        onPointerDown={(e) => {
          e.preventDefault();
          dragging.current = true;
          lastY.current = e.clientY;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onWheel={(e) => {
          e.preventDefault();
          const dir = e.deltaY > 0 ? 1 : -1;
          const next = Math.min(max, Math.max(0, valueRef.current + dir));
          if (next !== valueRef.current) onChange(next);
        }}
        role="slider"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            e.preventDefault();
            onChange(Math.min(max, value + 1));
          }
          if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            e.preventDefault();
            onChange(Math.max(0, value - 1));
          }
        }}
      >
        {/* Chassis recess */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, oklch(0.28 0.01 250), oklch(0.16 0.01 250))",
            boxShadow:
              "inset 2px 2px 5px oklch(0 0 0 / 0.85), inset -1px -1px 2px oklch(1 0 0 / 0.08), 0 1px 0 oklch(1 0 0 / 0.12)",
          }}
        />
        {/* Knurled knob */}
        <div
          ref={knobRef}
          className="absolute inset-[10%] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.42 0.01 250), oklch(0.55 0.01 250), oklch(0.38 0.01 250), oklch(0.52 0.01 250), oklch(0.42 0.01 250))",
            boxShadow:
              "0 6px 14px oklch(0 0 0 / 0.55), inset 1px 1px 0 oklch(1 0 0 / 0.35), inset -2px -3px 4px oklch(0 0 0 / 0.55)",
            border: "1px solid oklch(0.3 0.01 250)",
          }}
        >
          <div
            className="absolute left-1/2 top-[12%] h-[28%] w-[10%] -translate-x-1/2 rounded-full"
            style={{
              background: "oklch(0.82 0.16 75)",
              boxShadow: "0 0 8px oklch(0.75 0.16 75 / 0.7)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, oklch(0.5 0.01 250), oklch(0.22 0.01 250))",
              boxShadow: "inset 1px 1px 2px oklch(1 0 0 / 0.2)",
            }}
          />
        </div>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[oklch(0.7_0.03_85)]">
        {label}
      </span>
    </div>
  );
}
