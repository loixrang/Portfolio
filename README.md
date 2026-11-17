# Samuel Akpabio — portfolio

A dark, lime-accented portfolio built with React, TypeScript, Vite, Motion for React, Lucide, and React Icons. Fonts are self-hosted.

## Development

Use Bun (the repository includes `bun.lock`).

```sh
bun install
bun run dev
```

```sh
bun run build       # TypeScript checks and production build
bun run preview     # Preview the dist output
bun run typecheck   # TypeScript checks only
bun run format      # Format project source
```

## Structure

```text
src/
  App.tsx                   Page composition
  components/
    layout/                 Header, footer, scroll progress
    sections/               Hero, work, stack, about, contact
    hero/                   Interactive architecture explorer
    projects/               Cards, native dialog, SVG/CSS previews
    ui/                     Shared logo and technology tags
  data/                     Profile, projects, categories, navigation,
                            architecture layers, and technology groups
  hooks/                    URL filters, active section, clipboard
  types/                    Shared project types
  styles.css                Design tokens and component styles
  responsive.css            Breakpoints and reduced-motion overrides
```

## Content

- Update contact information in `src/data/profile.ts`.
- Edit technologies in `src/data/technologies.ts`.
- Edit projects in `src/data/projects.ts` and shared fields in `src/types/project.ts`.
- Orbit, Relay, and Tempo are explicitly labeled illustrative concepts, not verified shipped projects. Replace them with Samuel's real projects before presenting the site as a work history. Preview interfaces contain sample data.
- Contact links open the visitor's email client; no backend or form submission service is required.

## Interactions and accessibility

The architecture layers are keyboard-accessible buttons. Project filters preserve their state in the URL and respond to browser Back/Forward. Project details use a native modal dialog with Escape dismissal and focus containment. Animations respect reduced-motion preferences, and the page includes a skip link and visible keyboard focus states.

## Deployment

The build produces a static `dist/` folder. For Vercel or Render static hosting, use `bun install --frozen-lockfile && bun run build` as the build command and `dist` as the output directory. No environment variables are required.

## Animation skill

The requested `gsap-framer-scroll-animation` skill from `github/awesome-copilot` is installed locally in `.agents/skills/`. Motion is implemented with the `motion/react` API.
