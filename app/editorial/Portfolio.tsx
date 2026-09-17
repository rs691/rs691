"use client";

import { motion, useReducedMotion } from "framer-motion";
import NetworkMesh from "./NetworkMesh";

const ease = [0.16, 1, 0.3, 1] as const;

const STATS = [
  {
    value: "1,000+",
    label: "Concurrent users on AWS ECS",
    detail: "Production multi-tenant mobile platform under regional load",
  },
  {
    value: "35%",
    label: "Faster tenant setup",
    detail: "Automated onboarding across shared Flutter and Node services",
  },
  {
    value: "ORM-layer",
    label: "Tenant isolation",
    detail: "EF Core global query filters — isolation at the data boundary",
  },
];

const PROJECTS = [
  {
    name: "YourOpoly",
    span: "wide" as const,
    stack: "Flutter · Node.js · MySQL · AWS ECS · Redis · Socket.io · Gemini",
    summary:
      "Community rewards platform live on the App Store and Google Play — QR check-ins, map discovery, leaderboards, and a Gemini-backed player agent with Redis-cached activity paths.",
    links: [
      {
        href: "https://apps.apple.com/us/app/youropoly/id6759983671",
        label: "App Store",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.neil.chamberopoly",
        label: "Google Play",
      },
    ],
  },
  {
    name: "Multi-Product Admin",
    span: "narrow" as const,
    stack: "Node.js · React / Next.js · MySQL · AWS",
    summary:
      "Central console for YourOpoly and Good Life Bingo — privileged ops separated from tenant self-service, with shared backends and zero cross-tenant leakage.",
    links: [],
  },
  {
    name: "E-Commerce with pgvector RAG",
    span: "wide" as const,
    stack: "Next.js 15 · Supabase · PostgreSQL · Stripe · Vercel AI SDK",
    summary:
      "Storefront with Stripe Checkout, RLS-backed data models, and AI design copilots using pgvector RAG plus server-side tool calling — gated by automated contract evals in CI.",
    links: [],
  },
];

export default function Portfolio() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease },
    },
  };

  return (
    <motion.div
      className="editorial-root relative min-h-screen bg-ink text-mist"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklch, oklch(0.7 0.05 250) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklch, oklch(0.7 0.05 250) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black, transparent)",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <motion.a
          href="/"
          variants={item}
          className="font-display text-xl font-bold tracking-tight text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          Robert Stewart
        </motion.a>
        <motion.nav
          variants={item}
          className="flex items-center gap-6 text-sm font-medium"
        >
          <a
            href="#work"
            className="text-mist transition-colors hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          >
            Work
          </a>
          <a
            href="mailto:rms.dev@outlook.com"
            className="rounded-full bg-chalk px-4 py-2 text-ink transition-colors hover:bg-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          >
            Contact
          </a>
        </motion.nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-8 md:px-10 lg:grid-cols-12 lg:gap-6 lg:pb-28 lg:pt-16">
        <motion.div variants={item} className="lg:col-span-7 space-y-7">
          <p className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-none tracking-tight text-chalk">
            Robert Stewart
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5.8vw,4.4rem)] font-extrabold leading-[0.95] tracking-tight text-signal">
            Multi-Tenant Systems &amp; AI Orchestration
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-mist md:text-xl">
            Full-stack engineer designing production platforms end to end —
            mobile clients, REST and real-time backends, tenant isolation, and
            event-driven AI agents shipping live on iOS and Android.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chalk"
            >
              View selected work
            </a>
            <a
              href="https://github.com/rs691"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-mist underline decoration-flare/40 underline-offset-4 transition-colors hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              github.com/rs691
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="relative lg:col-span-5 h-[340px] sm:h-[420px] lg:h-[520px]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl glow-border bg-panel/40">
            <NetworkMesh />
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={item}
        className="relative z-10 border-y border-[color:var(--border-glow)] bg-panel/50"
        aria-label="Infrastructure scale"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-10 md:px-10 md:py-14 ${
                index < STATS.length - 1
                  ? "border-b border-[color:var(--border-glow)] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="font-display text-4xl font-extrabold tracking-tight text-chalk md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-base font-semibold text-signal">
                {stat.label}
              </div>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-mist">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <section
        id="work"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      >
        <motion.h2
          variants={item}
          className="font-display text-3xl font-bold tracking-tight text-chalk md:text-4xl"
        >
          Selected systems
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-3 max-w-2xl text-base leading-relaxed text-mist md:text-lg"
        >
          Uneven layouts for uneven problems — production mobile scale,
          multi-product admin isolation, and AI paths treated like tested code.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {PROJECTS.map((project, index) => {
            const isWide = project.span === "wide";
            const colClass =
              index === 0
                ? "lg:col-span-8"
                : index === 1
                  ? "lg:col-span-4"
                  : "lg:col-span-12";

            return (
              <motion.article
                key={project.name}
                variants={item}
                className={`${colClass} ${
                  isWide ? "glass-panel rounded-2xl p-7 md:p-9" : "brutal-edge bg-panel p-7 md:p-8"
                }`}
              >
                <h3 className="font-display text-2xl font-bold text-chalk md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-xs font-medium tracking-wide text-flare md:text-sm">
                  {project.stack}
                </p>
                <p
                  className={`mt-5 leading-relaxed text-mist ${
                    isWide ? "max-w-2xl text-base md:text-lg" : "text-sm md:text-base"
                  }`}
                >
                  {project.summary}
                </p>
                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[color:var(--border-glow-strong)] px-3 py-1.5 text-xs font-semibold text-signal transition-colors hover:bg-signal hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      <motion.footer
        variants={item}
        className="relative z-10 border-t border-[color:var(--border-glow)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="font-display text-2xl font-bold text-chalk">
              Robert Stewart
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
              Open to remote full-stack and platform roles. M.S. Data Science in
              progress at Bellevue University.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium">
            <a
              href="mailto:rms.dev@outlook.com"
              className="text-signal hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              rms.dev@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/robert-stewart-m"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              LinkedIn
            </a>
            <a
              href="/"
              className="hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Current
            </a>
            <a
              href="/machinery"
              className="hover:text-chalk focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Machinery
            </a>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
