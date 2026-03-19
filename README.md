# Portfolio

Personal site built with React, TypeScript, [Vite](https://vite.dev/), and Tailwind CSS.

## Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Dev server (default: [http://localhost:5173](http://localhost:5173)) |
| `npm start`        | Same as `npm run dev`                            |
| `npm run build`    | Typecheck (`tsc`) then production build → `dist/` |
| `npm run preview`  | Serve the `dist/` build locally                  |
| `npm test`         | [Vitest](https://vitest.dev/) (watch mode in TTY) |
| `npm run test:run` | Single Vitest run (e.g. CI)                      |

## Environment variables

Vite exposes only variables prefixed with `VITE_`. Use `import.meta.env.VITE_*` in application code (see [Vite env docs](https://vite.dev/guide/env-and-mode.html)).

## Deploy

Production output is **`dist/`**. Netlify is configured in `netlify.toml` with SPA fallback to `index.html`.
