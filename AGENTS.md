# Charles Wade Portfolio

A single-page static portfolio website. No build system or package manager.

## Cursor Cloud specific instructions

- This is a purely static site: `index.html`, `styles.css`, and `script.js`. There are no dependencies to install and no build step.
- Styling/icons/fonts load from CDNs at runtime (Tailwind via `cdn.tailwindcss.com`, Lucide via `unpkg.com`, Inter via Google Fonts). Network egress is required for the page to render fully; opening it offline shows unstyled content.
- To run locally, serve the folder over HTTP (e.g. `python3 -m http.server 8000`) and open `http://localhost:8000/index.html`. Serving over HTTP (not `file://`) is recommended so relative asset paths resolve correctly.
- There is no lint/test/build tooling configured in this repo. Deployment is via GitHub Pages from `main`.
