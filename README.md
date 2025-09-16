# Loadistics – Section 1 Web App

Single-section training deck with Trainer Mode, built with Vite + React + Tailwind.

## One‑time setup
```bash
npm i
```

## Run locally
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `loadistics-section1-webapp`).
2. In `vite.config.js`, set `base: '/<your-repo-name>/'` if different from the default.
3. Commit and push this project to your repo's `main` branch.
4. Run:
   ```bash
   npm run deploy
   ```
   This publishes the `dist/` folder to the `gh-pages` branch.
5. In your repo settings → Pages, pick the `gh-pages` branch as the source. Your site will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

## Notes
- Upload your logo via the Upload control to show a faint watermark.
- Trainer Mode toggles trainer notes + quiz answers.
