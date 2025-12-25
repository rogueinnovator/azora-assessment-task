# Setapp Landing Page Clone

A modern, pixel-perfect clone of the Setapp landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project was created as an assessment task for **[Azora.group](https://azora.group)**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Live Demo

[View Live Demo on Vercel](https://azora-assessment-task.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)

## ✨ Features

- ✅ **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Component-Based Architecture** - Reusable and maintainable components
- ✅ **TypeScript** - Type-safe code for better development experience
- ✅ **Tailwind CSS** - Utility-first CSS framework for rapid styling
- ✅ **Next.js 15** - Latest features including App Router and Server Components
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Performance Optimized** - Fast loading with Next.js Image optimization
- ✅ **Accessible** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** Custom SVG components
- **Deployment:** [Vercel](https://vercel.com/)
- **Package Manager:** npm/yarn/pnpm

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rogue-innovator/azora-assessment-task.git
cd azora-assessment-task
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
azora-assessment-task/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar component
│   │   ├── Hero.tsx             # Hero section with animated stickers
│   │   ├── Features.tsx         # Features showcase section
│   │   ├── JourneyCarousel.tsx  # Journey carousel with testimonials
│   │   ├── Testimonials.tsx     # Customer testimonials grid
│   │   ├── SuperpowerCard.tsx   # CTA card component
│   │   ├── Footer.tsx           # Footer with links and newsletter
│   │   ├── Icons.tsx            # SVG icon components
│   │   └── Logo.tsx             # Setapp logo component
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Home page
├── public/
│   └── icons/                   # Static icon assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🧩 Components

### Navbar
- Fixed navigation bar with logo and menu items
- Responsive mobile menu
- Smooth scroll behavior

### Hero
- Eye-catching hero section with main CTA
- Animated sticker elements positioned around content
- Fully responsive with mobile-optimized layout

### Features
- Grid layout showcasing key features
- Interactive cards with hover effects
- Custom icons and imagery

### JourneyCarousel
- Auto-playing carousel with manual controls
- Smooth transitions between slides
- Pagination dots for navigation
- Split background design (dark/light)

### Testimonials
- Grid layout of customer testimonials
- Carousel navigation with pagination
- Social media platform indicators
- Card-based design with author info

### SuperpowerCard
- Call-to-action section
- Pricing information
- Action buttons for conversion

### Footer
- Multi-column link organization
- Newsletter signup form
- Social media links
- Copyright and legal information

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Done!** Your app will be live at `https://azora-assessment-task.vercel.app/`

### Environment Variables

No environment variables are required for this project.

## 🎨 Design Decisions

- **Color Scheme:** Maintained Setapp's original color palette with dark backgrounds and vibrant accent colors
- **Typography:** Used Avenir Next font family for headings to match the original design
- **Spacing:** Consistent spacing using Tailwind's spacing scale
- **Animations:** Subtle hover effects and transitions for better UX
- **Responsiveness:** Mobile-first approach with breakpoints at sm (640px), md (768px), and lg (1024px)

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting (recommended)

## 📝 Assessment Notes

This project was created as an assessment task for **Azora.group**. The goal was to demonstrate:

- Proficiency in modern React/Next.js development
- Understanding of TypeScript and type safety
- Ability to create responsive, pixel-perfect designs
- Component-based architecture and code organization
- Performance optimization techniques
- Clean, maintainable code practices

## 👤 Author

**Muhammad Huzaifa**
- GitHub: [@rogue-innovator](https://github.com/rogue-innovator)
- LinkedIn: [Muhammad Huzaifa](https://www.linkedin.com/in/muhammad-huzaifa-ali-49aa94259)

---

**Note:** This is a clone project created for assessment purposes only. All rights to the original Setapp design belong to their respective owners.
