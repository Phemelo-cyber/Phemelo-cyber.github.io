# Phemelo-cyber — Portfolio

A single-page, dark "systems/terminal" themed portfolio site.

## Files
- `index.html` — all page content (hero, about, skills, projects, contact)
- `style.css` — styling and theme
- `script.js` — typing effect, scroll reveal, skill meters, decorative contribution graph
- `assets/profile.jpg` — your profile photo

## Deploy to GitHub Pages (free)
1. Create a new repo on GitHub, e.g. `Phemelo-cyber.github.io` (using this exact name makes it your root portfolio URL) or any repo name for a project page.
2. Push these files to the repo:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Phemelo-cyber/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/root`, then save.
4. Your site will be live at `https://phemelo-cyber.github.io/` (if you used the `.github.io` repo name) or `https://phemelo-cyber.github.io/YOUR-REPO-NAME/` otherwise.

## Things to edit before publishing
- **Projects**: swap the two "in progress" placeholder cards in `index.html` for real projects (title, description, tags, repo/demo links). Add the LuxeStay repo/demo links where marked.
- **Contact**: replace the placeholder LinkedIn and email links in the Contact section.
- **GitHub link**: currently points to `https://github.com/Phemelo-cyber` — update if this isn't your exact GitHub URL.
- **Contribution graph**: the graph in the Skills section is decorative/randomised for visual effect, not your real GitHub activity. If you want a live version, replace it with a real GitHub contributions widget (e.g. via a GitHub stats API/image service).

## Notes
- No build step or dependencies — just open `index.html` in a browser, or deploy as-is.
- Fonts (JetBrains Mono, Inter) and Font Awesome icons load from CDN, so an internet connection is needed for full styling.
