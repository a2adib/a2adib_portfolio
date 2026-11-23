// lib/data.ts — Single source of truth for all portfolio content.
// Copy here is CV-accurate as of Aug 2026 and matches the "Scroll Acts" design.

export const personal = {
  name: "Abdullah Al Adib",
  title: "Software Engineer",
  eyebrow: "Software Engineer · Dhaka, Bangladesh",
  intro:
    "I engineer end-to-end software systems for teams that can’t afford downtime — high-concurrency Python/FastAPI backends, responsive React/Next.js interfaces, PostgreSQL tuned for load, and zero-loss migrations.",
  email: "24adib75@gmail.com",
  phone: "+880 1877 555484",
  phoneHref: "tel:+8801877555484",
  github: "https://github.com/a2adib",
  githubHandle: "a2adib",
  linkedin: "https://linkedin.com/in/abdullah-al-adib-01a1b6313",
  linkedinHandle: "abdullah-al-adib",
  location: "Dhaka, Bangladesh",
  cvUrl: "/Abdullah_Al_Adib_CV.pdf",
};

export const navLinks = [
  { num: "01", label: "Systems", href: "#act1" },
  { num: "02", label: "Work", href: "#act2" },
  { num: "03", label: "Track record", href: "#act3" },
  { num: "04", label: "How I work", href: "#act4" },
];

export const metrics = [
  { value: 3, suffix: "×", label: "Concurrent requests" },
  { value: 40, suffix: "%", label: "Faster responses" },
  { value: 35, suffix: "%", label: "Faster reports" },
  { value: 70, suffix: "%", label: "Core test coverage" },
];

export const backendAct = {
  label: "01 — Backend systems",
  heading: "Legacy code, made to move.",
  body: "At Govaly I took a synchronous FastAPI codebase and rebuilt it async, end to end — then kept going into caching, schema drift, and the query patterns nobody had time to look at.",
  chips: [
    "FastAPI",
    "async SQLAlchemy",
    "SQLModel",
    "Alembic",
    "PostgreSQL",
    "Redis",
    "Pydantic",
    "pytest",
  ],
  codeFile: "reports/service.py",
  responseTime: {
    label: "Response time",
    before: "800ms",
    after: "480ms",
    caption: "Redis caching on high-traffic endpoints.",
  },
  dataIntegrity: {
    label: "Data integrity",
    lines: [
      { ok: false, text: "insert failed — schema drift" },
      { ok: false, text: "insert failed — schema drift" },
      { ok: true, text: "alembic revision applied" },
      { ok: true, text: "daily transactions clean" },
    ],
    caption: "Financial pipelines restored end to end.",
  },
};

export const projects = [
  {
    slug: "freelance-marketplace",
    title: "Freelance Marketplace",
    description:
      "Full-stack platform with separate frontend and backend repos — job posting, a bidding system, and authentication, built API-first.",
    stack: "Node.js · REST API · React",
    links: [
      { label: "Backend ↗", href: "https://github.com/a2adib/freelance_marketplace_backend" },
      { label: "Frontend ↗", href: "https://github.com/a2adib/freelance_marketplace_frontend" },
    ],
  },
  {
    slug: "clubsphere",
    title: "ClubSphere",
    description:
      "Club management and social platform — members, events, and announcements behind a clean RESTful backend.",
    stack: "Node.js · React · REST API",
    links: [
      { label: "Backend ↗", href: "https://github.com/a2adib/clubsphere-backend" },
      { label: "Frontend ↗", href: "https://github.com/a2adib/clubsphere-frontend" },
    ],
  },
  {
    slug: "customer-support-zone",
    title: "Customer Support Zone",
    description:
      "Ticket dashboard for creating, tracking, and updating customer requests — modular UI for status changes and feedback.",
    stack: "JavaScript · React · Dashboard",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib" }],
  },
  {
    slug: "emergency-contact",
    title: "Emergency Contact",
    description:
      "Contact manager with full CRUD and an interface built for fast lookup and quick edits under pressure.",
    stack: "JavaScript · CRUD · Frontend",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib" }],
  },
  {
    slug: "formelting-app",
    title: "Formelting App",
    description:
      "Formula and melting-point reference for technical users who need fast, accurate lookups.",
    stack: "JavaScript · React",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/Formelting_App" }],
  },
  {
    slug: "shooting-1v1",
    title: "1v1 Shooting Game",
    description:
      "Browser shooter in vanilla JS — real-time game loop, movement, collision detection, live scoring.",
    stack: "JavaScript · Canvas API",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/shooting_1v1_game" }],
  },
];

