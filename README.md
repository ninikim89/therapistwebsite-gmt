# Dr. Maya Reynolds, PsyD — Therapy Website

A modern, responsive therapy website built with **Next.js** and **Tailwind CSS** for Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica, CA.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Images:** Next.js Image Optimization

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
gmt-assignment/
├── app/
│   ├── globals.css       # Global styles & Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composing all sections
── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── EmpathySection.tsx
│   ├── WhoWeHelpSection.tsx
│   ├── SpecialtiesSection.tsx
│   ├── MethodsSection.tsx
│   ├── OfficeSection.tsx
│   ├── AboutSection.tsx
│   ├── FaqSection.tsx
│   ├── CtaSection.tsx
│   ├── Footer.tsx
│   ├── BreathingPacer.tsx
│   └── IntakeModal.tsx
├── public/
│   └── maya-photo.png    # Dr. Maya Reynolds' photo
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── tsconfig.json
```

## Design Theme

- **Primary:** Forest Sage (#1C382B)
- **Secondary:** Terracotta (#8A5A43)
- **Accent:** Eucalyptus Light (#3D6B57)
- **Background:** Sand Canvas (#FAF8F5)
- **Typography:** Playfair Display (headings) + Plus Jakarta Sans (body)

## Deployment

This project is ready to deploy on **Vercel**:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.
