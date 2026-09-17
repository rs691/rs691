"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const ease = [0.32, 0.72, 0, 1] as const;

export default function IslandNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center px-4 pt-6">
        <nav className="island-nav pointer-events-auto flex w-max max-w-[calc(100%-2rem)] items-center gap-1 rounded-full px-2 py-2">
          <a
            href="#top"
            className="rounded-full px-4 py-2 text-sm font-semibold tracking-tight text-ink transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            RS
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[13px] font-medium text-mute transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle className="ml-0.5" />

          <a
            href="mailto:rms.dev@outlook.com"
            className="ml-0.5 hidden rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-inverse transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] md:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Email
          </a>

          <button
            type="button"
            className="relative ml-0.5 flex h-11 w-11 items-center justify-center rounded-full md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute h-px w-4 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="menu-overlay fixed inset-0 z-20 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.45, ease }}
          >
            <div className="flex min-h-[100dvh] flex-col justify-end px-6 pb-16 pt-28">
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm font-medium text-mute">Appearance</p>
                <ThemeToggle />
              </div>
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-5 font-display text-3xl font-semibold tracking-tight text-ink"
                  initial={
                    reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{
                    duration: reduce ? 0 : 0.55,
                    delay: reduce ? 0 : 0.08 + i * 0.05,
                    ease,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
