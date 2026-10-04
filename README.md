<div align="center">

<pre>
████████╗██╗███╗   ██╗██╗  ██╗███████╗██████╗ ██╗  ██╗██╗   ██╗██████╗ 
╚══██╔══╝██║████╗  ██║██║ ██╔╝██╔════╝██╔══██╗██║  ██║██║   ██║██╔══██╗
   ██║   ██║██╔██╗ ██║█████╔╝ █████╗  ██████╔╝███████║██║   ██║██████╔╝
   ██║   ██║██║╚██╗██║██╔═██╗ ██╔══╝  ██╔══██╗██╔══██║██║   ██║██╔══██╗
   ██║   ██║██║ ╚████║██║  ██╗███████╗██║  ██║██║  ██║╚██████╔╝██████╔╝
   ╚═╝   ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ 
                          S N G C E   C H A P T E R
</pre>

**the space between dream & reality — TinkerHub SNGCE campus chapter website**

<img src="https://img.shields.io/badge/Next.js-0A0A0A?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-0A0A0A?style=for-the-badge&logo=typescript&logoColor=38bdf8" alt="TypeScript" />
<img src="https://img.shields.io/badge/MAKERS-FF4FD1?style=for-the-badge&logoColor=white" alt="Makers" />
<img src="https://img.shields.io/badge/BUILD%20IN%20PUBLIC-C6FF00?style=for-the-badge&color=C6FF00&labelColor=0A0A0A" alt="Build in public" />

<br/>

<img src="https://img.shields.io/badge/PRs-welcome-C6FF00?style=flat-square&labelColor=0A0A0A" alt="PRs welcome" />
<img src="https://img.shields.io/badge/status-active-FF4FD1?style=flat-square&labelColor=0A0A0A" alt="Status: active" />
<img src="https://img.shields.io/badge/chapter-SNGCE-C9B8F5?style=flat-square&labelColor=0A0A0A" alt="Chapter: SNGCE" />
<img src="https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square&labelColor=0A0A0A" alt="License: MIT" />

