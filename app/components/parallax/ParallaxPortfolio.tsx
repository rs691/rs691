"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import IslandNav from "../atelier/IslandNav";
import { IslandButton } from "../atelier/primitives";
import {
  EDUCATION,
  EXPERIENCE,
  HONORS,
  PROFILE,
  PROJECTS,
  SKILLS,
  STATS,
} from "@/app/data/resume";

const CHAPTERS = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

function useParallax(
  value: MotionValue<number>,
  distance: number,
  reduce: boolean | null,
) {
  return useTransform(value, [0, 1], reduce ? [0, 0] : [-distance, distance]);
}

function Chapter({
  id,
  index,
  eyebrow,
  title,
  children,
  heightClass = "h-[180vh] md:h-[200vh]",
  scrollable = false,
}: {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  children: ReactNode;
  heightClass?: string;
  scrollable?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const bgY = useParallax(smooth, 120, reduce);
  const midY = useParallax(smooth, 60, reduce);
  const contentY = useTransform(
    smooth,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [40, 0, -40],
  );
  const contentOpacity = useTransform(
    smooth,
    [0, 0.12, 0.78, 1],
    reduce ? [1, 1, 1, 1] : [0.15, 1, 1, 0.2],
  );
  const scale = useTransform(
    smooth,
    [0, 0.2, 0.8, 1],
    reduce ? [1, 1, 1, 1] : [0.96, 1, 1, 0.98],
  );
  const orbX = useTransform(
    smooth,
    [0, 1],
    reduce ? ["0%", "0%"] : index % 2 === 0 ? ["-8%", "10%"] : ["10%", "-8%"],
  );

  return (
    <section id={id} ref={ref} className={`relative ${heightClass}`}>
      <div
        className={`sticky top-0 flex min-h-[100dvh] overflow-hidden ${
          scrollable ? "items-start overflow-y-auto" : "items-center"
        }`}
      >
        {/* Depth layers */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ y: bgY }}
        >
          <div
            className="absolute -left-1/4 top-1/4 h-[55vmax] w-[55vmax] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                index % 2 === 0
                  ? "radial-gradient(circle, oklch(0.75 0.06 250 / 0.35), transparent 70%)"
                  : "radial-gradient(circle, oklch(0.72 0.08 180 / 0.28), transparent 70%)",
            }}
          />
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ y: midY, x: orbX }}
        >
          <div
            className="absolute right-[-10%] top-[20%] h-[40vmax] w-[40vmax] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.7 0.05 40 / 0.25), transparent 70%)",
            }}
          />
          <div className="absolute bottom-[10%] left-[15%] h-32 w-32 rounded-full border border-hairline opacity-40" />
          <div className="absolute right-[20%] top-[35%] h-48 w-48 rounded-[2rem] border border-hairline opacity-30" />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 md:px-8"
          style={{ y: contentY, opacity: contentOpacity, scale }}
        >
          <p className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            {eyebrow}
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-6xl">
            {title}
          </h2>
          <div className="mt-10 md:mt-14">{children}</div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
          {String(index + 1).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 md:block lg:right-8">
      <div className="relative h-40 w-px overflow-hidden rounded-full bg-hairline">
        <motion.div
          className="absolute inset-x-0 top-0 origin-top bg-ink"
          style={{ scaleY, height: "100%" }}
        />
      </div>
      <nav className="pointer-events-auto mt-6 flex flex-col gap-3" aria-label="Chapters">
        {CHAPTERS.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="block text-right font-mono text-[9px] uppercase tracking-[0.18em] text-mute transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {chapter.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function ParallaxPortfolio() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 180],
  );
  const heroCopyY = useTransform(
    heroProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 100],
  );
  const heroFade = useTransform(
    heroProgress,
    [0, 0.65],
    reduce ? [1, 1] : [1, 0],
  );
  const heroOrbY = useTransform(
    heroProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -160],
  );

  return (
    <div className="relative bg-canvas text-ink">
      <div className="atelier-grain" aria-hidden />
      <IslandNav />
      <ProgressRail />

      {/* 01 Hero */}
      <section
        id="top"
        ref={heroRef}
        className="relative flex min-h-[140vh] items-start overflow-hidden"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ y: heroOrbY }}
        >
          <div
            className="absolute left-[10%] top-[20%] h-[50vmax] w-[50vmax] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.05 250 / 0.35), transparent 68%)",
            }}
          />
          <div
            className="absolute bottom-[5%] right-[5%] h-[35vmax] w-[35vmax] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.8 0.07 160 / 0.22), transparent 70%)",
            }}
          />
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-40 pt-36 md:px-8 md:pt-44"
          style={{ opacity: heroFade }}
        >
          <motion.div style={{ y: heroTitleY }}>
            <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
              Full-Stack Software Engineer
            </span>
            <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink">
              {PROFILE.name}
            </h1>
          </motion.div>
          <motion.div style={{ y: heroCopyY }} className="mt-8">
            <p className="max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
              Multi-tenant systems, real-time backends, and AI orchestration —
              shipping live on the App Store and Google Play from{" "}
              {PROFILE.location}.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <IslandButton href="#work">View selected work</IslandButton>
              <IslandButton href={`mailto:${PROFILE.email}`} variant="light">
                Start a conversation
              </IslandButton>
            </div>
            <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
              Scroll · parallax chapters
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 02 About */}
      <Chapter
        id="about"
        index={1}
        eyebrow="About"
        title="Production systems with tenant isolation at every layer."
      >
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-mute md:text-xl">
              {PROFILE.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
              <a
                href={PROFILE.github}
                className="underline decoration-hairline underline-offset-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                className="underline decoration-hairline underline-offset-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.site}
                className="underline decoration-hairline underline-offset-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                robert-stewart.dev
              </a>
            </div>
          </div>
          <div className="grid gap-4 md:col-span-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-hairline bg-surface/80 p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="font-display text-4xl font-semibold tracking-tight">
                  {stat.display}
                </div>
                <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">
                  {stat.unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Chapter>

      {/* 03 Work */}
      <Chapter
        id="work"
        index={2}
        eyebrow="Selected work"
        title="Systems shipped to real users."
        heightClass="h-[240vh] md:h-[300vh]"
        scrollable
      >
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="rounded-[1.75rem] border border-hairline bg-surface/85 p-7 md:p-9 shadow-[var(--shadow-soft)]"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {project.name}
              </h3>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-mute md:text-base">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-chip px-3 py-1 text-[11px] font-medium text-mute"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {project.links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-inverse transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                    >
                      {link.label}
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-inverse/15 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            d="M7 17L17 7M9 7h8v8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Chapter>

      {/* 04 Experience */}
      <Chapter
        id="experience"
        index={3}
        eyebrow="Experience"
        title="Where the systems were built."
        heightClass="h-[230vh] md:h-[280vh]"
        scrollable
      >
        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <article
              key={job.role + job.org}
              className="rounded-[1.75rem] border border-hairline bg-surface/85 p-7 md:p-10 shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-2 text-mute">
                    {job.org} · {job.loc}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-medium text-mute">{job.dates}</p>
              </div>
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm leading-relaxed text-mute"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/35" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Chapter>

      {/* 05 Skills */}
      <Chapter
        id="skills"
        index={4}
        eyebrow="Capabilities"
        title="The stack behind the work."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div
              key={group}
              className="rounded-[1.5rem] border border-hairline bg-surface/85 p-6 shadow-[var(--shadow-soft)]"
            >
              <h3 className="text-sm font-semibold tracking-tight text-ink">
                {group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-chip px-3 py-1.5 text-[12px] text-mute"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Chapter>

      {/* 06 Education */}
      <Chapter
        id="education"
        index={5}
        eyebrow="Education & honors"
        title="Continuous systems thinking."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {EDUCATION.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-[1.5rem] border border-hairline bg-surface/85 p-7 shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {ed.degree}
              </h3>
              <p className="mt-6 text-sm text-ink">{ed.school}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-mute">
                {ed.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-hairline bg-surface/85 p-7 shadow-[var(--shadow-soft)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            Honors
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {HONORS.map((h) => (
              <span
                key={h}
                className="rounded-full bg-chip px-4 py-2 text-sm text-ink"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </Chapter>

      {/* 07 Contact */}
      <Chapter
        id="contact"
        index={6}
        eyebrow="Contact"
        title="Open to remote full-stack and platform roles."
        heightClass="h-[150vh] md:h-[170vh]"
      >
        <p className="max-w-xl text-lg text-mute">
          Based in {PROFILE.location}. Prefer email — responses usually within a
          day.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <IslandButton href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </IslandButton>
          <IslandButton href={PROFILE.linkedin} variant="light">
            LinkedIn
          </IslandButton>
        </div>
      </Chapter>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-16 pt-8 text-sm text-mute md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/atelier"
            className="transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Atelier archive
          </a>
          <a
            href="/editorial"
            className="transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Editorial
          </a>
          <a
            href="/machinery"
            className="transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Machinery
          </a>
        </div>
      </footer>
    </div>
  );
}
