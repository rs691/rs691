export type SectionId =
  | "profile"
  | "projects"
  | "experience"
  | "skills"
  | "education"
  | "comms";

export const SECTIONS: { id: SectionId; label: string; short: string }[] = [
  { id: "profile", label: "System Profile", short: "ID" },
  { id: "projects", label: "Project Channels", short: "PROJ" },
  { id: "experience", label: "Service Log", short: "EXP" },
  { id: "skills", label: "Skill Matrix", short: "SKILL" },
  { id: "education", label: "Telemetry", short: "EDU" },
  { id: "comms", label: "Comms Deck", short: "COM" },
];

export const PROFILE = {
  name: "Robert Stewart",
  title: "Full-Stack Software Engineer",
  location: "Council Bluffs, IA",
  phone: "402-595-0211",
  email: "rms.dev@outlook.com",
  site: "https://robert-stewart.dev",
  github: "https://github.com/rs691",
  linkedin: "https://linkedin.com/in/robert-stewart-m",
  summary:
    "Designs and operates multi-tenant production systems end to end — mobile clients, REST and real-time backends, admin tooling, CI/CD, and AWS cloud infrastructure. Ships platforms live on the App Store and Google Play with tenant isolation and RBAC at every layer, plus AI/LLM features in production.",
};

export const STATS = [
  { label: "Concurrent Users", value: 1000, display: "1,000+", unit: "REGIONAL" },
  { label: "Tenant Setup Cut", value: 35, display: "35%", unit: "FASTER" },
  { label: "Students Mentored", value: 100, display: "100+", unit: "CIS" },
];

export const PROJECTS = [
  {
    id: "youropoly",
    name: "YourOpoly",
    aesthetic: "crt" as const,
    stack: ["Flutter", "Node.js", "MySQL", "AWS ECS", "Redis", "Socket.io", "Gemini API"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/youropoly/id6759983671" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.neil.chamberopoly",
      },
    ],
    bullets: [
      "Community rewards platform connecting players with local businesses via QR/barcode check-ins, points, promotions, and leaderboards.",
      "Map-based discovery and location-driven gameplay for participating businesses.",
      "Background Gemini agent tracks player activity; Redis keeps leaderboards responsive at scale.",
    ],
  },
  {
    id: "admin",
    name: "Multi-Product Admin",
    aesthetic: "switches" as const,
    stack: ["Node.js", "React/Next.js", "MySQL", "AWS"],
    links: [],
    bullets: [
      "Central console for game logic, permissions, configuration, and platform ops across products.",
      "Layered admin model: privileged internal controls vs tenant self-service.",
      "Shared tooling for YourOpoly and Good Life Bingo — additional products plug in without a separate admin system.",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce + pgvector RAG",
    aesthetic: "editorial" as const,
    stack: ["Next.js 15", "Supabase", "PostgreSQL", "Stripe", "Vercel AI SDK"],
    links: [],
    bullets: [
      "Production-style storefront with Supabase Auth, Postgres, and RLS-backed models.",
      "Stripe Checkout and webhook order persistence with a persistent cart.",
      "AI copilots with pgvector RAG and server-side tool calling, gated by automated contract evals in CI.",
    ],
  },
  {
    id: "django",
    name: "Django Reservation System",
    aesthetic: "crt" as const,
    stack: ["Django", "HTMX", "Python", "SQLite"],
    links: [],
    bullets: [
      "Booking application with transaction-safe scheduling conflict resolution.",
      "Automated email workflows for reservation lifecycle events.",
    ],
  },
  {
    id: "taskboard",
    name: "Multi-Tenant Task Board API",
    aesthetic: "brutal" as const,
    stack: ["C#", "ASP.NET Core", "EF Core", "JWT", "Azure", "GitHub Actions"],
    links: [],
    bullets: [
      "EF Core global query filters enforce tenant data isolation at the ORM layer.",
      "GitHub Actions pipeline deploys to Azure App Service.",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Software Engineer",
    org: "NE Innovation Labs",
    loc: "Omaha, NE",
    dates: "Dec 2025 – Present",
    bullets: [
      "Shared Flutter apps for iOS/Android with unified JWT/OAuth, deep-link QR workflows, and reusable mobile architecture.",
      "Multi-tenant Node.js/Express platform powering Chamberopoly, Bingo, and Game Builder with org-scoped RBAC and Google/Microsoft/Apple OAuth.",
      "Idempotent REST-authoritative real-time workflows (QR scans, blackout detection) with Socket.io push-after-commit under concurrent load.",
      "Genkit AI workflows (Gemini → Groq) for player chatbot and admin digests.",
      "Migrated Firebase prototypes to AWS ECS Fargate, RDS MySQL, ElastiCache Redis, S3/CloudFront — 1,000+ concurrent users, 35% faster tenant setup.",
      "Led multi-repo CI/CD with GitHub Actions to Google Play, TestFlight, and Docker; AI-assisted workflows with human validation gates.",
    ],
  },
  {
    role: "CIS Peer Tutor",
    org: "Bellevue University",
    loc: "Bellevue, NE",
    dates: "Dec 2023 – Apr 2026",
    bullets: [
      "Mentored 100+ students in Python, JavaScript, database design, and software engineering.",
      "Code reviews focused on Clean Code, TDD, and system design.",
      "Created review materials and database design rubrics adopted across CIS sections.",
    ],
  },
  {
    role: "Junior Web Developer / IT Support",
    org: "Pierson Wireless",
    loc: "Omaha, NE",
    dates: "Oct 2022 – Nov 2023",
    bullets: [
      "Internal .NET (C#/Blazor) apps with SQL Server via Azure CI/CD.",
      "Cost estimation tool cut manual quote workload by ~40%.",
      "Safety compliance, hazard reporting, and service desk ticketing in company CMS.",
      "JumpCloud provisioning (−50% admin overhead); CrowdStrike Falcon endpoint security.",
    ],
  },
];

export const SKILLS = {
  Languages: ["Python", "Java", "C#", "Dart", "TypeScript", "JavaScript", "SQL"],
  Frontend: ["React", "Next.js", "Flutter", "Vue.js", "HTMX", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Django", "ASP.NET", "REST", "Socket.io"],
  "Cloud & DevOps": ["AWS ECS", "Lambda", "RDS", "Azure", "Docker", "GitHub Actions", "Vercel"],
  Database: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "Firestore", "Supabase"],
  "AI Engineering": ["Gemini API", "Multi-agent orchestration", "Event-driven AI", "LLM integration"],
  Testing: ["Jest", "React Testing Library", "Flutter Test", "Postman"],
};

export const EDUCATION = [
  {
    degree: "M.S. Data Science",
    school: "Bellevue University",
    detail: "In Progress · Expected Jun 2028",
  },
  {
    degree: "B.S. Software Development",
    school: "Bellevue University",
    detail: "Jun 2025",
  },
  {
    degree: "A.A. Computer Programming",
    school: "Iowa Western Community College",
    detail: "May 2023",
  },
];

export const HONORS = [
  "Darrel H. Gottsch Endowed Scholarship",
  "DREAM Scholarship",
  "Dean's List",
  "Omega Nu Lambda National Honor Society",
];
