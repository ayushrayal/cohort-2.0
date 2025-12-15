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
- `4-RandomThingWithAPI/` — Fetches and displays random images from Picsum; button to fetch new image. Files: `index.html`, `script.js`.
- `5-QuotesGeneratorWithAPI/` — Uses `https://dummyjson.com/quotes/random` to fetch a random quote and author.
- `6-NotePad/` — Simple note-taking demo that appends tasks to a list, deletes the last task, and marks top priority.
- `7-MiniProjectOFCreateElementAndApendChild/` — Random boxes generator that creates elements using `createElement` and `appendChild`.
- `8-MiniProjectOFCreateElementAndApendChildWithMousemove/` — Variant that spawns elements on mouse move.
- `9-Download/` — Simulates file download progress with a progress bar and percentage text.
- `10-Change/` — Seasonal selection demo that crossfades backgrounds, sets decorative fonts, and animates the heading.
- `11-Keydown/` — Keyboard event demo that shows the pressed key in the heading.
- `12-FileUPloadMiniProject/` — File chooser demo where the button programmatically triggers the file input.
- `13-MouseOverAndMouseOut/` — Demonstrates `mouseover`/`mouseout` changes (background color swap).
- `14-MouseMove/` — Tracks mouse coordinates and moves an element with the cursor.
- `15-EventBubbling/` — Event bubbling/capturing demo toggling `.important` class on list items when clicked.
- `16-PianoPlay/` — Small piano UI that programmatically creates key elements on load (keyboard & click handling can be added).
- `17-CharacterCount/` — Live character count with warning when the maximum (20) is exceeded.

---

## How to preview projects locally
Most demos are static and can be opened directly in a browser (double-click `index.html`). For better results (especially to load local fonts and to avoid CORS issues), run a local static server:

PowerShell example (from repo root):

```powershell
cd "c:\Users\ayush\SheryiansClasses"
python -m http.server 8000
# open http://localhost:8000/ and navigate to any demo
```

Or use Node-based static servers (if Node installed):

```powershell
npx http-server . -p 8000
# or: npx serve . -p 8000
```

---

## SCSS / Build notes
- The repo contains several `style.scss` files for demos. Some projects contain compiled `style.css` files. If you make changes to an `.scss` file, recompile to `style.css` before previewing.

Example using `sass` (NPM or installed):

```powershell
npx sass path\to\style.scss path\to\style.css --no-source-map
```

---

## Maintenance & tips
- Where large media files are used (or in the `Fonts/` folder) you may consider Git LFS to avoid long cloning times.
- Keep JavaScript modular: use event listeners and classes, avoid global inline styles where possible.
- Use per-folder README files for larger demos for quicker navigation — I already added `6-JavaSCriptDOM/Rendme.md` as a starting point.

---

If you want, I can add a top-level `index.html` that lists all demos and links to them, or generate per-folder READMEs for more complex projects. Tell me what you'd like next and I'll implement it.

Last updated: 2025-11-27
# cohort-2.0

This repository contains all the projects and assignments completed during my journey in the Sheryians Coding School, Cohort 2.0 batch.

## Progress snapshot (updated 2025-10-30)

This README summarizes each top-level folder, its current status, and how to preview the demos locally. Most demos are static and can be opened directly in a browser; some SCSS files have compiled `style.css` versions where needed.

Status keywords:

