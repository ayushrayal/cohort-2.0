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
