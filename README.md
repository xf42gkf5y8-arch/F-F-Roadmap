# Feed & Grow Expansion Roadmap

Public development roadmap for the Feed and Grow: Fish expansion/modding project.

## Stack

- Vite
- React
- TypeScript
- React Router
- CSS

The site is intentionally static and data-first. Roadmap state lives in `src/data/` and page components consume those shared records rather than duplicating status values.

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

## Content model

Primary authoritative roadmap data lives in `src/data/roadmap.ts`. Map, fish, and Wild-mode records reference roadmap item IDs so shared status values stay synchronized across pages.

No progress percentage or ETA should be added unless it has been explicitly provided for the project.

## Deployment

The Vite output is deployable to Vercel as a static project. `vercel.json` rewrites client-side routes to `index.html` so direct navigation to `/roadmap`, `/maps`, `/fish`, and other routes continues to work.

Deployment is intentionally not automated from this repository baseline.
