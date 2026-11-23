/* @ds-bundle: {"namespace":"PortfolioDS","components":[{"name":"About","sourcePath":"components/sections/About/About.jsx"},{"name":"Contact","sourcePath":"components/sections/Contact/Contact.jsx"},{"name":"Experience","sourcePath":"components/sections/Experience/Experience.jsx"},{"name":"Footer","sourcePath":"components/general/Footer/Footer.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero/Hero.jsx"},{"name":"Navbar","sourcePath":"components/general/Navbar/Navbar.jsx"},{"name":"Projects","sourcePath":"components/sections/Projects/Projects.jsx"},{"name":"Skills","sourcePath":"components/sections/Skills/Skills.jsx"}],"sourceHashes":{"components/sections/About/About.jsx":"f23daf9642fd","components/sections/About/About.d.ts":"daf682e58878","components/sections/About/About.prompt.md":"dae6e2f5a56b","components/sections/Contact/Contact.jsx":"7357ff97fa4e","components/sections/Contact/Contact.d.ts":"d696882e8ad1","components/sections/Contact/Contact.prompt.md":"981d1715319c","components/sections/Experience/Experience.jsx":"92599fa26e6a","components/sections/Experience/Experience.d.ts":"2a2c1cef0f99","components/sections/Experience/Experience.prompt.md":"e41d9305938f","components/general/Footer/Footer.jsx":"1b3bcc272972","components/general/Footer/Footer.d.ts":"d8b454d24f9e","components/general/Footer/Footer.prompt.md":"71ff6ac139cd","components/sections/Hero/Hero.jsx":"9cd8e48040c1","components/sections/Hero/Hero.d.ts":"a2698578665e","components/sections/Hero/Hero.prompt.md":"1bda91ab9f09","components/general/Navbar/Navbar.jsx":"4ad36845c27f","components/general/Navbar/Navbar.d.ts":"f8d0da28855d","components/general/Navbar/Navbar.prompt.md":"6ca86f32c216","components/sections/Projects/Projects.jsx":"caa4fe069cf3","components/sections/Projects/Projects.d.ts":"3ef97b5968e1","components/sections/Projects/Projects.prompt.md":"66e85769423f","components/sections/Skills/Skills.jsx":"d53c0b267cec","components/sections/Skills/Skills.d.ts":"8390f81a8e92","components/sections/Skills/Skills.prompt.md":"5d597a0427fc"},"inlinedExternals":["lucide-react"],"builtBy":"cc-design-sync"} */
"use strict";
var PortfolioDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/entry.tsx
  var entry_exports = {};
  __export(entry_exports, {
    About: () => About,
    Contact: () => Contact,
    Experience: () => Experience,
    Footer: () => Footer,
    Hero: () => Hero,
    Navbar: () => Navbar,
    Projects: () => Projects,
    Skills: () => Skills
  });
  init_define_import_meta_env();

  // components/Navbar.tsx
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/lucide-react.js
  init_define_import_meta_env();

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/shared/src/utils.js
  init_define_import_meta_env();
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");

  // node_modules/lucide-react/dist/esm/Icon.js
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());

  // node_modules/lucide-react/dist/esm/defaultAttributes.js
  init_define_import_meta_env();
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // node_modules/lucide-react/dist/esm/Icon.js
  var Icon = (0, import_react.forwardRef)(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => {
      return (0, import_react.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );

  // node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = (0, import_react2.forwardRef)(
      ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
        ...props
      })
    );
    Component.displayName = `${iconName}`;
    return Component;
  };

  // node_modules/lucide-react/dist/esm/icons/arrow-down.js
  init_define_import_meta_env();
  var ArrowDown = createLucideIcon("ArrowDown", [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/briefcase.js
  init_define_import_meta_env();
  var Briefcase = createLucideIcon("Briefcase", [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/check-check.js
  init_define_import_meta_env();
  var CheckCheck = createLucideIcon("CheckCheck", [
    ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
    ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/circle-check.js
  init_define_import_meta_env();
  var CircleCheck = createLucideIcon("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/code-xml.js
  init_define_import_meta_env();
  var CodeXml = createLucideIcon("CodeXml", [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/copy.js
  init_define_import_meta_env();
  var Copy = createLucideIcon("Copy", [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/external-link.js
  init_define_import_meta_env();
  var ExternalLink = createLucideIcon("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/github.js
  init_define_import_meta_env();
  var Github = createLucideIcon("Github", [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
      }
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/graduation-cap.js
  init_define_import_meta_env();
  var GraduationCap = createLucideIcon("GraduationCap", [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
      }
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/linkedin.js
  init_define_import_meta_env();
  var Linkedin = createLucideIcon("Linkedin", [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f"
      }
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/mail.js
  init_define_import_meta_env();
  var Mail = createLucideIcon("Mail", [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/map-pin.js
  init_define_import_meta_env();
  var MapPin = createLucideIcon("MapPin", [
    ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/menu.js
  init_define_import_meta_env();
  var Menu = createLucideIcon("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
  ]);

  // node_modules/lucide-react/dist/esm/icons/star.js
  init_define_import_meta_env();
  var Star = createLucideIcon("Star", [
    [
      "polygon",
      {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
      }
    ]
  ]);

  // node_modules/lucide-react/dist/esm/icons/x.js
  init_define_import_meta_env();
  var X = createLucideIcon("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]);

  // lib/data.ts
  init_define_import_meta_env();
  var personal = {
    name: "Abdullah Al Adib",
    title: "Junior Backend Developer",
    tagline: "I build APIs that don't break at 3AM.",
    bio: "I'm a backend developer at Govaly Ltd, focused on building reliable REST APIs and backend systems that actually hold up in production. I graduated with a CSE degree from Premier University in 2024 and jumped straight into real-world engineering \u2014 refactoring legacy code, shipping new features, and learning DevOps along the way. I care about clean architecture, readable code, and shipping things that work.",
    email: "24adib75@gmail.com",
    phone: "+880 1877 555484",
    github: "https://github.com/a2adib",
    linkedin: "https://linkedin.com/in/abdullah-al-adib-01a1b6313",
    location: "Dhaka, Bangladesh",
    cvUrl: "/Abdullah_Al_Adib_CV.pdf"
  };
  var skills = {
    Backend: [
      { name: "Node.js", level: 85 },
      { name: "REST API Design", level: 85 },
      { name: "Python", level: 70 },
      { name: "Express.js", level: 80 }
    ],
    Frontend: [
      { name: "JavaScript", level: 85 },
      { name: "ReactJS", level: 75 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 70 }
    ],
    "Tools & DevOps": [
      { name: "Git & GitHub", level: 85 },
      { name: "Deployment / DevOps", level: 60 },
      { name: "MS Office", level: 80 },
      { name: "REST API Testing", level: 75 }
    ]
  };
  var projects = [
    {
      id: "freelance-marketplace",
      title: "Freelance Marketplace",
      description: "A full-stack freelance platform with separate frontend and backend repos. Features job posting, bidding system, and user authentication. Built with a clean API-first approach on the backend.",
      tags: ["Node.js", "REST API", "React", "Full-Stack"],
      category: "Full-Stack",
      githubFrontend: "https://github.com/a2adib/freelance_marketplace_frontend",
      githubBackend: "https://github.com/a2adib/freelance_marketplace_backend",
      github: "https://github.com/a2adib/freelance_marketplace_frontend",
      live: null,
      featured: true,
      icon: "\u{1F6D2}",
      color: "#00D4FF"
    },
    {
      id: "clubsphere",
      title: "ClubSphere",
      description: "A club management and social platform with dedicated frontend and backend. Handles member management, events, and announcements. Clean separation of concerns with a RESTful backend.",
      tags: ["Node.js", "React", "REST API", "Backend"],
      category: "Full-Stack",
      githubFrontend: "https://github.com/a2adib/clubsphere-frontend",
      githubBackend: "https://github.com/a2adib/clubsphere-backend",
      github: "https://github.com/a2adib/clubsphere-frontend",
      live: null,
      featured: true,
      icon: "\u{1F310}",
      color: "#00FF94"
    },
    {
      id: "formelting-app",
      title: "Formelting App",
      description: "A formula and melting point reference application. Built for technical users who need fast, accurate data lookups. Clean UI with a focus on usability and performance.",
      tags: ["JavaScript", "React", "Frontend"],
      category: "Frontend",
      github: "https://github.com/a2adib/Formelting_App",
      live: null,
      featured: true,
      icon: "\u{1F9EA}",
      color: "#7C3AED"
    },
    {
      id: "shooting-game",
      title: "1v1 Shooting Game",
      description: "A browser-based 1v1 shooting game built with JavaScript. Real-time game logic, player movement, collision detection, and a live score system \u2014 all in vanilla JS.",
      tags: ["JavaScript", "Game Dev", "Canvas API"],
      category: "Game",
      github: "https://github.com/a2adib/shooting_1v1_game",
      live: null,
      featured: true,
      icon: "\u{1F3AE}",
      color: "#FF6B6B"
    },
    {
      id: "customer-support",
      title: "Customer Support Zone",
      description: "A ticket management dashboard for creating, tracking, and updating customer support requests. Features status tracking, user feedback, and a responsive design that works across all devices.",
      tags: ["JavaScript", "React", "Dashboard"],
      category: "Frontend",
      github: "https://github.com/a2adib",
      live: null,
      featured: false,
      icon: "\u{1F3AB}",
      color: "#F59E0B"
    },
    {
      id: "emergency-contact",
      title: "Emergency Contact Manager",
      description: "Full CRUD contact manager with fast lookup and quick edit capabilities. Designed with accessibility and reliability as core requirements for real-world usage.",
      tags: ["JavaScript", "CRUD", "Frontend"],
      category: "Frontend",
      github: "https://github.com/a2adib",
      live: null,
      featured: false,
      icon: "\u{1F4DE}",
      color: "#10B981"
    }
  ];
  var experience = [
    {
      title: "Junior Backend Developer",
      company: "Govaly Ltd.",
      period: "Jan 2025 \u2013 Present",
      type: "Full-time",
      bullets: [
        "Develop, refactor, test, and debug REST APIs for new and existing features across multiple backend projects",
        "Contribute to DevOps workflows with hands-on experience in deployment and infrastructure",
        "Collaborate across teams to ship reliable backend services at production scale"
      ]
    },
    {
      title: "Co-Founder",
      company: "Backloggers",
      period: "Aug 2020 \u2013 Jun 2022",
      type: "Startup",
      bullets: [
        "Led operations and team execution for an educational support platform",
        "Drove marketing and customer communication to build consistent growth",
        "Managed cross-functional team coordination and product roadmap"
      ]
    }
  ];
  var education = [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Premier University",
      period: "2020 \u2013 2024",
      gpa: "3.06",
      note: "Thesis: Completed"
    }
  ];

  // components/Navbar.tsx
  var navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];
  function Navbar() {
    const [scrolled, setScrolled] = (0, import_react3.useState)(false);
    const [mobileOpen, setMobileOpen] = (0, import_react3.useState)(false);
    const [activeSection, setActiveSection] = (0, import_react3.useState)("");
    (0, import_react3.useEffect)(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const handleNav = (href) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return /* @__PURE__ */ React.createElement(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg-primary/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`
      },
      /* @__PURE__ */ React.createElement("nav", { className: "max-w-6xl mx-auto px-6 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(
        "a",
        {
          href: "#hero",
          onClick: (e) => {
            e.preventDefault();
            handleNav("#hero");
          },
          className: "font-display font-bold text-lg tracking-tight"
        },
        /* @__PURE__ */ React.createElement("span", { className: "gradient-text" }, "adib"),
        /* @__PURE__ */ React.createElement("span", { className: "text-text-muted font-mono text-sm" }, ".dev")
      ), /* @__PURE__ */ React.createElement("ul", { className: "hidden md:flex items-center gap-8" }, navLinks.map((link) => /* @__PURE__ */ React.createElement("li", { key: link.href }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => handleNav(link.href),
          className: "font-mono text-sm text-text-muted hover:text-accent-cyan transition-colors duration-200 tracking-wide"
        },
        link.label
      )))), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
        "a",
        {
          href: personal.cvUrl,
          download: true,
          className: "btn-outline px-4 py-2 text-sm font-mono"
        },
        "Download CV"
      )), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "md:hidden text-text-muted hover:text-accent-cyan transition-colors",
          onClick: () => setMobileOpen(!mobileOpen),
          "aria-label": "Toggle menu"
        },
        mobileOpen ? /* @__PURE__ */ React.createElement(X, { size: 22 }) : /* @__PURE__ */ React.createElement(Menu, { size: 22 })
      )),
      mobileOpen && /* @__PURE__ */ React.createElement("div", { className: "md:hidden bg-bg-secondary/95 backdrop-blur-md border-b border-white/5 px-6 pb-6 pt-2" }, /* @__PURE__ */ React.createElement("ul", { className: "flex flex-col gap-4" }, navLinks.map((link) => /* @__PURE__ */ React.createElement("li", { key: link.href }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => handleNav(link.href),
          className: "text-text-muted hover:text-accent-cyan font-mono text-sm w-full text-left py-1 transition-colors"
        },
        link.label
      ))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
        "a",
        {
          href: personal.cvUrl,
          download: true,
          className: "btn-outline px-4 py-2 text-sm font-mono inline-block mt-2"
        },
        "Download CV"
      ))))
    );
  }

  // components/Footer.tsx
  init_define_import_meta_env();
  function Footer() {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return /* @__PURE__ */ React.createElement("footer", { className: "border-t border-white/5 py-10" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center sm:items-start gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "font-display font-bold text-sm gradient-text" }, "Abdullah Al Adib"), /* @__PURE__ */ React.createElement("span", { className: "text-text-dim text-xs font-mono" }, "\xA9 ", year, " \xB7 Built with Next.js & Tailwind CSS")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-5" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: personal.github,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-text-dim hover:text-accent-cyan transition-colors",
        "aria-label": "GitHub"
      },
      /* @__PURE__ */ React.createElement(Github, { size: 18 })
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: personal.linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-text-dim hover:text-accent-cyan transition-colors",
        "aria-label": "LinkedIn"
      },
      /* @__PURE__ */ React.createElement(Linkedin, { size: 18 })
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        href: `mailto:${personal.email}`,
        className: "text-text-dim hover:text-accent-cyan transition-colors",
        "aria-label": "Email"
      },
      /* @__PURE__ */ React.createElement(Mail, { size: 18 })
    ))));
  }

  // components/sections/Hero.tsx
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim());
  var typewriterPhrases = [
    "Backend Developer",
    "REST API Engineer",
    "Node.js Enthusiast",
    "Problem Solver"
  ];
  function Hero() {
    const [displayed, setDisplayed] = (0, import_react4.useState)("");
    const [phraseIdx, setPhraseIdx] = (0, import_react4.useState)(0);
    const [charIdx, setCharIdx] = (0, import_react4.useState)(0);
    const [deleting, setDeleting] = (0, import_react4.useState)(false);
    (0, import_react4.useEffect)(() => {
      const current = typewriterPhrases[phraseIdx];
      let timeout;
      if (!deleting && charIdx <= current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx));
          setCharIdx((c) => c + 1);
          if (charIdx === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          }
        }, 80);
      } else if (deleting && charIdx >= 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx));
          setCharIdx((c) => c - 1);
          if (charIdx === 0) {
            setDeleting(false);
            setPhraseIdx((p) => (p + 1) % typewriterPhrases.length);
          }
        }, 40);
      }
      return () => clearTimeout(timeout);
    }, [charIdx, deleting, phraseIdx]);
    const scrollToProjects = () => {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "orb w-96 h-96 opacity-20",
          style: {
            background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
            top: "10%",
            right: "-5%",
            animationDelay: "0s"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "orb w-72 h-72 opacity-15",
          style: {
            background: "radial-gradient(circle, #00FF94 0%, transparent 70%)",
            bottom: "15%",
            left: "-5%",
            animationDelay: "3s"
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "orb w-48 h-48 opacity-10",
          style: {
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            top: "50%",
            left: "40%",
            animationDelay: "5s"
          }
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "relative z-10 max-w-6xl mx-auto px-6 pt-24" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl" }, /* @__PURE__ */ React.createElement("div", { className: "inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/5" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-accent-green animate-pulse" }), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-accent-green tracking-widest uppercase" }, "Available for opportunities")), /* @__PURE__ */ React.createElement("h1", { className: "font-display font-bold leading-none mb-4" }, /* @__PURE__ */ React.createElement("span", { className: "block text-5xl sm:text-7xl lg:text-8xl text-text-primary mb-2" }, "Abdullah"), /* @__PURE__ */ React.createElement("span", { className: "block text-5xl sm:text-7xl lg:text-8xl gradient-text text-glow-cyan" }, "Al Adib")), /* @__PURE__ */ React.createElement("div", { className: "mt-6 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm text-text-dim mr-1" }, "~$"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xl sm:text-2xl text-accent-cyan" }, displayed, /* @__PURE__ */ React.createElement("span", { className: "cursor" }))), /* @__PURE__ */ React.createElement("p", { className: "text-xl sm:text-2xl text-text-muted font-display mt-4 mb-10 max-w-2xl leading-relaxed" }, personal.tagline), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-4 mb-12" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: scrollToProjects,
          className: "btn-primary px-8 py-3 text-base font-semibold"
        },
        "View Projects"
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: scrollToContact,
          className: "btn-outline px-8 py-3 text-base"
        },
        "Contact Me"
      ), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: personal.cvUrl,
          download: true,
          className: "btn-outline px-8 py-3 text-base flex items-center gap-2"
        },
        /* @__PURE__ */ React.createElement("span", null, "\u2193"),
        " Download CV"
      )), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-6" }, /* @__PURE__ */ React.createElement(
        "a",
        {
          href: personal.github,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-text-dim hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 text-sm font-mono"
        },
        /* @__PURE__ */ React.createElement(Github, { size: 18 }),
        /* @__PURE__ */ React.createElement("span", null, "GitHub")
      ), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: personal.linkedin,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-text-dim hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 text-sm font-mono"
        },
        /* @__PURE__ */ React.createElement(Linkedin, { size: 18 }),
        /* @__PURE__ */ React.createElement("span", null, "LinkedIn")
      ), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: `mailto:${personal.email}`,
          className: "text-text-dim hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2 text-sm font-mono"
        },
        /* @__PURE__ */ React.createElement(Mail, { size: 18 }),
        /* @__PURE__ */ React.createElement("span", null, "Email")
      ))), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-xs text-text-dim tracking-widest uppercase" }, "scroll"), /* @__PURE__ */ React.createElement(ArrowDown, { size: 16, className: "text-accent-cyan" })))
    );
  }

  // components/sections/About.tsx
  init_define_import_meta_env();
  var stats = [
    { label: "Years Coding", value: "4+" },
    { label: "Projects Built", value: "10+" },
    { label: "APIs Shipped", value: "\u221E" },
    { label: "Coffees", value: "\u221E" }
  ];
  function About() {
    return /* @__PURE__ */ React.createElement("section", { id: "about", className: "section-pad relative" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "01 / about"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" })), /* @__PURE__ */ React.createElement("div", { className: "grid lg:grid-cols-2 gap-16 items-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "font-display font-bold text-4xl sm:text-5xl text-text-primary mb-6 leading-tight" }, "Building things that", " ", /* @__PURE__ */ React.createElement("span", { className: "gradient-text" }, "actually work")), /* @__PURE__ */ React.createElement("div", { className: "space-y-4 text-text-muted leading-relaxed" }, /* @__PURE__ */ React.createElement("p", null, personal.bio), /* @__PURE__ */ React.createElement("p", null, "Before going full-time into backend development, I co-founded an educational platform called Backloggers, where I learned that building a product is as much about people and operations as it is about code."), /* @__PURE__ */ React.createElement("p", null, "Right now I'm deep in backend work at Govaly Ltd \u2014 writing APIs, untangling legacy systems, and slowly becoming the kind of developer who actually reads error logs before panicking.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-4 mt-8" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-2 text-sm font-mono text-text-dim" }, /* @__PURE__ */ React.createElement(MapPin, { size: 14, className: "text-accent-cyan" }), personal.location), /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-2 text-sm font-mono text-accent-green" }, /* @__PURE__ */ React.createElement("span", { className: "w-2 h-2 rounded-full bg-accent-green animate-pulse" }), "Open to new roles"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, education.map((edu) => /* @__PURE__ */ React.createElement("div", { key: edu.degree, className: "glass-card rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 rounded-lg bg-accent-cyan/10 flex-shrink-0" }, /* @__PURE__ */ React.createElement(GraduationCap, { size: 20, className: "text-accent-cyan" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary font-semibold" }, edu.degree), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted text-sm mt-0.5" }, edu.institution), /* @__PURE__ */ React.createElement("p", { className: "text-text-dim text-xs font-mono mt-1" }, edu.period, " \xB7 CGPA ", edu.gpa))))), /* @__PURE__ */ React.createElement("div", { className: "glass-card rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 rounded-lg bg-accent-green/10 flex-shrink-0" }, /* @__PURE__ */ React.createElement(Briefcase, { size: 20, className: "text-accent-green" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary font-semibold" }, "Junior Backend Developer"), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted text-sm mt-0.5" }, "Govaly Ltd."), /* @__PURE__ */ React.createElement("p", { className: "text-text-dim text-xs font-mono mt-1" }, "Jan 2025 \u2013 Present")))), /* @__PURE__ */ React.createElement("div", { className: "glass-card rounded-xl p-5" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-2 rounded-lg bg-purple-500/10 flex-shrink-0" }, /* @__PURE__ */ React.createElement(CodeXml, { size: 20, className: "text-purple-400" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary font-semibold" }, "Primary Stack"), /* @__PURE__ */ React.createElement("p", { className: "font-mono text-sm text-accent-cyan mt-1" }, "Node.js \xB7 JavaScript \xB7 Python \xB7 REST APIs")))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-3 mt-4" }, stats.map((stat) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: stat.label,
        className: "glass-card rounded-xl p-4 text-center"
      },
      /* @__PURE__ */ React.createElement("p", { className: "font-display font-bold text-2xl gradient-text" }, stat.value),
      /* @__PURE__ */ React.createElement("p", { className: "text-text-dim text-xs font-mono mt-1 leading-tight" }, stat.label)
    )))))));
  }

  // components/sections/Skills.tsx
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim());
  var categoryColors = {
    Backend: "#00D4FF",
    Frontend: "#00FF94",
    "Tools & DevOps": "#7C3AED"
  };
  function Skills() {
    const [visible, setVisible] = (0, import_react5.useState)(false);
    const ref = (0, import_react5.useRef)(null);
    (0, import_react5.useEffect)(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
    return /* @__PURE__ */ React.createElement("section", { id: "skills", className: "section-pad relative", ref }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none",
        style: {
          background: "radial-gradient(circle, #00FF94 0%, transparent 70%)",
          filter: "blur(60px)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "03 / skills"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" })), /* @__PURE__ */ React.createElement("h2", { className: "font-display font-bold text-4xl sm:text-5xl text-text-primary mb-3" }, "Tools of the", " ", /* @__PURE__ */ React.createElement("span", { className: "gradient-text" }, "trade")), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted mb-14 max-w-xl" }, "What I reach for when building. Numbers reflect real-world comfort, not imaginary confidence."), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-3 gap-8" }, Object.entries(skills).map(([category, items]) => /* @__PURE__ */ React.createElement("div", { key: category, className: "glass-card rounded-2xl p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-6" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "w-1 h-8 rounded-full",
        style: { background: categoryColors[category] }
      }
    ), /* @__PURE__ */ React.createElement("h3", { className: "font-display font-bold text-lg text-text-primary" }, category)), /* @__PURE__ */ React.createElement("div", { className: "space-y-5" }, items.map((skill, i) => /* @__PURE__ */ React.createElement("div", { key: skill.name }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between mb-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm text-text-muted" }, skill.name), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "font-mono text-xs",
        style: { color: categoryColors[category] }
      },
      skill.level,
      "%"
    )), /* @__PURE__ */ React.createElement("div", { className: "w-full h-0.5 bg-white/5 rounded-full overflow-hidden" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "h-full rounded-full transition-all duration-1000 ease-out",
        style: {
          width: visible ? `${skill.level}%` : "0%",
          background: `linear-gradient(90deg, ${categoryColors[category]}, ${category === "Backend" ? "#00FF94" : category === "Frontend" ? "#00D4FF" : "#00D4FF"})`,
          transitionDelay: `${i * 100}ms`
        }
      }
    )))))))), /* @__PURE__ */ React.createElement("div", { className: "mt-12" }, /* @__PURE__ */ React.createElement("p", { className: "section-label mb-6" }, "also comfortable with"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, [
      "Git",
      "GitHub",
      "REST APIs",
      "Express.js",
      "Tailwind CSS",
      "Postman",
      "Linux",
      "VS Code",
      "npm",
      "JSON",
      "Bash"
    ].map((tech) => /* @__PURE__ */ React.createElement(
      "span",
      {
        key: tech,
        className: "px-3 py-1.5 rounded-lg text-xs font-mono text-text-dim border border-white/5 hover:border-accent-cyan/20 hover:text-text-muted transition-all duration-200"
      },
      tech
    ))))));
  }

  // components/sections/Projects.tsx
  init_define_import_meta_env();
  var import_react6 = __toESM(require_react_shim());
  var categories = ["All", "Full-Stack", "Frontend", "Game"];
  function Projects() {
    const [activeFilter, setActiveFilter] = (0, import_react6.useState)("All");
    const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
    return /* @__PURE__ */ React.createElement("section", { id: "projects", className: "section-pad relative" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute top-1/2 right-0 w-96 h-96 opacity-5 pointer-events-none",
        style: {
          background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(60px)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-6" }, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "02 / projects"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" })), /* @__PURE__ */ React.createElement("div", { className: "mb-12" }, /* @__PURE__ */ React.createElement("h2", { className: "font-display font-bold text-4xl sm:text-5xl text-text-primary mb-3" }, "Things I've", " ", /* @__PURE__ */ React.createElement("span", { className: "gradient-text" }, "shipped")), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted max-w-xl" }, "A mix of full-stack apps, APIs, and experiments. Some are serious. One involves shooting people.")), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2 mb-10" }, categories.map((cat) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: cat,
        onClick: () => setActiveFilter(cat),
        className: `px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${activeFilter === cat ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40" : "text-text-dim border border-white/5 hover:border-white/15 hover:text-text-muted"}`
      },
      cat
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" }, filtered.map((project, i) => /* @__PURE__ */ React.createElement(ProjectCard, { key: project.id, project, index: i })))));
  }
  function ProjectCard({
    project,
    index
  }) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "glass-card rounded-2xl p-6 flex flex-col h-full group",
        style: { animationDelay: `${index * 80}ms` }
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
        "span",
        {
          className: "text-2xl p-2 rounded-xl",
          style: { background: `${project.color}15` }
        },
        project.icon
      ), project.featured && /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full" }, /* @__PURE__ */ React.createElement(Star, { size: 10, fill: "currentColor" }), "featured")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, project.live && /* @__PURE__ */ React.createElement(
        "a",
        {
          href: project.live,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-1.5 text-text-dim hover:text-accent-green transition-colors",
          title: "Live demo"
        },
        /* @__PURE__ */ React.createElement(ExternalLink, { size: 16 })
      ), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: project.github,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-1.5 text-text-dim hover:text-accent-cyan transition-colors",
          title: "GitHub"
        },
        /* @__PURE__ */ React.createElement(Github, { size: 16 })
      ))),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "h-0.5 w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-20",
          style: { background: project.color }
        }
      ),
      /* @__PURE__ */ React.createElement("h3", { className: "font-display font-bold text-xl text-text-primary mb-2" }, project.title),
      /* @__PURE__ */ React.createElement("p", { className: "text-text-muted text-sm leading-relaxed flex-1 mb-4" }, project.description),
      /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, project.tags.map((tag) => /* @__PURE__ */ React.createElement(
        "span",
        {
          key: tag,
          className: "px-2.5 py-1 rounded-md text-xs font-mono",
          style: {
            background: `${project.color}12`,
            color: project.color,
            border: `1px solid ${project.color}30`
          }
        },
        tag
      ))),
      "githubBackend" in project && project.githubBackend && /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 mt-4 pt-4 border-t border-white/5" }, /* @__PURE__ */ React.createElement(
        "a",
        {
          href: project.githubFrontend,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs font-mono text-text-dim hover:text-accent-cyan transition-colors flex items-center gap-1"
        },
        /* @__PURE__ */ React.createElement(Github, { size: 12 }),
        " Frontend"
      ), /* @__PURE__ */ React.createElement(
        "a",
        {
          href: project.githubBackend,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs font-mono text-text-dim hover:text-accent-green transition-colors flex items-center gap-1"
        },
        /* @__PURE__ */ React.createElement(Github, { size: 12 }),
        " Backend"
      ))
    );
  }

  // components/sections/Experience.tsx
  init_define_import_meta_env();
  function Experience() {
    return /* @__PURE__ */ React.createElement("section", { id: "experience", className: "section-pad relative" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none",
        style: {
          background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
          filter: "blur(80px)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "04 / experience"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" })), /* @__PURE__ */ React.createElement("h2", { className: "font-display font-bold text-4xl sm:text-5xl text-text-primary mb-14" }, "Where I've", " ", /* @__PURE__ */ React.createElement("span", { className: "gradient-text" }, "worked")), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute left-[5px] top-3 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-cyan/20 to-transparent" }), /* @__PURE__ */ React.createElement("div", { className: "space-y-12" }, experience.map((exp, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "relative pl-10" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot absolute left-0 top-2" }), /* @__PURE__ */ React.createElement("div", { className: "glass-card rounded-2xl p-6 sm:p-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-display font-bold text-xl text-text-primary" }, exp.title), /* @__PURE__ */ React.createElement("p", { className: "text-accent-cyan font-mono text-sm mt-0.5" }, exp.company)), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-end gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm text-text-dim" }, exp.period), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `text-xs font-mono px-2 py-0.5 rounded-full ${exp.type === "Full-time" ? "bg-accent-green/10 text-accent-green border border-accent-green/20" : "bg-purple-500/10 text-purple-400 border border-purple-500/20"}`
      },
      exp.type
    ))), /* @__PURE__ */ React.createElement("div", { className: "h-px bg-white/5 my-4" }), /* @__PURE__ */ React.createElement("ul", { className: "space-y-3" }, exp.bullets.map((bullet, j) => /* @__PURE__ */ React.createElement("li", { key: j, className: "flex items-start gap-3" }, /* @__PURE__ */ React.createElement(
      CircleCheck,
      {
        size: 16,
        className: "text-accent-cyan flex-shrink-0 mt-0.5"
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "text-text-muted text-sm leading-relaxed" }, bullet))))))))), /* @__PURE__ */ React.createElement("div", { className: "mt-16 glass-card rounded-2xl p-6 sm:p-8" }, /* @__PURE__ */ React.createElement("h3", { className: "font-display font-bold text-xl text-text-primary mb-6" }, "Volunteering & Community"), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-2 gap-4" }, [
      {
        org: "PUC Computer Club",
        role: "General Member",
        icon: "\u{1F4BB}"
      },
      {
        org: "Cancer Rogi O Swajan Samaj Foundation",
        role: "Volunteer",
        icon: "\u{1F91D}"
      }
    ].map((v) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: v.org,
        className: "flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/5"
      },
      /* @__PURE__ */ React.createElement("span", { className: "text-2xl" }, v.icon),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-text-primary text-sm font-semibold" }, v.org), /* @__PURE__ */ React.createElement("p", { className: "text-text-dim text-xs font-mono mt-0.5" }, v.role))
    ))))));
  }

  // components/sections/Contact.tsx
  init_define_import_meta_env();
  var import_react7 = __toESM(require_react_shim());
  function Contact() {
    const [copied, setCopied] = (0, import_react7.useState)(false);
    const copyEmail = () => {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    };
    const contactLinks = [
      {
        icon: Github,
        label: "GitHub",
        value: "github.com/a2adib",
        href: personal.github,
        color: "#F0F4FF"
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Abdullah Al Adib",
        href: personal.linkedin,
        color: "#0A66C2"
      },
      {
        icon: MapPin,
        label: "Location",
        value: personal.location,
        href: null,
        color: "#00FF94"
      }
    ];
    return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "section-pad relative" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-20",
        style: {
          background: "linear-gradient(90deg, transparent, #00D4FF, transparent)"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-6 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-16" }, /* @__PURE__ */ React.createElement("span", { className: "section-label" }, "05 / contact"), /* @__PURE__ */ React.createElement("div", { className: "flex-1 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent" })), /* @__PURE__ */ React.createElement("div", { className: "max-w-3xl mx-auto text-center mb-14" }, /* @__PURE__ */ React.createElement("h2", { className: "font-display font-bold text-4xl sm:text-6xl text-text-primary mb-4" }, "Let's", " ", /* @__PURE__ */ React.createElement("span", { className: "gradient-text" }, "build something")), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted text-lg leading-relaxed" }, "Open to backend roles, freelance API work, or just a conversation about tech. I reply fast.")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center mb-12" }, /* @__PURE__ */ React.createElement("div", { className: "glass-card rounded-2xl p-8 text-center max-w-md w-full glow-cyan" }, /* @__PURE__ */ React.createElement(Mail, { size: 28, className: "text-accent-cyan mx-auto mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-text-muted text-sm font-mono mb-3" }, "reach me at"), /* @__PURE__ */ React.createElement("p", { className: "font-display font-bold text-xl text-text-primary mb-5" }, personal.email), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3 justify-center" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: `mailto:${personal.email}`,
        className: "btn-primary px-6 py-2.5 text-sm font-semibold"
      },
      "Send Email"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: copyEmail,
        className: "btn-outline px-4 py-2.5 text-sm flex items-center gap-2"
      },
      copied ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CheckCheck, { size: 14, className: "text-accent-green" }), /* @__PURE__ */ React.createElement("span", { className: "text-accent-green" }, "Copied!")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Copy, { size: 14 }), "Copy")
    )))), /* @__PURE__ */ React.createElement("div", { className: "grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto" }, contactLinks.map((link) => /* @__PURE__ */ React.createElement("div", { key: link.label, className: "glass-card rounded-xl p-5 text-center" }, /* @__PURE__ */ React.createElement(
      link.icon,
      {
        size: 20,
        className: "mx-auto mb-3",
        style: { color: link.color }
      }
    ), /* @__PURE__ */ React.createElement("p", { className: "text-text-dim text-xs font-mono mb-1" }, link.label), link.href ? /* @__PURE__ */ React.createElement(
      "a",
      {
        href: link.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-text-muted text-sm hover:text-accent-cyan transition-colors font-medium"
      },
      link.value
    ) : /* @__PURE__ */ React.createElement("p", { className: "text-text-muted text-sm" }, link.value))))));
  }
  return __toCommonJS(entry_exports);
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-down.js:
lucide-react/dist/esm/icons/briefcase.js:
lucide-react/dist/esm/icons/check-check.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/code-xml.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/external-link.js:
lucide-react/dist/esm/icons/github.js:
lucide-react/dist/esm/icons/graduation-cap.js:
lucide-react/dist/esm/icons/linkedin.js:
lucide-react/dist/esm/icons/mail.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.383.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
window.PortfolioDS=PortfolioDS.__dsMainNs?Object.assign({},PortfolioDS,PortfolioDS.__dsMainNs,{__dsMainNs:undefined}):PortfolioDS;
