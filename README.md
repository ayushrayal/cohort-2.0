# cohort-2.0 — Front-end practice projects

This repository contains front-end demos, small practice projects, and experiments created during the Sheryians Coding School — Cohort 2.0. The collection focuses on HTML/CSS/SCSS and interactive JavaScript (DOM) exercises.

---

## Repo structure (top-level)
- `1-HTML/` — Basic HTML exercises and references.
- `2-SCSS&CSS/` — SCSS and CSS experiments and demos.
- `3-AllTask/` — Larger example pages and tasks (resume site, background demos, Swiper carousel, card demos).
- `4-LenisJS/` — Lenis smooth-scrolling integration demo.
- `5-JavaScript/` — Notes, exercises and small examples for learning JavaScript.
- `6-JavaSCriptDOM/` — Mini DOM projects (Counter, Notepad, Create Element demos, Download demo, seasonal-change demo, etc.).
- `Fonts/` and `Photos/` — Local assets used by demos (fonts, images).

---

## Quick start — previewing demos locally
Many demos are static and can be opened directly in a browser by double-clicking `index.html`. For reliable file/fetch behavior and loading of local fonts, run a local static server from the repo root:

PowerShell example:

```powershell
cd "c:\Users\ayush\SheryiansClasses"
python -m http.server 8000
# cohort-2.0 — Front-end practice projects

This repository collects front-end demos, exercises and mini-projects created during the Sheryians Coding School (Cohort 2.0). It is intended as a learning playground for HTML, CSS/SCSS and vanilla JavaScript (DOM).

---

## What's new (summary)
- Cleaned and consolidated the top-level README content.
- Fixed `6-JavaSCriptDOM/12-FileUPloadMiniProject/script.js` (`fileinp.click()` typo) and added defensive checks.
- Improved `6-JavaSCriptDOM/10-Change` (background crossfade, fonts, heading animations).
- Added smoother cursor movement in `6-JavaSCriptDOM/14-MouseMove` using `requestAnimationFrame`.

---

## Structure (top-level)
- `1-HTML/` — Basic HTML exercises
- `2-SCSS&CSS/` — SCSS and CSS experiments, responsive demos
- `3-AllTask/` — Larger example pages and projects (resume, Swiper demos, cards)
- `4-LenisJS/` — Lenis smooth-scrolling demo
- `5-JavaScript/` — JS notes and exercises (variables, loops, functions, etc.)
- `6-JavaSCriptDOM/` — Mini DOM projects (Counter, NotePad, File upload, Season change, etc.)
- `Fonts/` and `Photos/` — Local assets used by demos

---

## Quick start — preview locally
Most demos are static and can be opened directly. For reliable asset loading and to avoid CORS, run a simple static server from the repo root.

PowerShell example:

```powershell
cd "c:\Users\ayush\SheryiansClasses"
python -m http.server 8000
# open http://localhost:8000/ in your browser
```

Or use a Node-based static server:

```powershell
npx http-server . -p 8000
```

---

## SCSS / Build
- Many demos include `style.scss` source files and compiled `style.css`. If you edit SCSS, recompile before previewing.

Compile example:

```powershell
npx sass path\\to\\style.scss path\\to\\style.css --no-source-map
```

---

## Notable demos
- `6-JavaSCriptDOM/10-Change` — Seasonal background crossfade with decorative fonts and heading animation.
- `6-JavaSCriptDOM/12-FileUPloadMiniProject` — File input demo (button triggers file chooser).
- `6-JavaSCriptDOM/14-MouseMove` — Cursor-follow demo with smooth movement.
- `3-AllTask/6-NoonWebsite` — Swiper carousel demo.

---

## Recommendations / Next steps
- Add a top-level `index.html` linking to each demo for quick browsing.
- Add per-demo `README.md` files for larger projects (I can generate these on request).
- Consider Git LFS for large fonts/media if the repo grows.

---

Last updated: 2025-12-15

If you want a specific change (add an index page, generate per-folder READMEs, or commit/push these changes), tell me which and I'll implement it.
- `3-Counter/` — Basic increment/decrement counter using DOM updates. Files: `index.html`, `script.js`.