type TimelineEntry = {
  period: string;
  type: string;
  role: string;
  org: string;
  /** Numbered achievement list — roles. */
  bullets?: string[];
  /** Single line instead of bullets — education. */
  body?: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "Jan 2026 — Present",
    type: "Full-time",
    role: "Junior Software Engineer,",
    org: "Govaly Ltd.",
    bullets: [
      "Migrated the legacy codebase to async FastAPI/SQLAlchemy (3× concurrency); Redis caching cut response time 40% (800ms → 480ms).",
      "Integrated Pathao, RedX, Steadfast couriers and SSLCommerz payments with webhooks, distributed locks and a discount voucher system.",
      "Shipped 4+ production REST APIs (incl. ERP/CNF modules) with JWT/OTP auth, RBAC and audit trails, used daily by operations and finance.",
      "Fixed schema-drift insert failures with Alembic migrations; cut multi-join report query time by 35%.",
      "Raised test coverage to 70% with a 50+ test Dockerised integration suite; enforced Ruff and pre-commit.",
    ],
  },
  {
    period: "Jul 2024 — Dec 2025",
    type: "Full-time",
    role: "Head of Operations,",
    org: "Govaly Ltd.",
    body: "Led day-to-day operations before transitioning into the engineering team.",
  },
  {
    period: "Aug 2021 — Feb 2023",
    type: "Startup",
    role: "Co-Founder,",
    org: "Backloggers",
    bullets: [
      "Led operations and team execution for an educational support platform.",
      "Drove growth through marketing and direct customer communication.",
    ],
  },
  {
    period: "2020 — 2025",
    type: "Education",
    role: "B.Sc. Computer Science & Engineering,",
    org: "Premier University",
    body: "CGPA 3.06 · Thesis completed.",
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript"] },
  {
    title: "Backend",
    items: ["FastAPI", "SQLModel", "async SQLAlchemy", "Alembic · Pydantic", "REST API design"],
  },
  {
    title: "Data & infra",
    items: ["PostgreSQL", "Redis", "VPS deployment", "Uvicorn · Nginx · systemd"],
  },
  { title: "Tooling", items: ["Git · uv · just", "ruff · pytest", "ReactJS · HTML/CSS"] },
];

export const principles = [
  {
    num: "01",
    title: "Read the system first",
    body: "Before changing a line I trace the request path, the schema, and where it actually hurts. Most bugs are drift, not logic.",
  },
  {
    num: "02",
    title: "Measure, then change",
    body: "Timings and query counts before the refactor, the same numbers after. If it isn’t measurably better, it doesn’t ship.",
  },
  {
    num: "03",
    title: "Leave tests behind",
    body: "Coverage on the modules that carry money and data, so the next person can move fast without breaking the ledger.",
  },
];

export const contact = {
  label: "Write to me",
  heading: "Need a software engineer who ships end to end?",
  draftPrefix: "Hey Abdullah, ",
  draftPlaceholder: "we need someone to…",
  copyright: "© 2026 Abdullah Al Adib",
};

export const seo = {
  title: "Abdullah Al Adib — Software Engineer",
  description:
    "Software Engineer at Govaly Ltd. building full-stack and backend systems — Python/FastAPI, React/Next.js, Node.js, PostgreSQL, Redis caching, and zero-loss migrations. Based in Dhaka, Bangladesh.",
  keywords: [
    "Abdullah Al Adib",
    "backend developer",
    "Python developer",
    "FastAPI",
    "async SQLAlchemy",
    "PostgreSQL",
    "REST API",
    "Bangladesh developer",
    "Govaly",
    "Premier University",
  ],
  ogImage: "/og-image.png",
  url: "https://a2adib.vercel.app",
};
