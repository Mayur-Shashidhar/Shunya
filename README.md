# SHUNYA ✦ Official Website

<div align="center">
  <img src="public/assets/shunya_logo.jpg" alt="SHUNYA Logo" width="120" style="border-radius: 24px;" />
  <br />
  <h3>The Official Mathematics Club of PES University, Bengaluru</h3>
  <p><em>"Everything is nothing, and nothing is everything."</em></p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" /></a>
    <a href="https://motion.dev/"><img src="https://img.shields.io/badge/Motion-12.0-FF0055?style=flat-square&logo=framer&logoColor=white" alt="Motion" /></a>
  </p>
</div>

---

## 🌌 Overview

**SHUNYA** is the official, research-oriented mathematics club at **PES University**, Bengaluru. Founded on December 14, 2021, SHUNYA brings together enthusiasts across pure mathematics, computational modeling, cryptography, and logic through workshops, research discussions, competitive events, and our flagship national hackathon, **Arithemania**.

This repository contains the full source code for the official SHUNYA web platform, engineered with a modern dark-mode aesthetic, interactive 3D WebGL scenes, glassmorphic UI components, and accessible animations.

---

## ✨ Features & Highlights

- **Interactive 3D Visuals**:
  - Rotating distorted Icosahedron core with mouse parallax and floating geometric particles powered by Three.js and `@react-three/fiber` (`VoidScene.tsx`).
  - Accessibility-first with automated `prefers-reduced-motion` compliance.
- **Cyberpunk / Hacker Typography**:
  - Matrix-style decrypting text scrambler (`DecryptedText.tsx`) and glitch title animations (`Logo.tsx`).
- **3D Reflective Hologram Cards**:
  - Interactive member badges with dynamic glare calculation, 3D tilt tracking, and holographic borders for team profiles (`ReflectiveCard.tsx`).
- **Comprehensive Event Management**:
  - Dedicated microsite for **Arithemania** (timeline, format highlights, rules, categories).
  - Categorized archive of past hackathons and competitions (*Kalari*, *Code of Honour*, *π-naccle*).
  - Dynamic upcoming event announcements with direct social media integrations.
- **Bento Grid Presentation**:
  - Clean modular bento-box layouts highlighting club history, domains, and milestone statistics.
- **SEO & Social Optimization**:
  - Dynamic page titles, meta tags, and OpenGraph headers per route (`usePageMeta.ts`).
  - Automated XML sitemap generation.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) with [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Custom Vanilla CSS Design System |
| **3D & Canvas** | [Three.js](https://threejs.org/), [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber), [`@react-three/drei`](https://github.com/pmndrs/drei) |
| **Animations** | [Motion](https://motion.dev/) (`motion/react`), [GSAP](https://greensock.com/gsap/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📁 Repository Structure

```
Shunya/
├── public/                      # Static assets & media
│   ├── assets/                  # Logos and club graphics
│   ├── events/                  # Posters & banners (Arithemania, Kalari, etc.)
│   ├── team_pics/               # Core team portraits
│   ├── _redirects               # SPA routing configuration
│   └── sitemap.xml              # SEO sitemap
├── src/
│   └── react-app/
│       ├── components/          # Reusable UI components
│       │   ├── events/          # Event & Hackathon timeline components
│       │   ├── DecryptedText.tsx # Matrix decrypt text animation
│       │   ├── EventCard.tsx    # Event display cards
│       │   ├── Footer.tsx       # Site footer with social links
│       │   ├── GlassCard.tsx    # Glassmorphic container wrapper
│       │   ├── Logo.tsx         # Animated glitch logo
│       │   ├── Navigation.tsx   # Responsive top navbar & mobile drawer
│       │   ├── Preloader.tsx    # Initial entry load sequence
│       │   ├── ReflectiveCard.tsx # 3D Holographic tilt card
│       │   └── ScrollToTop.tsx  # Route change scroll controller
│       ├── hooks/               # Custom React hooks
│       │   ├── usePageMeta.ts   # Dynamic document title & OG meta manager
│       │   └── useTheme.tsx     # Theme provider (dark / light mode)
│       ├── pages/               # Route views
│       │   ├── Home.tsx         # Hero canvas & featured highlights
│       │   ├── Events.tsx       # Upcoming & past events listing
│       │   ├── Arithemania.tsx  # Flagship hackathon microsite
│       │   ├── People.tsx       # Core committee roster
│       │   └── About.tsx        # Bento-grid club history & domains
│       ├── visuals/             # Three.js 3D scenes and particle canvases
│       │   ├── VoidScene.tsx    # 3D icosahedron & floating accents
│       │   └── HeroParticles.tsx# Interactive background particle network
│       ├── App.tsx              # Main routing & application shell
│       ├── index.css            # Design tokens, glassmorphism & typography
│       └── main.tsx             # Application DOM entry point
├── index.html                   # HTML template & font configurations
├── tailwind.config.js           # Tailwind theme customizations
├── tsconfig.json                # TypeScript compiler configuration
├── vercel.json                  # Deployment & rewrite rules
└── vite.config.ts               # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18 or later) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mayur-Shashidhar/Shunya.git
   cd Shunya
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or with bun / pnpm / yarn
   # bun install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📦 Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds the optimized production bundle into `dist/` |
| `npm run preview` | Locally preview the production build output |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🌐 Connect with SHUNYA

- **Instagram**: [@shunya_pes](https://www.instagram.com/shunya_pes/)
- **LinkedIn**: [SHUNYA — PES University](https://www.linkedin.com/company/shunya-pes/)
- **Email**: [shunya@pes.edu](mailto:shunya@pes.edu)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
