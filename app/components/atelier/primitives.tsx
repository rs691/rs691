"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.32, 0.72, 0, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 48, filter: "blur(8px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: reduce ? 0 : 0.85, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Bezel({
  children,
  className = "",
  coreClassName = "",
}: {
  children: ReactNode;
  className?: string;
  coreClassName?: string;
}) {
  return (
    <div className={`bezel-shell h-full ${className}`}>
      <div className={`bezel-core h-full ${coreClassName}`}>{children}</div>
    </div>
  );
}

export function IslandButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  const solid = variant === "dark";
  return (
    <a
      href={href}
      className={`group inline-flex min-h-11 items-center gap-3 rounded-full py-3 pl-6 pr-2 text-sm font-semibold tracking-tight transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${
        solid
          ? "bg-ink text-inverse hover:opacity-90"
          : "bg-surface text-ink ring-1 ring-hairline hover:bg-soft/60"
      }`}
    >
      <span>{children}</span>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 ${
          solid ? "bg-inverse/15" : "bg-chip"
        }`}
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
