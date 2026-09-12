# Robert Stewart

Full-stack software developer focused on scalable architectures, multi-tenant systems, and agent-assisted automation.

**Live site:** [robert-stewart.dev](https://robert-stewart.dev) · **Resume:** [PDF](public/documents/Robert-Stewart-Resume.pdf) · Open to remote full-stack / platform roles

[![Astro](https://img.shields.io/badge/Astro-6-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitLab Pages](https://img.shields.io/badge/Deploy-GitLab%20Pages-FC6D26?logo=gitlab&logoColor=white)](https://gitlab.com/rs691/rstewart/-/pipelines)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github&logoColor=white)](https://github.com/rs691/rstewart/actions/workflows/astro.yml)
[![Build](https://github.com/rs691/rstewart/actions/workflows/astro.yml/badge.svg)](https://github.com/rs691/rstewart/actions/workflows/astro.yml)

Council Bluffs, IA

---

## About

I build production systems that handle real users, real data, and real scale. I architected a multi-tenant, location-based community rewards platform (YourOpoly) from the ground up — Flutter + Node.js, MySQL, and AWS ECS.

I mentored **100+** students at Bellevue University across full-stack development, databases, and system design. Currently pursuing an **M.S. in Data Science**, bridging engineering with machine learning and data-driven systems.

| | |
|---|---|
| **3+** years building | **100+** students mentored |
| **1K+** concurrent users | **35%** onboarding reduction |

### Education

- **M.S. Data Science** — Bellevue University *(Expected 2027)*
- **B.S. Software Development** — Bellevue University *(2022 – 2025)*
- **A.A. Computer Science** — Iowa Western C.C. *(2019 – 2022)*

### Awards

Omega Nu Lambda · Gottsch Scholarship · DREAM Scholarship

---

## Experience

### Full-Stack Software Engineer
*Dec 2025 – Present*

- Designed and deployed **YourOpoly**, a multi-tenant mobile platform live on the App Store and Google Play
- Built an event-driven agent system (Gemini API / Google AI Studio) for player lifecycle automation
- Migrated Firebase prototypes to containerized **AWS ECS** (1,000+ regional concurrent users)
- GitHub Actions CI/CD with semantic validation; REST + Socket.io with JWT multi-tenant scoping

`Flutter` `Node.js` `MySQL` `React` `AWS ECS` `Gemini API` `Socket.io`

### CIS Peer Tutor — Bellevue University
*Dec 2023 – April 2026*

- Mentored 100+ students across full-stack development, databases, and system design
- Structured, hands-on learning paths with a focus on measurable skill growth
- Code reviews, architecture guidance, and curriculum materials bridging theory and practice

### Junior Web Developer / IT Support Specialist — Pierson Wireless
*Oct 2022 – Nov 2023*

- Cost estimation tool (.NET/C#/Blazor + SQL Server) — ~40% less manual quote work
- Ticket management + safety/hazard reporting in company CMS (Azure CI/CD)
- JumpCloud provisioning (~50% less support overhead); CrowdStrike Falcon endpoint security

---

## Selected projects

### YourOpoly
Multi-tenant community rewards & gamified local discovery

[App Store](https://apps.apple.com/us/app/youropoly/id6759983671) · [Google Play](https://play.google.com/store/apps/details?id=com.neil.chamberopoly) · [goodlifegames.co](https://goodlifegames.co)

Cross-platform mobile system for local discovery and community rewards — QR check-ins, points, deals, maps, leaderboards, and prizes — backed by a scalable REST API.

`Flutter` `Node.js` `Express` `Socket.io` `Redis` `OAuth`

### Multi-Product Admin Platform
Role-based admin for YourOpoly and GLG-Bingo with shared backends, per-tenant panels, and self-service mini-dashboards.

`Node.js` `React` `Next.js` `MySQL` `AWS`

### E-Commerce Application
Next.js storefront with SSR, Stripe payments, and PostgreSQL.

`Next.js` `React` `PostgreSQL` `Stripe` `Vercel`

### Django Reservation System
High-traffic booking with HTMX, conflict resolution, and email notifications.

`Django` `Python` `HTMX`

### Operational Efficiency & Support Suite
Internal business apps in **.NET (C# / Blazor)** with SQL Server, deployed via Azure CI/CD — safety/compliance, estimation, and service desk.

`C#` `Blazor` `.NET` `SQL Server` `Azure` `CI/CD`

---

## Tech stack

| Area | Tools |
|------|--------|
| **Languages & frameworks** | Python, C#, Dart, TypeScript, JavaScript, Flutter, Next.js, React, Vue, Django, Node.js, Blazor, ASP.NET |
| **Databases** | PostgreSQL (PostGIS), MySQL, SQL Server, Redis, Supabase, Firestore |
| **Cloud & infra** | AWS (ECS, RDS, Lambda), Azure, Docker, CI/CD, GitHub Actions, Vercel |
| **Systems** | Multi-tenant, distributed systems, real-time events, REST APIs, workflow automation |

**Focus:** AI agent orchestration · Software development · Web · Mobile

---

## This repository

Astro + React single-page portfolio (dark emerald theme, motion accents).

```bash
npm install && npm run dev
```

```bash
npm run build && npm run preview
```

Deploy (both remotes, same `main`):

- **GitHub Pages** — [`.github/workflows/astro.yml`](.github/workflows/astro.yml) builds with Node 22 and deploys `dist/` (custom domain: **robert-stewart.dev**)
- **GitLab Pages** — [`.gitlab-ci.yml`](.gitlab-ci.yml) builds with Node 22 and publishes the Pages artifact

Push to either remote to update that host:

```bash
git push origin main   # GitHub Pages
git push gitlab main   # GitLab Pages
```

---

## Connect

- **Site:** [robert-stewart.dev](https://robert-stewart.dev)
- **Resume:** [Download PDF](public/documents/Robert-Stewart-Resume.pdf)
- **LinkedIn:** [robert-stewart-m](https://www.linkedin.com/in/robert-stewart-m)
- **GitHub:** [rs691](https://github.com/rs691)
- **GitLab:** [rs691/rstewart](https://gitlab.com/rs691/rstewart)
- **Email:** rms.dev@outlook.com
- **Handshake:** [profile](https://bellevue.joinhandshake.com/profiles/robertstewart)

---

Licensed under [MIT](LICENSE).
