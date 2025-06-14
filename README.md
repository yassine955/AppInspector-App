# AppInspector

**AppInspector** is a front-end application built using **Next.js**, **TailwindCSS**, and **Drizzle ORM**, connected to a **PostgreSQL** database.  
This project is funded by the Dutch government with the objective of tracking, analyzing, and classifying mobile applications based on their risk profile.

## Project Overview

AppInspector serves as a risk assessment interface for mobile applications. It visualizes and manages app metadata, version history, platform distribution, and associated risk categories. The underlying risk model aims to support compliance, forensic analysis, and policy development.

## Features

- 📱 Application search and filtering
- 📊 Risk-based classification and scoring
- 🧩 Integration with PostgreSQL via Drizzle ORM
- 🧠 Dynamic UI built with TailwindCSS
- ⚡ Fast and scalable rendering with Next.js
- 🔒 Government-funded research application

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** PostgreSQL

## Getting Started

### Prerequisites

- Environment variables configured (see `.env.example`)

```
📦 appinspector-app
├── 📁 components # Reusable UI components
│ ├── Body.tsx
│ ├── Footer.tsx
│ ├── IconWithLoading.tsx
│ ├── Loading.tsx
│ ├── Navbar.tsx
│ └── SearchEngine.tsx
├── 📁 pages # Next.js page routes
│ ├── 📁 api
│ │ ├── 📁 icon
│ │ │ └── [id].ts
│ │ └── find_app.ts
│ ├── 📁 app
│ │ ├── result.tsx
│ │ └── results.tsx
│ ├── index.tsx
│ ├── info.tsx
│ ├── \_app.tsx
│ └── \_document.tsx
├── 📁 public # Static assets
│ ├── angry.svg
│ ├── background-network.svg
│ ├── favicon.ico
│ ├── file.svg
│ ├── globe.svg
│ ├── happy.svg
│ ├── logo-app.svg
│ ├── logo.png
│ ├── middle.svg
│ ├── Network-No-Background (1).png
│ ├── Network-No-Background.png
│ ├── next.svg
│ ├── red-icon.png
│ ├── scattered-forcefields.svg
│ ├── search-icon.svg
│ ├── vercel.svg
│ └── window.svg
├── 📁 src # Source files
│ ├── 📁 drizzle # DB setup (Drizzle ORM)
│ │ ├── 📁 migrations
│ │ │ ├── 📁 meta
│ │ │ │ ├── 0000_snapshot.json
│ │ │ │ ├── 0001_snapshot.json
│ │ │ │ └── \_journal.json
│ │ │ ├── 0000_hesitant_goblin_queen.sql
│ │ │ └── 0001_overjoyed_shiver_man.sql
│ │ ├── 📁 schema
│ │ │ ├── apps.ts
│ │ │ └── index.ts
│ │ ├── db.ts
│ │ └── migrate.ts
│ └── 📁 lib
│ └── getAppByTitle.ts
├── 📁 styles # Global CSS
│ └── globals.css
├── .env
├── .eslintrc
├── .gitattributes
├── .prettierignore
├── .prettierrc
├── drizzle.config.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
```
