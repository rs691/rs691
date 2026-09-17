"use client";

import IslandNav from "./IslandNav";
import { Bezel, IslandButton, Reveal } from "./primitives";
import {
  EDUCATION,
  EXPERIENCE,
  HONORS,
  PROFILE,
  PROJECTS,
  SKILLS,
  STATS,
} from "@/app/data/resume";

export default function AgencyPortfolio() {
  return (
    <div id="top" className="relative min-h-[100dvh] bg-canvas text-ink">
      <div className="atelier-grain" aria-hidden />
      <IslandNav />

      {/* Hero — Soft Structuralism, massive grotesk */}
      <header className="mx-auto w-full max-w-7xl px-4 pb-20 pt-36 md:px-8 md:pb-32 md:pt-44">
        <Reveal>
          <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            Full-Stack Software Engineer
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink">
            {PROFILE.name}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute md:text-xl">
            Multi-tenant systems, real-time backends, and AI orchestration —
            shipping live on the App Store and Google Play from {PROFILE.location}.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <IslandButton href="#work">View selected work</IslandButton>
            <IslandButton href={`mailto:${PROFILE.email}`} variant="light">
              Start a conversation
            </IslandButton>
          </div>
        </Reveal>
      </header>

      {/* About + Stats — Asymmetrical Bento */}
      <section
        id="about"
        className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32"
      >
        <Reveal>
          <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            About
          </span>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Production systems with tenant isolation at every layer.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-8" delay={0.05}>
            <Bezel coreClassName="p-8 md:p-10">
              <p className="text-lg leading-relaxed text-mute md:text-xl">
                {PROFILE.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
                <a
                  href={PROFILE.github}
                  className="underline decoration-black/15 underline-offset-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  className="underline decoration-black/15 underline-offset-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href={PROFILE.site}
                  className="underline decoration-black/15 underline-offset-4 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  robert-stewart.dev
                </a>
              </div>
            </Bezel>
          </Reveal>

          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              className="md:col-span-4"
              delay={0.1 + i * 0.06}
            >
              <Bezel coreClassName="flex h-full min-h-[180px] flex-col justify-between p-8">
                <span className="font-display text-5xl font-semibold tracking-tight">
                  {stat.display}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{stat.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-mute">
                    {stat.unit}
                  </p>
                </div>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects bento */}
      <section
        id="work"
        className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32"
      >
        <Reveal>
          <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            Selected work
          </span>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Systems shipped to real users.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {PROJECTS.map((project, index) => {
            const featured = index === 0;
            const span = featured
              ? "md:col-span-8 md:row-span-2"
              : index === 1
                ? "md:col-span-4"
                : index === 2
                  ? "md:col-span-4"
                  : "md:col-span-6";

            return (
              <Reveal key={project.id} className={span} delay={index * 0.05}>
                <Bezel
                  coreClassName={`flex h-full flex-col justify-between p-7 md:p-9 ${
                    featured ? "min-h-[420px]" : "min-h-[240px]"
                  }`}
                >
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className={`mt-4 font-display font-semibold tracking-tight text-ink ${
                        featured ? "text-3xl md:text-4xl" : "text-2xl"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p
                      className={`mt-4 leading-relaxed text-mute ${
                        featured ? "text-base md:text-lg" : "text-sm"
                      }`}
                    >
                      {project.bullets[0]}
                    </p>
                    {featured ? (
                      <ul className="mt-6 space-y-2 text-sm text-mute">
                        {project.bullets.slice(1).map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, featured ? 7 : 4).map((s) => (
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
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Bezel>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32"
      >
        <Reveal>
          <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            Experience
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Where the systems were built.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.role + job.org} delay={i * 0.06}>
              <Bezel coreClassName="p-7 md:p-10">
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
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-mute">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/35" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32"
      >
        <Reveal>
          <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            Capabilities
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            The stack behind the work.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.04}>
              <Bezel coreClassName="p-7">
                <h3 className="text-sm font-semibold tracking-tight text-ink">
                  {group}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-chip px-3 py-1.5 text-[12px] text-mute"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32"
      >
        <Reveal>
          <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
            Education & honors
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Continuous systems thinking.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {EDUCATION.map((ed, i) => (
            <Reveal
              key={ed.degree}
              className={i === 0 ? "md:col-span-6" : "md:col-span-3"}
              delay={i * 0.05}
            >
              <Bezel coreClassName="flex h-full flex-col justify-between p-7 md:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {ed.degree}
                </h3>
                <div className="mt-8">
                  <p className="text-sm text-ink">{ed.school}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-mute">
                    {ed.detail}
                  </p>
                </div>
              </Bezel>
            </Reveal>
          ))}

          <Reveal className="md:col-span-12" delay={0.15}>
            <Bezel coreClassName="p-7 md:p-9">
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
            </Bezel>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-40"
      >
        <Reveal>
          <Bezel coreClassName="overflow-hidden p-10 md:p-16">
            <span className="inline-flex rounded-full bg-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-mute">
              Contact
            </span>
            <h2 className="mt-8 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Open to remote full-stack and platform roles.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-mute">
              Based in {PROFILE.location}. Prefer email — responses usually within
              a day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <IslandButton href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </IslandButton>
              <IslandButton href={PROFILE.linkedin} variant="light">
                LinkedIn
              </IslandButton>
            </div>
          </Bezel>
        </Reveal>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pb-16 pt-8 text-sm text-mute md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/"
            className="transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Parallax home
          </a>
          <a
            href="/editorial"
            className="transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Editorial archive
          </a>
          <a
            href="/machinery"
            className="transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Machinery archive
          </a>
        </div>
      </footer>
    </div>
  );
}
