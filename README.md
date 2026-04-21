# Matthew Hwyjoon Jeon — Portfolio

AI Researcher & Engineer — Generative Models · Diffusion · LLMs · Multimodal AI

Live: https://matthewjeon.github.io/

## Structure

- `index.html` — main entry
- `data.js` — content (bilingual EN/KO, publications, projects)
- `v4-macapp.jsx` — layout component

## Local preview

```bash
# any static server works, e.g.
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Deploy (GitHub Pages)

1. Push this repo to `MatthewJeon.github.io` (the repo name must match your username).
2. Settings → Pages → Source: `Deploy from branch` → `main` / `root` → Save.
3. Visit `https://matthewjeon.github.io/`.

## Editing content

All copy (name, bio, publications, projects, links) lives in **`data.js`**.
Each entry is bilingual — `{ en: "...", ko: "..." }`.
