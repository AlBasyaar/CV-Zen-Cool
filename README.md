# CV-Zen-Cool

> A responsive web application for booking trusted air conditioning maintenance services.

> <p align="center">
  <img src="https://res.cloudinary.com/dr5pehdsw/image/upload/v1780475590/Halaman_Utama_zencool_miwc49.png" alt="CV-Zen-Cool Screenshot" width="100%">
</p>

![GitHub stars](https://img.shields.io/github/stars/AlBasyaar/CV-Zen-Cool?style=for-the-badge&logo=github) ![GitHub forks](https://img.shields.io/github/forks/AlBasyaar/CV-Zen-Cool?style=for-the-badge&logo=github) ![GitHub issues](https://img.shields.io/github/issues/AlBasyaar/CV-Zen-Cool?style=for-the-badge&logo=github) ![Last commit](https://img.shields.io/github/last-commit/AlBasyaar/CV-Zen-Cool?style=for-the-badge&logo=github) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Key Dependencies](#key-dependencies)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributing](#contributing)

## 📝 Description

CV-Zen-Cool is a professional web platform designed for CV Zen'cool, an air conditioning service provider offering routine washing, emergency repairs, and system installations. The application addresses the need for upfront, transparent pricing and reliable service booking, helping clients secure hassle-free AC maintenance without hidden fees.

Built with Next.js, TypeScript, and Tailwind CSS, the platform features a highly modular structure. The homepage layout organizes the user journey from an initial hero introduction and pricing tables to service galleries, testimonials, and structured FAQ sections, ensuring a clear and cohesive path to the final contact inquiry.

## ✨ Key Features

- **❄️ Upfront AC Service Directory** — Enables transparent listings for routine AC washing, system repairs, and installation services.
- **🎨 Tailwind & Custom Typography** — Utilizes Tailwind CSS styled with Syne and Space Grotesk Google Fonts for a sleek, modern visual aesthetic.
- **🧩 Modular Page Architecture** — Organizes the homepage into decoupled sections including FAQ, Testimonial, Gallery, and Pricing components.
- **📱 Responsive Next.js Layout** — Leverages the Next.js App Router and optimized metadata configurations to guarantee quick page loading and responsive scaling.

## 🎯 Use Cases

- Deploying a high-performance web landing page for an HVAC or AC servicing business.
- Presenting transparent service pricing, frequently asked questions, and direct booking inquiries to local clients.

## 🛠️ Tech Stack

- ▲ **Next.js**
- 🌬️ **Tailwind CSS**
- 📘 **TypeScript**

**Notable libraries:** Framer Motion

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/AlBasyaar/CV-Zen-Cool.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## 📦 Key Dependencies

```
framer-motion: ^12.40.0
lucide-react: ^1.16.0
next: 16.2.6
react: 19.2.4
react-dom: 19.2.4
```

## 🚀 Available Scripts

- **dev** — `npm run dev`
- **build** — `npm run build`
- **start** — `npm run start`
- **lint** — `npm run lint`

## 📁 Project Structure

```
.
├── AGENTS.md
├── CLAUDE.md
├── DESIGN.md
├── app
│   ├── components
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── Ticker.tsx
│   │   └── shared.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tsconfig.json
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/AlBasyaar/CV-Zen-Cool.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

---
*This README was generated with ❤️ by [ReadmeBuddy](https://readmebuddy.com)*
