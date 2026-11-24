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
  cvUrl: "/CV_of_Abdullah_Al_Adib.pdf",
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

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  stack: string;
  category: "FULL-STACK" | "FRONTEND" | "GAME";
  liveUrl?: string;
  links: { label: string; href: string }[];
}

export const projects: ProjectItem[] = [
  {
    slug: "a2adib-portfolio",
    title: "Vice Stack Portfolio",
    description:
      "GTA VI-inspired interactive software engineering portfolio built with Next.js, Framer Motion, live GitHub showcase, and working email comms.",
    stack: "Next.js · TypeScript · Tailwind · Framer Motion",
    category: "FULL-STACK",
    liveUrl: "https://a2adib.vercel.app",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/a2adib_portfolio" }],
  },
  {
    slug: "emergency-contact",
    title: "Emergency Contact",
    description:
      "Contact manager with full CRUD and a lookup-first interface built for fast edits under pressure — deployed live on GitHub Pages.",
    stack: "HTML · CSS · JavaScript · GitHub Pages",
    category: "FRONTEND",
    liveUrl: "https://a2adib.github.io/emergency_contact/",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/emergency_contact" }],
  },
  {
    slug: "faugei-flower-shop",
    title: "Faugei Flower Shop",
    description:
      "Responsive e-commerce storefront for a floral brand with clean product grids, promotional sections, and mobile-first layout.",
    stack: "HTML · CSS · Responsive UI · GitHub Pages",
    category: "FRONTEND",
    liveUrl: "https://a2adib.github.io/faugei-flower-shop/",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/faugei-flower-shop" }],
  },
  {
    slug: "assingment-01",
    title: "Web Launchpad Showcase",
    description:
      "Modern landing page layout with hero callouts, structured feature blocks, and responsive styling deployed on GitHub Pages.",
    stack: "HTML · CSS · GitHub Pages",
    category: "FRONTEND",
    liveUrl: "https://a2adib.github.io/assingment_01/",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/assingment_01" }],
  },
  {
    slug: "ecommerce-platform",
    title: "Multi-App E-Commerce Suite",
    description:
      "Complete three-repo commerce ecosystem featuring a TypeScript customer storefront, TypeScript admin portal, and Python backend API.",
    stack: "Python · TypeScript · Full-Stack",
    category: "FULL-STACK",
    links: [
      { label: "Backend ↗", href: "https://github.com/a2adib/e-commerce-backend" },
      { label: "Customer ↗", href: "https://github.com/a2adib/e-commerce-customer-site" },
      { label: "Admin ↗", href: "https://github.com/a2adib/e-commerce-admin-site" },
    ],
  },
  {
    slug: "fraudcheck-bd",
    title: "FraudCheck BD",
    description:
      "Multi-tenant COD fraud checker for e-commerce sellers with a FastAPI backend, SSE result streaming, distributed locking, and circuit breakers.",
    stack: "Python · FastAPI · React",
    category: "FULL-STACK",
    links: [
      { label: "Backend ↗", href: "https://github.com/a2adib/fraudcheck-backend" },
      { label: "Frontend ↗", href: "https://github.com/a2adib/fraudcheck-frontend" },
    ],
  },
  {
    slug: "freelance-marketplace",
    title: "Freelance Marketplace",
    description:
      "Full-stack platform with separate frontend and backend repos — job posting, a bidding system, and authentication, built API-first.",
    stack: "Node.js · REST API · React",
    category: "FULL-STACK",
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
    category: "FULL-STACK",
    links: [
      { label: "Backend ↗", href: "https://github.com/a2adib/clubsphere-backend" },
      { label: "Frontend ↗", href: "https://github.com/a2adib/clubsphere-frontend" },
    ],
  },
  {
    slug: "customer-support-zone",
    title: "Customer Support Zone",
    description:
      "Ticket dashboard for creating, tracking, and updating customer requests — backed by a Python API with status transitions.",
    stack: "Python · HTML · Dashboard",
    category: "FULL-STACK",
    links: [
      { label: "Frontend ↗", href: "https://github.com/a2adib/customer-support-zone" },
      { label: "Backend ↗", href: "https://github.com/a2adib/customer-support-zone-backend" },
    ],
  },
  {
    slug: "shooting-1v1",
    title: "1v1 Shooting Game",
    description:
      "Real-time 1v1 action shooter built with Python & Pygame — game loop, movement, collision detection, and live scoring.",
    stack: "Python · Pygame",
    category: "GAME",
    links: [{ label: "Repository ↗", href: "https://github.com/a2adib/shooting_1v1_game" }],
  },
];

