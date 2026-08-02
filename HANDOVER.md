# TinkerHub SNGCE Website — Maintainer Handover

This is a Next.js 15 + React + TypeScript website. Content is intentionally data-driven: update JSON files in `data/` instead of editing page components for routine content changes.

## Commands

```bash
# Install dependencies
npm install

# Run the development site
npm run dev

# Create a production build (run before deployment)
npm run build

# Start the production build locally
npm start

# Run unit tests
npm test
```

The development site runs at `http://localhost:3000` by default.

## Environment

Copy `.env.example` to `.env.local` when deploying or running with real SEO settings.

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-token
```

## Content files

| File | Purpose |
| --- | --- |
| `data/events.json` | Current and upcoming events |
| `data/previous_events.json` | Completed event archive, grouped by year |
| `data/studyJams.json` | Study Jam tracks |
| `data/links.json` | External form URLs and shared CTA links |
| `data/campus_hub.json` | Current Campus Hub teams |
| `data/previousCoreTeam.json` | Previous Core Team archive |
| `data/successStories.json` | Success Stories page cards |
| `data/spotlights.json` | Homepage / Spotlight page maker cards |
| `data/resources.json` | Resource Hub content |
| `data/stats.json` | Homepage statistics |
| `data/pillars.json` | TinkerHub Paradigm cards |
| `data/actionPlan.json` | Campus Action Plan cards and links |

Always keep JSON valid. An empty list must be written as `[]`, never as a blank file. `studyJams.json` is additionally protected by a safe API reader, so a temporary blank or malformed draft will display the empty state rather than crash the page.

## JSON structures

### Current / upcoming events — `data/events.json`

```json
[
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
]
```

Allowed status values are `Upcoming` and `Current` (capitalization is handled automatically). `registrationUrl` is used directly by the **Register** button, so use a complete `https://...` URL.

### Completed events — `data/previous_events.json`

```json
[
  {
    "id": "past-event-unique-id",
    "year": 2025,
    "date": "MAR 11 • 9:30 AM",
    "title": "Past event name",
    "location": "Offline • SNGCE",
    "desc": "Short event description.",
    "category": "Competition",
    "outcome": "54 participants",
    "highlight": true
  }
]
```

`year` is required: the Events page groups completed events by this value.

### Study Jams — `data/studyJams.json`

```json
[
  {
    "id": "track-unique-id",
    "title": "Full Stack Web & Next.js",
    "duration": "4 Weeks • Peer-to-Peer",
    "desc": "Short track description.",
    "level": "Beginner to Intermediate",
    "status": "Registration Open"
  }
]
```

Use `[]` when no tracks are available. The Study Jam page will show the “Welcome to the void” image automatically.

### Shared forms / CTA links — `data/links.json`

```json
{
  "forms": {
    "projectShowcase": "https://tally.so/r/your-project-form",
    "mentorApplication": "https://tally.so/r/your-mentor-form",
    "successStory": "https://tally.so/r/your-story-form"
  }
}
```

The Project Proposal, Mentor Application, Success Story, and Action Plan mentor CTAs read from this file.

### Success stories — `data/successStories.json`

```json
[
  {
    "id": "story-unique-id",
    "number": "01",
    "category": "From curiosity to code",
    "title": "Story headline",
    "story": "Story body text.",
    "highlight": "Short pull quote.",
    "accent": "var(--lime)",
    "emoji": "💻"
  }
]
```

Use CSS colour variables for `accent`: `var(--lime)`, `var(--pink)`, or `var(--lavender)`.

### Team archives — `data/campus_hub.json` and `data/previousCoreTeam.json`

Each member uses this shape:

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

For an earlier core team, update `year`, `label`, `eyebrow`, `color`, and the `members` array in `data/previousCoreTeam.json`.

## Images and branding assets

- Public images are under `public/images/` and are referenced as `/images/...` in JSON.
- The favicon is `app/icon.jpg`.
- The empty-state image is `public/images/empty-states/welcome-to-the-void.png`.
- If an image does not exist, team and spotlight cards use a gradient fallback instead of showing a broken image.

## Adding a page

1. Create `app/<route>/page.tsx`.
2. Use `PageShell`, `PageHeader`, and `BackHomeLink` for consistent navigation, footer, and styling.
3. Add the route to `components/NavOverlay.tsx`, `components/Footer.tsx`, and `app/sitemap.ts` when it should be publicly discoverable.
4. Prefer a component in `components/` plus JSON data in `data/` for repeatable card-based content.
5. Run `npm run build` before publishing.

## Design conventions

- Global CSS is in `app/globals.css`.
- Shared colour variables are defined at the top of that file.
- The display pixel font is exposed as `var(--font-pixel)`; it uses Pixelify Sans for clear lowercase glyphs.
- Reuse `.btn`, `.btn--solid`, `.btn--outline`, `.page-actions`, `.pillar-card`, and `.event-card` instead of adding one-off button/card styles.

## Deployment checklist

```bash
npm install
npm run build
```

Before publishing, verify:

- All external registration and form URLs work.
- `NEXT_PUBLIC_SITE_URL` matches the deployed domain.
- All content JSON files are valid JSON.
- New public pages are included in the sitemap and navigation if appropriate.
