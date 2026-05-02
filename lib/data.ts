// lib/data.ts — Single source of truth for all portfolio content

export const personal = {
  name: "Abdullah Al Adib",
  title: "Junior Backend Developer",
  tagline: "I build APIs that don't break at 3AM.",
  bio: "I'm a backend developer at Govaly Ltd, focused on building reliable REST APIs and backend systems that actually hold up in production. I graduated with a CSE degree from Premier University in 2024 and jumped straight into real-world engineering — refactoring legacy code, shipping new features, and learning DevOps along the way. I care about clean architecture, readable code, and shipping things that work.",
  email: "24adib75@gmail.com",
  phone: "+880 1877 555484",
  github: "https://github.com/a2adib",
  linkedin: "https://linkedin.com/in/abdullah-al-adib-01a1b6313",
  location: "Dhaka, Bangladesh",
  cvUrl: "/Abdullah_Al_Adib_CV.pdf",
};

export const skills = {
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "REST API Design", level: 85 },
    { name: "Python", level: 70 },
    { name: "Express.js", level: 80 },
  ],
  Frontend: [
    { name: "JavaScript", level: 85 },
    { name: "ReactJS", level: 75 },
    { name: "HTML & CSS", level: 90 },
    { name: "Tailwind CSS", level: 70 },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 85 },
    { name: "Deployment / DevOps", level: 60 },
    { name: "MS Office", level: 80 },
    { name: "REST API Testing", level: 75 },
  ],
};

export const projects = [
  {
    id: "freelance-marketplace",
    title: "Freelance Marketplace",
    description:
      "A full-stack freelance platform with separate frontend and backend repos. Features job posting, bidding system, and user authentication. Built with a clean API-first approach on the backend.",
    tags: ["Node.js", "REST API", "React", "Full-Stack"],
    category: "Full-Stack",
    githubFrontend: "https://github.com/a2adib/freelance_marketplace_frontend",
    githubBackend: "https://github.com/a2adib/freelance_marketplace_backend",
    github: "https://github.com/a2adib/freelance_marketplace_frontend",
    live: null,
    featured: true,
    icon: "🛒",
    color: "#00D4FF",
  },
  {
    id: "clubsphere",
    title: "ClubSphere",
    description:
      "A club management and social platform with dedicated frontend and backend. Handles member management, events, and announcements. Clean separation of concerns with a RESTful backend.",
    tags: ["Node.js", "React", "REST API", "Backend"],
    category: "Full-Stack",
    githubFrontend: "https://github.com/a2adib/clubsphere-frontend",
    githubBackend: "https://github.com/a2adib/clubsphere-backend",
    github: "https://github.com/a2adib/clubsphere-frontend",
    live: null,
    featured: true,
    icon: "🌐",
    color: "#00FF94",
  },
  {
    id: "formelting-app",
    title: "Formelting App",
    description:
      "A formula and melting point reference application. Built for technical users who need fast, accurate data lookups. Clean UI with a focus on usability and performance.",
    tags: ["JavaScript", "React", "Frontend"],
    category: "Frontend",
    github: "https://github.com/a2adib/Formelting_App",
    live: null,
    featured: true,
    icon: "🧪",
    color: "#7C3AED",
  },
  {
    id: "shooting-game",
    title: "1v1 Shooting Game",
    description:
      "A browser-based 1v1 shooting game built with JavaScript. Real-time game logic, player movement, collision detection, and a live score system — all in vanilla JS.",
    tags: ["JavaScript", "Game Dev", "Canvas API"],
    category: "Game",
    github: "https://github.com/a2adib/shooting_1v1_game",
    live: null,
    featured: true,
    icon: "🎮",
    color: "#FF6B6B",
  },
  {
    id: "customer-support",
    title: "Customer Support Zone",
    description:
      "A ticket management dashboard for creating, tracking, and updating customer support requests. Features status tracking, user feedback, and a responsive design that works across all devices.",
    tags: ["JavaScript", "React", "Dashboard"],
    category: "Frontend",
    github: "https://github.com/a2adib",
    live: null,
    featured: false,
    icon: "🎫",
    color: "#F59E0B",
  },
  {
    id: "emergency-contact",
    title: "Emergency Contact Manager",
    description:
      "Full CRUD contact manager with fast lookup and quick edit capabilities. Designed with accessibility and reliability as core requirements for real-world usage.",
    tags: ["JavaScript", "CRUD", "Frontend"],
    category: "Frontend",
    github: "https://github.com/a2adib",
    live: null,
    featured: false,
    icon: "📞",
    color: "#10B981",
  },
];

export const experience = [
  {
    title: "Junior Backend Developer",
    company: "Govaly Ltd.",
    period: "Jan 2025 – Present",
    type: "Full-time",
    bullets: [
      "Develop, refactor, test, and debug REST APIs for new and existing features across multiple backend projects",
      "Contribute to DevOps workflows with hands-on experience in deployment and infrastructure",
      "Collaborate across teams to ship reliable backend services at production scale",
    ],
  },
  {
    title: "Co-Founder",
    company: "Backloggers",
    period: "Aug 2020 – Jun 2022",
    type: "Startup",
    bullets: [
      "Led operations and team execution for an educational support platform",
      "Drove marketing and customer communication to build consistent growth",
      "Managed cross-functional team coordination and product roadmap",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Premier University",
    period: "2020 – 2024",
    gpa: "3.06",
    note: "Thesis: Completed",
  },
];

export const seo = {
  title: "Abdullah Al Adib — Backend Developer",
  description:
    "Junior Backend Developer at Govaly Ltd. I build production-ready REST APIs and backend systems using Node.js, JavaScript, and Python. Based in Bangladesh.",
  keywords: [
    "Abdullah Al Adib",
    "backend developer",
    "Node.js developer",
    "REST API",
    "JavaScript developer",
    "Bangladesh developer",
    "Govaly",
    "Premier University",
    "web developer portfolio",
    "full-stack developer",
  ],
  ogImage: "/og-image.png",
  url: "https://a2adib.vercel.app",
};