### Top-level folders (summary)

  - `1-HTMLBasicTags.html` — basic HTML examples and reference.

  - Multiple SCSS/CSS experiments and responsive demos including hover effects and the FolioBlox hero. Some pages include compiled `style.css` while others link `style.scss` — compile SCSS before previewing if necessary.

  - Collection of task pages and demos:
    - `1-ResumeWebsite.html`, `2-Backroud.html`, `3-SweatersWebPage.html`, `4-Iphone.html`, `5-BlackPanther.html`, `7-Card.html`, `8-BendoGrid.html`
  - `6-NoonWebsite/` is a Swiper carousel demo with `index.html`, `style.scss`/`style.css`, `gsap.js`, and a local `README.md` documenting breakpoints and autoplay config.
  - Recent improvements: Swiper changed to autoplay with responsive breakpoints; `7-Card.html` now uses `section:has(.card:hover)` with a JS fallback to change the section background when any card is hovered.

  - `1-BasicScrolling/` demonstrates integrating Lenis for smooth scrolling. Files: `index.html`, `script.js`, `style.scss`/`style.css`.

  - Recent updates (as of Nov 7):
    - New: `5-FunctionsInJs/` folder with basic function examples and practice
    - Added loop pattern printing and Nov 1 assignment in `3-Loops/`
    - `1-BasicOfJS/` — Variables, data types, operators
    - `2-ConditionsInJS/` — if/else, switch statements
    - `4-Strings/` — String manipulation basics

# cohort-2.0

This repository is a collection of small front-end exercises, demos and mini-projects used during the cohort. It contains example HTML/CSS/SCSS/JavaScript projects, local fonts and images used by the demos.

## Structure (top-level)
- `1-HTML/` — basic HTML examples
- `3-AllTask/` — assorted larger example pages and challenges
- `5-JavaScript/` — notes, exercises and code samples for JavaScript
- `6-JavaSCriptDOM/` — DOM mini-projects (Counter, Notepad, File upload demos, etc.)
- `Fonts/` — local font files used by demos
- `Photos/` — example images used by seasonal / background demos
- `spider.jpg` and miscellaneous assets at the root

Each folder generally contains an `index.html`, `style.scss` (or `style.css`) and `script.js` where applicable.

## How to preview
- The simplest way to preview pages is to open the HTML file in your browser (double-click or `File -> Open`).
- For some browsers and for fetching local fonts/images reliably, run a small local server from the repo root. Example (PowerShell / Command Prompt):

```powershell
cd c:\Users\ayush\SheryiansClasses
python -m http.server 8000
# then open http://localhost:8000/ in your browser
```

Or, if you have Node.js installed you can use a static server package (for example `npx serve`).

## Build / SCSS
- This repo includes `.scss` files but no automated build step by default. If you edit SCSS, compile it to CSS using Sass:

```
sass path/to/style.scss path/to/style.css
```

## Notable recent changes
- Added animated background crossfade and entrance animations to `6-JavaSCriptDOM/10-Change` (season demo).
- Restored and registered seasonal fonts (Spring, Summer, Autumn, Winter) and added utility classes to apply them.
- Implemented a smooth `h1` hover glow and animation (accessible to `prefers-reduced-motion`).
- Fixed `6-JavaSCriptDOM/12-FileUPloadMiniProject/script.js` — corrected `fileinp.click()` typo and added defensive checks.
- Fixed missing `<script>` tag in `6-JavaSCriptDOM/15-EventBubbling/index.html` so the event bubbling demo works.

## Testing quickly
- Open `6-JavaSCriptDOM/10-Change/index.html` in the browser (or via `http://localhost:8000/6-JavaSCriptDOM/10-Change/`) and select a season to see the background crossfade, fonts, and heading animation.
- Open `6-JavaSCriptDOM/12-FileUPloadMiniProject/index.html` to test the upload button.
- Open `6-JavaSCriptDOM/15-EventBubbling/index.html` to test the event bubbling demo (click list items).

## Commit & Push
I will commit README updates and push them to `origin/main` when you ask me to. If you prefer a different commit message or branch, tell me and I will use that.

## Next steps / Suggestions
- Add a small `CONTRIBUTING.md` if others will contribute.
- Add a `package.json` and a simple `npm` script to compile SCSS automatically if you plan to edit multiple SCSS files frequently.
- Consider using Git LFS for large binary assets (fonts/images) if you plan to expand the repo.

