# Abdullah Al Adib — Developer Portfolio

A modern, dark-themed developer portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: CSS keyframes + Framer Motion ready
- **Fonts**: Syne (display) · Space Grotesk (body) · Fira Code (mono)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css          # Design tokens, animations, utilities
│   ├── layout.tsx           # Root layout with SEO metadata + fonts
│   ├── page.tsx             # Main page (assembles all sections)
│   ├── sitemap.ts           # Auto-generated sitemap for SEO
│   └── robots.ts            # robots.txt for SEO crawlers
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile menu
│   ├── Footer.tsx           # Footer with social links
│   └── sections/
│       ├── Hero.tsx         # Hero with typewriter animation + CTA
│       ├── About.tsx        # Bio, education, stats
│       ├── Projects.tsx     # Project cards with filter tabs
│       ├── Skills.tsx       # Animated skill bars by category
│       ├── Experience.tsx   # Timeline-style work history
│       └── Contact.tsx      # Email + social links
├── lib/
│   └── data.ts              # ✅ EDIT THIS — all your content lives here
├── public/
│   └── Abdullah_Al_Adib_CV.pdf   # ← PUT YOUR CV HERE
├── tailwind.config.js
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## ⚡ Run Locally

### 1. Clone / set up
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your CV
Place your CV file in the `/public` folder:
```
public/Abdullah_Al_Adib_CV.pdf
```

### 4. Start dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Customization

All content is in **one file**: `lib/data.ts`

- Edit `personal` → name, tagline, bio, email, links
- Edit `projects` → add/remove/update your GitHub projects
- Edit `skills` → adjust skill levels (0-100)
- Edit `experience` → update work history
- Edit `seo` → update title, description, URL for Vercel domain

---

## 🌐 Deploy on Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done.

### Option B — GitHub + Vercel (recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### After deploy
Update the `seo.url` in `lib/data.ts` with your Vercel URL:
```ts
url: "https://a2adib.vercel.app",
```

---

## 📦 Build for Production
```bash
npm run build
npm run start
```

---

## ✅ SEO Checklist

- [x] `<title>` and `<meta description>` via Next.js Metadata API
- [x] Open Graph tags (Facebook/LinkedIn previews)
- [x] Twitter card tags
- [x] `sitemap.xml` auto-generated
- [x] `robots.txt` configured
- [x] Canonical URL set
- [x] Semantic HTML (sections, headings hierarchy)
- [x] `alt` attributes on images
- [x] Font `display: swap` for performance

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary BG | `#080C14` |
| Card BG | `#111827` |
| Accent Cyan | `#00D4FF` |
| Accent Green | `#00FF94` |
| Accent Purple | `#7C3AED` |
| Text Primary | `#F0F4FF` |
| Text Muted | `#8892A4` |

---

Built by Abdullah Al Adib · [github.com/a2adib](https://github.com/a2adib)