[Live Site](#) · [Overview](#-overview) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Design System](#-design-system) · [Getting Started](#-getting-started) · [Contributing](#-contributing) · [Roadmap](#-roadmap)

</div>

---

**TinkerHub SNGCE** is the website for the Sree Narayana Gurukulam College of Engineering chapter of TinkerHub — a community of tinkerers, makers, and students building things together on campus. It's a scrapbook/zine-styled site: polaroid photo cards, pushpins, marquee tickers, and a full-screen nav overlay, built with Next.js.

> *"Everyone has access to the knowledge required to set the course for a better future."*

---

## ✦ Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Team](#-team)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🌟 Overview

**TinkerHub SNGCE** is built to bridge the gap between technology education and practical implementation. This web application serves as the centralized digital platform for student makers at Sree Narayana Gurukulam College of Engineering, offering learning resources, event registrations, community spotlights, and study jam tracks.

---

## ✨ Features

- 🚀 **Dynamic Homepage**: Interactive maker ethos, four core pillars, community impact statistics, core team roster, and live study jam announcements.
- ⚡ **Study Jams (`/study-jam`)**: Dedicated peer-to-peer technology learning circles and hands-on track modules.
- 📅 **Events Hub (`/events`)**: Detailed listing of upcoming workshops, hackathons, registration workflows, and an archive of past community events.
- 🧰 **Resource Hub (`/resources`)**: Curated directory of developer guides, learning roadmaps, tools, and study materials.
- 🌟 **Maker Spotlight (`/spotlight`)**: Highlights outstanding student projects, maker achievements, and community stories.
- 🏫 **Campus Hub (`/campus`)**: Detailed information on the SNGCE campus chapter, team, and vision.
- 💬 **Community Access Portals (`/whatsapp`, `/discord`)**: Seamless entry points to official WhatsApp & Discord channels.
- ✉️ **Interactive Contact Modal**: Embedded registration and contact flow for event enrollment and general inquiries.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- **UI & View Layer**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling & Fonts**: Modern typography with Google Fonts (`Press Start 2P`, `Anton`, `Playfair Display`, `Special Elite`, `Caveat`, `Poppins`, `Instrument Serif`), dark mode glassmorphism, & micro-animations
- **Content Architecture**: Data-driven JSON schema design (`/data/*.json`)
- **Code Quality**: ESLint 9

---

## 🎨 Design System

The platform features a distinct, maker-focused aesthetic with rich typography and dynamic interactive elements:

- **Retro & Modern Typography**: Combines pixel fonts (`Press Start 2P`), bold headlines (`Anton`), serif accents (`Playfair Display`, `Instrument Serif`), and clean body text (`Poppins`).
- **Four Core Pillars**: Focus on Learn, Build, Share, and Empower.
- **Micro-Animations**: Scroll reveals, interactive cursor effects, hover states, and smooth overlays.

---

## 📁 Directory Structure

```text
tinkerhub-web/
├── app/                  # Next.js App Router pages & layouts
│   ├── campus/           # Campus Hub page
│   ├── discord/          # Discord community portal page
│   ├── events/           # Events & Workshops page
│   ├── resources/        # Resource Hub page
│   ├── spotlight/        # Maker Spotlight page
│   ├── study-jam/        # Study Jams page
│   ├── whatsapp/         # WhatsApp community portal page
│   ├── globals.css       # Global styles & font CSS variables
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Homepage root component
├── components/           # Reusable UI components
│   ├── ActionPlan.tsx    # Maker community action plan
│   ├── ContactModal.tsx  # Interactive contact & registration modal
│   ├── CoreTeam.tsx      # Core team member display grid
│   ├── EventsSection.tsx # Event showcase component
│   ├── Hero.tsx          # Hero section with animated elements
│   ├── NavOverlay.tsx    # Fullscreen navigation menu overlay
│   ├── ResourceHub.tsx   # Curated resource catalog grid
│   └── ...               # Additional section components
├── data/                 # JSON files powering dynamic content
│   ├── actionPlan.json   # Action plan steps & timeline
│   ├── campus_hub.json   # Campus chapter info & leads
│   ├── coreTeam.json     # Core team details & socials
│   ├── events.json       # Upcoming event schedules & links
│   ├── previous_events.json # Past events archive
│   ├── resources.json    # Curated learning resources
│   ├── spotlights.json   # Student project spotlights
│   ├── studyJams.json    # Active & upcoming Study Jams
│   └── ...               # Additional configuration JSONs
├── public/               # Static assets & images
└── next.config.ts        # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ABHIRAM-CREATOR06/tinkerhub-web.git
   cd tinkerhub-web
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles and builds the production application.
- `npm run start`: Runs the built application in production mode.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.

---

## 📊 Managing Site Content

Site content is decoupled from components and stored as JSON files inside the [`data/`](./data) directory. You can update website content without modifying component code:

| File | Description |
| :--- | :--- |
| `data/events.json` | Manage upcoming events, dates, descriptions, and registration forms |
| `data/studyJams.json` | Update active and upcoming Study Jam tracks and details |
| `data/resources.json` | Add or update learning resources, links, and categories |
| `data/coreTeam.json` | Update campus core team roster and social links |
| `data/spotlights.json` | Feature new student projects and maker stories |

---

## 🗺️ Roadmap

- [x] Initial release of TinkerHub SNGCE Web Platform
- [x] Study Jam tracks & Resource Hub implementation
- [x] WhatsApp & Discord community hubs integration
- [ ] Direct project submission portal for Student Spotlights
- [ ] Interactive event calendar & reminder 

---

## 🤝 Contributing

Contributions are always welcome! If you'd like to improve the site or add features:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 💚 Acknowledgments

- **TinkerHub Foundation** — Inspiring tech learning and maker culture across Kerala.
- **TinkerHub SNGCE Chapter** — Sree Narayana Gurukulam College of Engineering.