---
Generated and updated locally on your workspace.

    --

    ## Repository structure (top-level folders)

    - `1-HTML/` — Basic HTML exercises and references.
    - `2-SCSS&CSS/` — SCSS/CSS experiments and responsive demos; some files include compiled `style.css` and others provide `style.scss` sources.
    - `3-AllTask/` — Assorted project pages and demos (resume site, background demos, Swiper carousel, card demos).
    - `4-LenisJS/` — Demo showing Lenis smooth scrolling integration.
    - `5-JavaScript/` — Learning exercises and notes (variables, conditions, loops, functions, arrays, objects). Contains expanded `README.md` to navigate exercises.
    - `6-JavaSCriptDOM/` — Mini DOM projects (counters, notepad, createElement demos, download demo, season-change demo, etc.). This folder contains many small interactive examples used for practice.
    - `Fonts/` and `Photos/` — Local assets used by multiple demos.

    --

    ## Quick start — previewing demos locally

    Most demos are static HTML and can be viewed directly in a browser. For better results (loads assets and avoids CORS), run a simple static server from the repo root.

    PowerShell example (from `c:\Users\ayush\SheryiansClasses`):

    ```powershell
    # Python simple server (works if Python is installed)
    python -m http.server 8000

    # or use a tiny Node static server (npm required)
    npx http-server . -p 8000
    ```

    Then open `http://localhost:8000/` and navigate to any demo, for example:

    - `http://localhost:8000/6-JavaSCriptDOM/10-Change/index.html` (season-change demo with background crossfade and animated heading)
    - `http://localhost:8000/3-AllTask/6-NoonWebsite/index.html` (Swiper carousel demo)

    --

    ## SCSS notes

    - Some pages reference `style.scss` during development. Where a precompiled `style.css` exists, you can open the page directly; otherwise compile SCSS to CSS before previewing.

    PowerShell compile command (requires `sass` or `npx sass`):

    ```powershell
    npx sass path\to\style.scss path\to\style.css --no-source-map
    ```

    --

    ## Notable projects (high level)

    - `6-JavaSCriptDOM/10-Change` — Seasonal background demo with crossfade overlays, custom fonts, and an animated `h1` heading. JS toggles utility font classes and adds overlays for smooth background fades.
    - `6-JavaSCriptDOM/*` — A set of mini-projects used for DOM practice: Counter, NotePad (add/delete/top), Download demo (progress simulation), File upload helpers, etc.
    - `3-AllTask/6-NoonWebsite` — Swiper carousel with autoplay and responsive breakpoints.
    - `3-AllTask/7-Card.html` — Card demo with CSS hover effects and JS fallback (uses `:has()` where available).

    --

    ## Fonts & Assets

    - `Fonts/` contains OTF/TTF fonts used in several demos (Rockybilly, Diary Autumn, Hearty Winter, Spring is Coming, etc.).
    - `Photos/` stores background and hero images used by the demos.

    When adding large video files or other binaries, consider using Git LFS to avoid large repo sizes.

    --

    ## Run & debug tips

    - Use the browser DevTools console to see runtime logs and errors for interactive demos.
    - If a demo uses `style.scss` directly, compile it to `style.css` and refresh the page.
    - Many examples are deliberately minimal. If a script appears not to run, ensure the page includes the `<script>` tag and that scripts are loaded after DOM elements (or use DOMContentLoaded).

    --

    ## Contributing / Next tasks

    If you want improvements, I can:

    1. Add a top-level `index.html` that links to each demo for easier browsing.
    2. Add small README files inside major demo folders describing how to run and what to expect.
    3. Move large media files to Git LFS and add `.gitattributes`.

    Tell me which item you want and I'll implement, test, and push the change.

    --

    Last updated: 2025-11-24

    ---

    If you want a more detailed, per-folder README (for `5-JavaScript`, `6-JavaSCriptDOM`, or `3-AllTask`), tell me which folder and I'll generate it next.
