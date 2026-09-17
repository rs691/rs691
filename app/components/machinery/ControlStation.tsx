"use client";

import { useEffect, useMemo, useState } from "react";
import LedIndicator from "./LedIndicator";
import RotaryDial from "./RotaryDial";
import ToggleSwitch from "./ToggleSwitch";
import VuMeter from "./VuMeter";
import CrtScreen from "./CrtScreen";
import {
  EDUCATION,
  EXPERIENCE,
  HONORS,
  PROFILE,
  PROJECTS,
  SECTIONS,
  SKILLS,
  STATS,
  type SectionId,
} from "@/app/data/resume";

export default function ControlStation() {
  const [powered, setPowered] = useState(true);
  const [section, setSection] = useState<SectionId>("profile");
  const [projectIdx, setProjectIdx] = useState(0);
  const [expIdx, setExpIdx] = useState(0);
  const [tenant, setTenant] = useState(0);
  const [eventPulse, setEventPulse] = useState(false);

  const project = PROJECTS[projectIdx];
  const experience = EXPERIENCE[expIdx];

  const tenants = useMemo(
    () => ["YourOpoly", "GLG Bingo", "Game Builder"],
    [],
  );

  useEffect(() => {
    if (!powered || project.aesthetic !== "crt") return;
    const id = window.setInterval(() => {
      setEventPulse(true);
      window.setTimeout(() => setEventPulse(false), 280);
    }, 2200);
    return () => window.clearInterval(id);
  }, [powered, project.aesthetic, projectIdx]);

  const setSectionSafe = (id: SectionId) => {
    if (!powered) return;
    setSection(id);
  };

  return (
    <div className="machinery-root relative min-h-screen overflow-x-hidden px-3 py-4 sm:px-6 sm:py-8">
      <div className="machinery-noise pointer-events-none absolute inset-0" aria-hidden />
      <div className="machinery-wash pointer-events-none absolute inset-0" aria-hidden />

      <main className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Outer chassis */}
        <div className="chassis relative rounded-[28px] p-4 sm:p-6 md:p-8">
          {/* Corner fasteners */}
          {[
            "top-3 left-3 rotate-12",
            "top-3 right-3 -rotate-20",
            "bottom-3 left-3 rotate-45",
            "bottom-3 right-3 -rotate-8",
          ].map((pos) => (
            <span key={pos} className={`hex-screw absolute ${pos}`} aria-hidden />
          ))}

          {/* Header strip */}
          <header className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="gauge-face flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20">
                <div className="text-center">
                  <div className="font-display text-sm font-bold tracking-wider text-[oklch(0.92_0.02_90)] sm:text-base">
                    RMS
                  </div>
                  <div className="font-mono text-[8px] tracking-widest text-[oklch(0.82_0.16_75)]">
                    SYS.OK
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-display text-xl font-bold tracking-tight text-[oklch(0.93_0.02_90)] sm:text-3xl">
                  {PROFILE.name}
                </h1>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[oklch(0.72_0.04_85)]">
                  {PROFILE.title} · Telemetry Deck
                </p>
                <p className="mt-1 font-mono text-[10px] text-[oklch(0.62_0.02_250)]">
                  {PROFILE.location} · 41.2619° N, 95.8608° W
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 rounded-full border border-[oklch(0.35_0.01_250)] bg-[oklch(0.18_0.01_250)] px-3 py-2">
              <LedIndicator on={powered} color="green" label="ONLINE" pulse bootDelay={0.2} />
              <LedIndicator on={powered} color="amber" label="AWS ECS" bootDelay={0.45} />
              <LedIndicator
                on={powered && eventPulse}
                color="red"
                label="EVT"
                bootDelay={0.6}
              />
            </div>
          </header>

          {/* Desktop rack / Mobile module */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Left: identity + meters */}
            <aside className="space-y-4 lg:col-span-4">
              <CrtScreen title="● SYSTEM IDENTITY" live={powered}>
                {powered ? (
                  <div className="space-y-3">
                    <div>
                      <div className="text-base font-bold text-[oklch(0.92_0.12_145)]">
                        {PROFILE.name.toUpperCase()}
                      </div>
                      <div className="text-[oklch(0.78_0.14_145)]">{PROFILE.title}</div>
                    </div>
                    <div className="text-xs text-[oklch(0.72_0.1_145)]">
                      {PROFILE.location} | {PROFILE.phone}
                      <br />
                      {PROFILE.email}
                    </div>
                    <pre className="overflow-x-auto rounded border border-[oklch(0.45_0.08_145_/_0.35)] bg-[oklch(0.1_0.02_145_/_0.65)] p-2 text-[10px] leading-relaxed text-[oklch(0.8_0.12_145)]">
{`export interface SystemContext {
  engineer: "Robert Stewart";
  cloud: "AWS_ECS_FARGATE";
  isolation: "JWT_CLAIM_SCOPED";
  agents: "GEMINI_ORCHESTRATION";
}`}
                    </pre>
                  </div>
                ) : (
                  <p className="text-[oklch(0.55_0.05_145)]">STANDBY — POWER OFF</p>
                )}
              </CrtScreen>

              <div className="panel-inset flex flex-wrap items-end justify-around gap-3 p-4">
                <VuMeter level={powered ? 78 : 0} label="LOAD" bootDelay={0.5} />
                <VuMeter level={powered ? 62 : 0} label="TENANT" bootDelay={0.7} />
                <VuMeter level={powered ? 91 : 0} label="UPTIME" bootDelay={0.9} />
              </div>

              <div className="panel-raised flex items-center justify-between gap-3 p-4">
                <ToggleSwitch
                  on={powered}
                  onToggle={() => setPowered((p) => !p)}
                  label="PWR"
                />
                <div className="flex gap-3">
                  {STATS.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="odometer font-display text-lg font-bold text-[oklch(0.86_0.14_75)]">
                        {powered ? s.display : "—"}
                      </div>
                      <div className="font-mono text-[8px] uppercase tracking-wider text-[oklch(0.62_0.02_85)]">
                        {s.unit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right: active module CRT */}
            <section className="lg:col-span-8">
              <CrtScreen
                title={`● CHANNEL // ${SECTIONS.find((s) => s.id === section)?.label ?? ""}`}
                live={powered}
                className="min-h-[420px]"
              >
                {!powered ? (
                  <p>DECK POWERED DOWN</p>
                ) : (
                  <ModuleContent
                    section={section}
                    project={project}
                    projectIdx={projectIdx}
                    experience={experience}
                    expIdx={expIdx}
                    tenants={tenants}
                    tenant={tenant}
                    eventPulse={eventPulse}
                  />
                )}
              </CrtScreen>

              {/* Desktop control deck */}
              <div className="panel-raised mt-4 hidden items-center justify-between gap-4 p-4 md:flex">
                <RotaryDial
                  value={
                    section === "projects"
                      ? projectIdx
                      : section === "experience"
                        ? expIdx
                        : SECTIONS.findIndex((s) => s.id === section)
                  }
                  max={
                    section === "projects"
                      ? PROJECTS.length - 1
                      : section === "experience"
                        ? EXPERIENCE.length - 1
                        : SECTIONS.length - 1
                  }
                  label="TUNE"
                  size={76}
                  onChange={(v) => {
                    if (section === "projects") setProjectIdx(v);
                    else if (section === "experience") setExpIdx(v);
                    else setSectionSafe(SECTIONS[v].id);
                  }}
                />

                <div className="flex flex-1 flex-wrap justify-center gap-2">
                  {SECTIONS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSectionSafe(s.id)}
                      className="deck-key min-h-11 min-w-[4.5rem] px-3 py-2 font-mono text-[10px] uppercase tracking-wider"
                      data-active={section === s.id && powered}
                      aria-pressed={section === s.id}
                    >
                      {s.short}
                    </button>
                  ))}
                </div>

                {section === "projects" && project.aesthetic === "switches" ? (
                  <div className="flex gap-2">
                    {tenants.map((t, i) => (
                      <ToggleSwitch
                        key={t}
                        on={tenant === i}
                        onToggle={() => setTenant(i)}
                        label={t.split(" ")[0]}
                        guarded={i === 0}
                      />
                    ))}
                  </div>
                ) : (
                  <RotaryDial
                    value={projectIdx}
                    max={PROJECTS.length - 1}
                    label="PROJ"
                    size={64}
                    onChange={setProjectIdx}
                  />
                )}
              </div>
            </section>
          </div>

          {/* Mobile tabbed deck */}
          <nav
            className="panel-raised mt-4 grid grid-cols-3 gap-2 p-3 md:hidden"
            aria-label="Module selector"
          >
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSectionSafe(s.id)}
                className="deck-key min-h-12 px-2 py-2 font-mono text-[10px] uppercase tracking-wider"
                data-active={section === s.id && powered}
                aria-pressed={section === s.id}
              >
                {s.short}
              </button>
            ))}
          </nav>

          {/* Mobile tuner strip */}
          <div className="panel-inset mt-3 flex items-center justify-around gap-3 p-4 md:hidden">
            <RotaryDial
              value={
                section === "projects"
                  ? projectIdx
                  : section === "experience"
                    ? expIdx
                    : 0
              }
              max={
                section === "projects"
                  ? PROJECTS.length - 1
                  : section === "experience"
                    ? EXPERIENCE.length - 1
                    : Math.max(PROJECTS.length - 1, 1)
              }
              label="CHANNEL"
              size={64}
              onChange={(v) => {
                if (section === "projects") setProjectIdx(v);
                else if (section === "experience") setExpIdx(v);
                else setProjectIdx(v);
              }}
            />
            <ToggleSwitch
              on={powered}
              onToggle={() => setPowered((p) => !p)}
              label="PWR"
            />
            <LedIndicator on={powered} color="amber" label="READY" pulse />
          </div>

          <footer className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[oklch(0.3_0.01_250)] pt-4 font-mono text-[10px] text-[oklch(0.58_0.02_85)]">
            <span className="flex flex-wrap gap-3">
              <a
                href="/"
                className="text-[oklch(0.82_0.14_75)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.82_0.16_75)]"
              >
                Current portfolio
              </a>
              <a
                href="/editorial"
                className="text-[oklch(0.82_0.14_75)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.82_0.16_75)]"
              >
                Editorial archive
              </a>
            </span>
            <span>NE Innovation Labs · Skeuomorphic Telemetry v2</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function ModuleContent({
  section,
  project,
  projectIdx,
  experience,
  expIdx,
  tenants,
  tenant,
  eventPulse,
}: {
  section: SectionId;
  project: (typeof PROJECTS)[number];
  projectIdx: number;
  experience: (typeof EXPERIENCE)[number];
  expIdx: number;
  tenants: string[];
  tenant: number;
  eventPulse: boolean;
}) {
  if (section === "profile") {
    return (
      <div className="space-y-4">
        <p className="max-w-2xl text-[oklch(0.8_0.1_145)]">{PROFILE.summary}</p>
        <div className="flex flex-wrap gap-2">
          {["Flutter", "Node.js", "AWS ECS", "Gemini", "MySQL", "Redis", "Next.js"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded border border-[oklch(0.5_0.1_145_/_0.4)] px-2 py-1 text-[10px] text-[oklch(0.82_0.12_145)]"
              >
                {tag}
              </span>
            ),
          )}
        </div>
        <div className="grid gap-2 text-xs sm:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded border border-[oklch(0.45_0.08_145_/_0.3)] bg-[oklch(0.1_0.02_145_/_0.5)] p-2"
            >
              <div className="text-lg font-bold text-[oklch(0.9_0.14_145)]">{s.display}</div>
              <div className="text-[oklch(0.7_0.08_145)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "projects") {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-xl font-bold text-[oklch(0.92_0.12_145)]">
            {String(projectIdx + 1).padStart(2, "0")} // {project.name}
          </h2>
          <span className="text-[10px] text-[oklch(0.7_0.1_145)]">
            CH {projectIdx + 1}/{PROJECTS.length}
            {eventPulse ? " · EVENT" : ""}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded bg-[oklch(0.2_0.05_145_/_0.6)] px-2 py-0.5 text-[10px]"
            >
              {s}
            </span>
          ))}
        </div>
        <ul className="space-y-2 text-xs text-[oklch(0.78_0.1_145)] sm:text-sm">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-[oklch(0.82_0.16_75)]">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {project.aesthetic === "switches" ? (
          <div className="mt-3 rounded border border-[oklch(0.5_0.1_75_/_0.35)] bg-[oklch(0.12_0.03_75_/_0.35)] p-3">
            <div className="mb-1 text-[10px] uppercase tracking-wider text-[oklch(0.82_0.14_75)]">
              Tenant bus · active
            </div>
            <div className="text-sm font-bold text-[oklch(0.9_0.12_75)]">
              {tenants[tenant]}
            </div>
          </div>
        ) : null}
        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 rounded border border-[oklch(0.7_0.14_75)] px-3 py-2 text-xs text-[oklch(0.86_0.14_75)] hover:bg-[oklch(0.82_0.16_75_/_0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.82_0.16_75)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  if (section === "experience") {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-bold text-[oklch(0.92_0.12_145)] sm:text-xl">
            {experience.role}
          </h2>
          <span className="text-[10px] text-[oklch(0.7_0.1_145)]">
            LOG {expIdx + 1}/{EXPERIENCE.length}
          </span>
        </div>
        <div className="text-xs text-[oklch(0.78_0.12_75)]">
          {experience.org} · {experience.loc} · {experience.dates}
        </div>
        <ul className="max-h-[320px] space-y-2 overflow-y-auto pr-1 text-xs text-[oklch(0.78_0.1_145)] sm:text-sm">
          {experience.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="shrink-0 text-[oklch(0.82_0.16_75)]">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section === "skills") {
    return (
      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-[oklch(0.92_0.12_145)]">
          Skill Patch Bay
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div
              key={group}
              className="rounded border border-[oklch(0.45_0.08_145_/_0.35)] bg-[oklch(0.1_0.02_145_/_0.45)] p-3"
            >
              <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[oklch(0.82_0.14_75)]">
                {group}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 rounded-full border border-[oklch(0.5_0.1_145_/_0.35)] px-2 py-1 text-[10px]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "oklch(0.82 0.18 145)",
                        boxShadow: "0 0 6px oklch(0.82 0.18 145)",
                      }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section === "education") {
    return (
      <div className="space-y-5">
        <h2 className="font-display text-xl font-bold text-[oklch(0.92_0.12_145)]">
          Academic Telemetry
        </h2>
        <div className="space-y-3">
          {EDUCATION.map((ed) => (
            <div
              key={ed.degree}
              className="rounded border border-[oklch(0.45_0.08_145_/_0.35)] bg-[oklch(0.1_0.02_145_/_0.45)] p-3"
            >
              <div className="font-bold text-[oklch(0.9_0.12_145)]">{ed.degree}</div>
              <div className="text-xs text-[oklch(0.75_0.1_145)]">{ed.school}</div>
              <div className="mt-1 font-mono text-[10px] text-[oklch(0.82_0.14_75)]">
                {ed.detail}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[oklch(0.82_0.14_75)]">
            Honors register
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {HONORS.map((h) => (
              <li
                key={h}
                className="rounded border border-[oklch(0.55_0.12_75_/_0.35)] px-3 py-2 text-xs text-[oklch(0.86_0.1_75)]"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold text-[oklch(0.92_0.12_145)]">
        Comms Deck
      </h2>
      <p className="text-sm text-[oklch(0.78_0.1_145)]">
        Open channel for remote full-stack / platform roles.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { label: "Email", href: `mailto:${PROFILE.email}`, value: PROFILE.email },
          { label: "GitHub", href: PROFILE.github, value: "github.com/rs691" },
          { label: "LinkedIn", href: PROFILE.linkedin, value: "robert-stewart-m" },
          { label: "Site", href: PROFILE.site, value: "robert-stewart.dev" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="min-h-14 rounded border border-[oklch(0.5_0.1_145_/_0.4)] bg-[oklch(0.1_0.02_145_/_0.5)] p-3 hover:border-[oklch(0.82_0.16_75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.82_0.16_75)]"
          >
            <div className="text-[10px] uppercase tracking-wider text-[oklch(0.82_0.14_75)]">
              {c.label}
            </div>
            <div className="mt-1 text-sm text-[oklch(0.9_0.1_145)]">{c.value}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
