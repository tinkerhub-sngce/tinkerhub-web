# TinkerHub SNGCE Website — Maintainer Handover Guide

*A plain-language guide for whoever takes over this project next.*

Repository: https://github.com/tinkerhub-sngce/tinkerhub-web
Live site: https://tinkerhub-web.vercel.app

---

## 1. What is this project, in simple words?

This is the official website for the **TinkerHub SNGCE chapter** — the campus maker/tech community at Sree Narayana Gurukulam College of Engineering.

The site tells people:
- What TinkerHub SNGCE is and what it stands for
- What events are coming up (and what happened in past events)
- What "Study Jams" (peer learning groups) are running right now
- Useful learning resources (guides, roadmaps, tools)
- Cool projects made by students ("Spotlight")
- Who is on the core team
- How to join the WhatsApp / Discord community

You do **not** need to be a design expert or a senior developer to maintain this site. Most day-to-day updates (adding an event, updating the team list, etc.) just mean editing simple text files — no real coding required. This guide explains everything step by step.

---

## 2. What is this website built with?

Think of it like this — the site has two layers:

| Layer | What it does | In simple terms |
|---|---|---|
| **Next.js + React + TypeScript** | The actual code that builds the pages | This is the "engine" of the site. You'll rarely need to touch this for routine updates. |
| **JSON data files** (inside the `data/` folder) | The actual content — events, team names, resources, etc. | This is the "content" of the site. This is what you'll edit 90% of the time. |

This separation is intentional and is the most important thing to understand: **you change what's on the site by editing JSON files, not by editing code.**

Other things used:
- **ESLint** — automatically checks the code for mistakes
- **Jest** — automated tests that check nothing is broken
- Custom fonts (pixel-style, bold headline, handwriting-style, etc.) give the site its "scrapbook/zine" look — polaroid photo cards, pushpins, scrolling tickers, and a full-screen menu.

---

## 3. Getting the project running on your own computer

You only need to do this once (per computer).

### Step 1 — Install Node.js (the required tool)