export interface GitHubRepo {
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  language: string;
  stars: number;
  updated_at: string;
}

export const githubReposFallback: GitHubRepo[] = [
  { name: "yt_automation", html_url: "https://github.com/a2adib/yt_automation", homepage: "", description: "Automated YouTube video creation and publishing pipeline.", language: "Python", stars: 0, updated_at: "2026-11-21T17:18:27Z" },
  { name: "dayframe-scheduler", html_url: "https://github.com/a2adib/dayframe-scheduler", homepage: "", description: "iOS scheduling app built in Swift.", language: "Swift", stars: 0, updated_at: "2026-11-13T05:55:19Z" },
  { name: "e-commerce-customer-site", html_url: "https://github.com/a2adib/e-commerce-customer-site", homepage: "", description: "Customer-facing TypeScript e-commerce storefront.", language: "TypeScript", stars: 0, updated_at: "2026-09-22T04:32:48Z" },
  { name: "e-commerce-admin-site", html_url: "https://github.com/a2adib/e-commerce-admin-site", homepage: "", description: "Admin management dashboard for e-commerce operations.", language: "TypeScript", stars: 0, updated_at: "2026-09-22T04:30:23Z" },
  { name: "e-commerce-backend", html_url: "https://github.com/a2adib/e-commerce-backend", homepage: "", description: "Python backend API powering the e-commerce platform.", language: "Python", stars: 0, updated_at: "2026-09-22T04:28:31Z" },
  { name: "juiceBar", html_url: "https://github.com/a2adib/juiceBar", homepage: "", description: "Learning OpenGL graphics project.", language: "Makefile", stars: 0, updated_at: "2026-09-14T08:15:44Z" },
  { name: "fraudcheck-backend", html_url: "https://github.com/a2adib/fraudcheck-backend", homepage: "", description: "FastAPI backend for COD fraud checking with streaming and locks.", language: "Python", stars: 0, updated_at: "2026-09-01T07:32:56Z" },
  { name: "fraudcheck-frontend", html_url: "https://github.com/a2adib/fraudcheck-frontend", homepage: "", description: "Frontend client for the FraudCheck platform.", language: "TypeScript", stars: 0, updated_at: "2026-09-01T07:06:32Z" },
  { name: "HRMApp", html_url: "https://github.com/a2adib/HRMApp", homepage: "", description: "Human Resource Management web application.", language: "JavaScript", stars: 0, updated_at: "2026-08-18T06:07:59Z" },
  { name: "customer-support-zone", html_url: "https://github.com/a2adib/customer-support-zone", homepage: "", description: "Customer support ticket dashboard frontend.", language: "HTML", stars: 0, updated_at: "2026-08-17T05:06:43Z" },
  { name: "customer-support-zone-backend", html_url: "https://github.com/a2adib/customer-support-zone-backend", homepage: "", description: "Python backend service for Customer Support Zone.", language: "Python", stars: 0, updated_at: "2026-08-12T09:51:05Z" },
  { name: "a2adib_portfolio", html_url: "https://github.com/a2adib/a2adib_portfolio", homepage: "https://a2adib.vercel.app", description: "Personal software engineering portfolio deployed on Vercel.", language: "TypeScript", stars: 0, updated_at: "2026-08-11T07:37:53Z" },
  { name: "gigswipe", html_url: "https://github.com/a2adib/gigswipe", homepage: "", description: "Swipe-based gig discovery application.", language: "TypeScript", stars: 0, updated_at: "2026-05-14T15:16:10Z" },
  { name: "shooting_1v1_game", html_url: "https://github.com/a2adib/shooting_1v1_game", homepage: "", description: "Trying Pygame 1v1 real-time shooting game.", language: "Python", stars: 0, updated_at: "2026-05-01T17:48:02Z" },
  { name: "fastapi-learing", html_url: "https://github.com/a2adib/fastapi-learing", homepage: "", description: "FastAPI architecture and async patterns lab.", language: "Python", stars: 0, updated_at: "2026-01-14T10:26:40Z" },
  { name: "clubsphere-frontend", html_url: "https://github.com/a2adib/clubsphere-frontend", homepage: "", description: "ClubSphere social and club management frontend.", language: "JavaScript", stars: 0, updated_at: "2025-12-22T18:46:45Z" },
  { name: "clubsphere-backend", html_url: "https://github.com/a2adib/clubsphere-backend", homepage: "", description: "ClubSphere RESTful backend API.", language: "JavaScript", stars: 0, updated_at: "2025-12-22T18:19:02Z" },
  { name: "clubsphere_backend", html_url: "https://github.com/a2adib/clubsphere_backend", homepage: "", description: "ClubSphere backend implementation.", language: "JavaScript", stars: 0, updated_at: "2025-12-14T19:59:19Z" },
  { name: "clubsphere_frontend", html_url: "https://github.com/a2adib/clubsphere_frontend", homepage: "", description: "ClubSphere frontend implementation.", language: "JavaScript", stars: 0, updated_at: "2025-12-14T19:53:33Z" },
  { name: "freelance_marketplace_frontend", html_url: "https://github.com/a2adib/freelance_marketplace_frontend", homepage: "", description: "Frontend client for the Freelance Marketplace.", language: "JavaScript", stars: 0, updated_at: "2025-12-06T18:11:40Z" },
  { name: "freelance_marketplace_backend", html_url: "https://github.com/a2adib/freelance_marketplace_backend", homepage: "", description: "API backend for job posting, bidding, and auth.", language: "JavaScript", stars: 0, updated_at: "2025-12-06T05:27:57Z" },
  { name: "skill_swap", html_url: "https://github.com/a2adib/skill_swap", homepage: "", description: "Peer-to-peer skill exchange web platform.", language: "JavaScript", stars: 0, updated_at: "2025-11-26T10:09:34Z" },
  { name: "Hero-Apps", html_url: "https://github.com/a2adib/Hero-Apps", homepage: "", description: "App showcase and discovery web application.", language: "JavaScript", stars: 0, updated_at: "2025-11-12T20:49:39Z" },
  { name: "select_your_xl", html_url: "https://github.com/a2adib/select_your_xl", homepage: "", description: "Interactive squad builder and player selector.", language: "JavaScript", stars: 0, updated_at: "2025-09-25T00:08:24Z" },
  { name: "react-on-the-go", html_url: "https://github.com/a2adib/react-on-the-go", homepage: "", description: "React component and state practice workspace.", language: "JavaScript", stars: 0, updated_at: "2025-09-19T18:23:27Z" },
  { name: "english-janala", html_url: "https://github.com/a2adib/english-janala", homepage: "", description: "Interactive English vocabulary learning platform.", language: "HTML", stars: 0, updated_at: "2025-09-06T12:51:09Z" },
  { name: "emergency_contact", html_url: "https://github.com/a2adib/emergency_contact", homepage: "https://a2adib.github.io/emergency_contact/", description: "Live emergency contact directory with fast CRUD.", language: "HTML", stars: 0, updated_at: "2025-08-30T13:56:18Z" },
  { name: "faugei-flower-shop", html_url: "https://github.com/a2adib/faugei-flower-shop", homepage: "https://a2adib.github.io/faugei-flower-shop/", description: "Live responsive flower shop landing page.", language: "HTML", stars: 0, updated_at: "2025-07-25T17:56:51Z" },
  { name: "g3-architects-website", html_url: "https://github.com/a2adib/g3-architects-website", homepage: "", description: "Responsive architecture studio website.", language: "HTML", stars: 0, updated_at: "2025-07-21T18:39:47Z" },
  { name: "Formelting_App", html_url: "https://github.com/a2adib/Formelting_App", homepage: "", description: "Formula and melting-point lookup utility.", language: "Python", stars: 0, updated_at: "2025-07-12T04:43:31Z" },
  { name: "assingment_01", html_url: "https://github.com/a2adib/assingment_01", homepage: "https://a2adib.github.io/assingment_01/", description: "Live web showcase landing page.", language: "HTML", stars: 0, updated_at: "2025-07-11T17:39:56Z" },
  { name: "new_year_party", html_url: "https://github.com/a2adib/new_year_party", homepage: "", description: "Event promotion landing page.", language: "HTML", stars: 0, updated_at: "2025-07-09T15:47:58Z" },
  { name: "webdev_portfolio", html_url: "https://github.com/a2adib/webdev_portfolio", homepage: "", description: "Early web developer portfolio build.", language: "HTML", stars: 0, updated_at: "2025-07-08T17:00:46Z" },
  { name: "Portfolio_1", html_url: "https://github.com/a2adib/Portfolio_1", homepage: "", description: "First HTML/CSS personal portfolio project.", language: "HTML", stars: 0, updated_at: "2025-07-05T08:12:22Z" },
  { name: "ad", html_url: "https://github.com/a2adib/ad", homepage: "", description: "TypeScript project workspace.", language: "TypeScript", stars: 0, updated_at: "2025-04-28T17:45:13Z" },
  { name: "File_organizer", html_url: "https://github.com/a2adib/File_organizer", homepage: "", description: "Automated local file organizer utility.", language: "Tcl", stars: 0, updated_at: "2025-04-25T11:49:21Z" },
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