This project needs **Node.js** (version 18 or newer). `npm` (Node's package manager) comes bundled with it automatically, so you don't need to install that separately.

**Check if you already have it:**

```
node -v
npm -v
```

If you see version numbers (e.g. `v20.11.0`), you already have Node.js and can skip to Step 2. If you get a "command not found" error, follow the instructions below for your operating system.

#### Windows

1. Go to https://nodejs.org
2. Download the **LTS** version (LTS = "Long Term Support" — the stable, recommended one, not the "Current" version)
3. Run the downloaded `.msi` installer and click through it using all the default options
4. Restart any open Command Prompt / PowerShell / terminal windows
5. Confirm it worked by running `node -v` and `npm -v` in a new terminal window

#### macOS

**Option A — Direct installer (simplest):**
1. Go to https://nodejs.org
2. Download the **LTS** version's macOS installer (`.pkg`)
3. Run it and click through the installer
4. Confirm with `node -v` and `npm -v` in a new Terminal window

**Option B — Using Homebrew (if you already use Homebrew):**
```
brew install node
```

#### Linux (Ubuntu/Debian)

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Then confirm with:
```
node -v
npm -v
```

#### Recommended alternative for any OS — using `nvm` (Node Version Manager)

If you think you might need to switch between Node versions later, or just want an easier way to manage installs/updates, use `nvm` instead of a direct installer:

- **macOS/Linux:**
  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  ```
  Close and reopen your terminal, then run:
  ```
  nvm install --lts
  nvm use --lts
  ```

- **Windows:** install `nvm-windows` from https://github.com/coreybutler/nvm-windows/releases, then run:
  ```
  nvm install lts
  nvm use lts
  ```

Either method leaves you with working `node` and `npm` commands — use whichever feels easier.

### Step 2 — Download the project

```
git clone https://github.com/tinkerhub-sngce/tinkerhub-web.git
cd tinkerhub-web
```

### Step 3 — Install everything the project needs

```
npm install
```

This reads `package.json` and downloads all the required code libraries. It may take a minute or two — this is normal.

### Step 4 — Start the site on your computer

```
npm run dev
```

Now open your browser and go to **http://localhost:3000** — you should see the live site running on your machine. Any change you make to a file will show up automatically after you save it.

### Other useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Runs the site locally so you can preview changes |
| `npm run build` | Builds the "real" production version of the site (always run this before deploying, to catch errors) |
| `npm start` | Runs that production build locally |
| `npm run lint` | Checks the code for style/quality issues |
| `npm test` | Runs the automated tests |

---

## 4. How the project folders are organized

You don't need to memorize this, just know where to look:

```
tinkerhub-web/
├── app/            → The actual pages of the website (Home, Events, Resources, etc.)
├── components/     → Reusable building blocks used across pages (buttons, cards, nav menu…)
├── data/           → ⭐ THE CONTENT. Edit these JSON files to change what's on the site.
├── hooks/          → Small reusable pieces of logic used by components
├── public/images/  → All images and static files (team photos, icons, etc.)
├── __tests__/      → Automated tests
├── .env.example    → Template for environment/config settings
└── HANDOVER.md     → A more technical handover doc already left by the previous maintainer
```

**Rule of thumb:** if you're asked to "update an event" or "add a team member," you almost always go to the `data/` folder — not `app/` or `components/`.

---

## 5. The most common task: updating website content

This is what you'll be doing most often. All content lives as JSON files in the `data/` folder. JSON is just a structured text format — a list of items, each with labeled fields (like a spreadsheet, but written as text).

**Important rule:** JSON has strict formatting. A missing comma or bracket can break the whole page. If you're not confident editing JSON by hand, you can paste your file into a free tool like https://jsonlint.com before saving, to check it's valid. If a list has nothing in it, write `[]` — never leave the file completely empty.

Here are the main content files and what they control:

| File | What it controls |
|---|---|
| `data/events.json` | Upcoming and current events |
| `data/previous_events.json` | Archive of past/completed events |
| `data/studyJams.json` | Active Study Jam learning tracks |
| `data/resources.json` | The Resource Hub (guides, tools, links) |
| `data/spotlights.json` | Student project highlights on the homepage/Spotlight page |
| `data/coreTeam.json` / `data/campus_hub.json` | Current core team roster |
| `data/previousCoreTeam.json` | Past team archive |
| `data/successStories.json` | Success story cards |
| `data/stats.json` | Homepage statistics (numbers shown) |
| `data/pillars.json` | The four core pillars (Learn, Build, Share, Empower) |
| `data/actionPlan.json` | Campus action plan steps |
| `data/links.json` | Shared external links, like registration form URLs |

### Example: Adding a new event

Open `data/events.json`. You'll see a list of items that look like this:

```json
{
  "id": "event-unique-id",
  "status": "Upcoming",
  "statusBadge": "📅 Upcoming Event",
  "date": "AUG 07 • 1:20 PM",
  "title": "Event name",
  "location": "Venue • SNGCE",
  "desc": "Short event description.",
  "category": "Workshop",
  "registrationUrl": "https://registration-link.example"
}
```

To add a new event, copy one of these blocks, paste it into the list, give it a unique `id`, and fill in your own details. Save the file, and (if the dev server is running) you'll see it appear on the site right away.

A few things to double check:
- `status` should be either `"Upcoming"` or `"Current"`
- `registrationUrl` needs to be a full link starting with `https://`
- Every item needs its own unique `id`

The same copy-paste-and-edit approach works for every other file in `data/` — just follow the pattern of the existing entries.

### Example: Updating the team

`data/coreTeam.json` and `data/campus_hub.json` hold team member info, in this shape:

```json
{
  "id": "member-unique-id",
  "name": "Member name",
  "role": "Role",
  "tag": "SHORT TAG",
  "dept": "Department",
  "image": "/images/team/member.jpg",
  "gradient": "linear-gradient(135deg, #FF4FD1, #800860)",
  "bio": "Short biography.",
  "github": "https://github.com/username",
  "linkedin": "https://www.linkedin.com/in/username/"
}
```

If a member's photo file doesn't exist yet, don't worry — the site automatically shows a nice colour gradient instead of a broken image.

### Where do images go?

Put image files inside `public/images/` (there's usually a subfolder like `public/images/team/`). Then reference them in the JSON as `/images/your-file-name.jpg`.

---

## 6. Adding a whole new page (a bit more advanced)

Only do this if you actually need a brand-new section (not just new content in an existing section).

1. Create a new folder in `app/`, e.g. `app/new-page/`, and inside it a `page.tsx` file.
2. Reuse the existing `PageShell`, `PageHeader`, and `BackHomeLink` components so the new page matches the site's look and navigation — you don't need to build these from scratch.
3. If the page should appear in the main menu, add a link to it in `components/NavOverlay.tsx` and `components/Footer.tsx`, and also add it to `app/sitemap.ts` (so search engines can find it).
4. If the page shows a list of repeatable items (cards), prefer creating a data file in `data/` plus a small component in `components/`, rather than hardcoding content into the page.
5. Always run `npm run build` afterward to make sure nothing is broken.

---

## 7. Visual style — keeping things consistent

The site has a deliberate "scrapbook/zine" look — pixel fonts, bold headlines, handwriting-style accents, polaroid-style cards, pushpins. To keep new additions consistent:

- All shared colours are defined near the top of `app/globals.css` — reuse them instead of inventing new colours.
- Reuse existing CSS classes like `.btn`, `.btn--solid`, `.btn--outline`, `.pillar-card`, and `.event-card` instead of writing new one-off styles for buttons and cards.
- The main pixel-style display font is available as `var(--font-pixel)`.

---

## 8. Environment settings (for deployment)

There's a file called `.env.example` that lists the settings the site expects. When deploying (or if you want production-like SEO behavior locally), copy it to a new file called `.env.local` and fill in the real values:

```
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-token
```

`.env.local` is intentionally left out of the code repository (via `.gitignore`) since it can contain deployment-specific settings — this is normal and expected.

---

## 9. Publishing changes (deployment)

The live site is hosted on **Vercel** (visible from the "About" section of the GitHub repo: tinkerhub-web.vercel.app). Vercel typically rebuilds and republishes the site automatically whenever changes are pushed to the `main` branch on GitHub.

Before pushing changes that should go live, always:

1. Run `npm install` (in case dependencies changed)
2. Run `npm run build` — this catches errors before they reach the live site
3. Double-check that any external links (registration forms, socials) actually work
4. Make sure every JSON file you touched is still valid (no missing commas/brackets)
5. If you added a new public page, confirm it's linked in the navigation and sitemap

---

## 10. If you want to contribute a code change (not just content)

1. Create your own branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Commit them: `git commit -m "Describe what you changed"`
4. Push the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request on GitHub so it can be reviewed before merging into `main`

---

## 11. Where to go if you're stuck

- The repository already includes a more technical `HANDOVER.md` file with exact JSON schemas for every data file — treat this guide as the "plain language" companion to that one.
- TinkerHub SNGCE's community channels (WhatsApp/Discord, linked from the site itself) are the best place to ask the previous core team or other student contributors for help.
- For anything code-related that feels intimidating: start small. Editing a JSON file in `data/` is a safe, low-risk way to get comfortable with the project before touching any actual code in `app/` or `components/`.

---

*This guide is meant to get a new maintainer productive quickly, without needing deep prior knowledge of Next.js or React. When in doubt: content changes go in `data/`, page changes go in `app/`, and reusable pieces go in `components/`.*
