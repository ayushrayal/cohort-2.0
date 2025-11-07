# cohort-2.0

This repository contains all the projects and assignments completed during my journey in the Sheryians Coding School, Cohort 2.0 batch.

## Progress snapshot (updated 2025-10-30)

This README summarizes each top-level folder, its current status, and how to preview the demos locally. Most demos are static and can be opened directly in a browser; some SCSS files have compiled `style.css` versions where needed.

Status keywords:
- **Completed:** Demo implemented and tested locally.
- **In progress:** Partial work or SCSS needs compilation / assets need cleanup.
- **Docs:** Per-folder README exists with usage notes.

### Top-level folders (summary)

- `1-HTML/` (Completed)
  - `1-HTMLBasicTags.html` — basic HTML examples and reference.

- `2-SCSS&CSS/` (In progress)
  - Multiple SCSS/CSS experiments and responsive demos including hover effects and the FolioBlox hero. Some pages include compiled `style.css` while others link `style.scss` — compile SCSS before previewing if necessary.

- `3-AllTask/` (Mixed: Completed & In progress)
  - Collection of task pages and demos:
    - `1-ResumeWebsite.html`, `2-Backroud.html`, `3-SweatersWebPage.html`, `4-Iphone.html`, `5-BlackPanther.html`, `7-Card.html`, `8-BendoGrid.html`
  - `6-NoonWebsite/` is a Swiper carousel demo with `index.html`, `style.scss`/`style.css`, `gsap.js`, and a local `README.md` documenting breakpoints and autoplay config.
  - Recent improvements: Swiper changed to autoplay with responsive breakpoints; `7-Card.html` now uses `section:has(.card:hover)` with a JS fallback to change the section background when any card is hovered.

- `4-LenisJS/` (Completed)
  - `1-BasicScrolling/` demonstrates integrating Lenis for smooth scrolling. Files: `index.html`, `script.js`, `style.scss`/`style.css`.

- `5-JavaScript/` (Docs + Exercises)
  - Recent updates (as of Nov 7):
    - New: `5-FunctionsInJs/` folder with basic function examples and practice
    - Added loop pattern printing and Nov 1 assignment in `3-Loops/`
  - Structure:
    - `1-BasicOfJS/` — Variables, data types, operators
    - `2-ConditionsInJS/` — if/else, switch statements
    - `3-Loops/` — while loops, patterns, assignments
    - `4-Strings/` — String manipulation basics
    - `5-FunctionsInJs/` — Function declarations and usage
    - Expanded `README.md` with run instructions
  - All examples include console.log output for learning

- `Fonts/` (Assets)
  - Custom fonts (OTF/TTF) used across demos.

- `Photos/` (Assets)
  - Images and small media used by the demos (cards, backgrounds, hero images, small webm clips).

## How to preview locally

Most demos are static HTML and require no build step. Recommended ways to preview:

PowerShell from the repo root:
```powershell
# Run a simple static server (Python)
python -m http.server 8000

# or with npx http-server
npx http-server . -p 8000
```

Open `http://localhost:8000/3-AllTask/6-NoonWebsite/index.html` to preview the Swiper demo, or open any other `.html` file directly in the browser.

## SCSS notes

- Some demos link to `style.scss` in development; when previewing, either compile SCSS to `style.css` with `sass` or use the precompiled `style.css` if present.

Compile example (PowerShell):
```powershell
npx sass path/to/style.scss path/to/style.css --no-source-map
```

## Git & large files

- If you plan to keep big video files in the repo, move them to Git LFS and add `.gitattributes` to track them. Large binaries can cause push failures or slow clones.

## Recent notable changes

- JavaScript (Nov 7): Added function basics and more loop practice including pattern printing. New `5-FunctionsInJs/` folder created.
- Cards (Oct 30): `3-AllTask/7-Card.html` implements CSS `:has()` for section background changes on hover (with JS fallback).
- Swiper (Oct 30): `3-AllTask/6-NoonWebsite` uses autoplay with responsive breakpoints and touch optimizations.

## Suggested next tasks (I can do these for you)
1. Add `5-JavaScript/index.html` that links to all exercise pages for easy browsing.
2. Add expected console output as comments in JS example files.
3. Move large media files to Git LFS and update `.gitattributes`.

If you want one of these done, tell me which and I'll implement and push it.

_This README was updated to reflect the current repository state (2025-11-07)._ 
# cohort-2.0

This repository contains all the projects and assignments completed during my journey in the Sheryians Coding School, Cohort 2.0 batch.

## Progress snapshot (as of 2025-10-23)

- `1-HTML/` — Basic HTML exercises and tags (completed). 
- `2-SCSS&CSS/` — Multiple responsive and SCSS projects (Hover effects, Dua Lipa demo, FolioBlox hero). Some completed, some work-in-progress on desktop responsiveness.
- `3-AllTask/` — Collection of task pages: Resume site, background demos, Black Panther video background, and the Noon carousel (Swiper) project.
- `4-LenisJS/` — Lenis smooth-scrolling demo (fully working).
- `5-JavaScript/` — Started JavaScript basics on 2025-10-23. See `5-JavaScript/README.md` for details.
	- What you'll find in `5-JavaScript/`:
		- `1-BasicOfJS/` — core JS fundamentals and examples:
			- `1-BasicOfJS.html` — small HTML page used to run and test snippets.
			- `2-DataTypeInJS.html` — exercises and examples for JS data types.
			- `3-OperatorsInJS.html` / `3-BasicPractice.html` — operators and practice problems.
			- `details.txt` / `Details2.txt` — short notes and observations while learning.
		- `2-ConditionsInJS/` — conditional statements practice:
			- `1-BasicofConditionalStatements.html` — basic if/else examples.
			- `2-PracticeOFCS.html` — practice problems for conditionals.
		- `README.md` — short guide explaining how to run the exercises and recommended next steps (open files in browser and use DevTools Console).
- `Fonts/` and `Photos/` — Asset folders used across projects.


## What’s inside?
- **HTML Projects:** Basic to advanced HTML pages, including resume websites and creative layouts.
- **CSS & SCSS:** Styling with CSS and SCSS, including hover effects, custom fonts, and responsive layouts.
- **3D & Interactive Cards:** Cards with 3D transforms and hover animations using only CSS.
- **Backgrounds & Media:** Pages with background images and videos, including autoplay video backgrounds.
- **Responsive Design:** Projects with mobile/tablet-friendly layouts (in progress).
- **Fonts & Assets:** Use of custom fonts and images for a rich UI experience.

## About
This folder is a collection of everything I have learned so far in the Cohort 2.0 batch at Sheryians Coding School. It showcases my progress in web development, from basic HTML to advanced CSS/SCSS and interactive UI effects.

## Lenis — Smooth Scrolling (4-LenisJS/1-BasicScrolling)

A small demo project that demonstrates using the Lenis smooth-scrolling library to create a simple full-page vertical scroll experience. This was built while learning how to integrate third-party JS packages and wire them into a basic page.

What’s included:
- `index.html` — three full-screen sections that scroll vertically.
- `style.scss` / `style.css` — minimal styles to make each section full height and centered.
- `script.js` — initializes Lenis and connects it to requestAnimationFrame for smooth scrolling.

How to run:
1. Open `4-LenisJS/1-BasicScrolling/index.html` in a browser (no build step required).
2. The demo loads Lenis from a CDN and starts smooth scrolling automatically.

Notes / Learnings:
- Using Lenis for smooth scrolling requires calling `lenis.raf(time)` inside a requestAnimationFrame loop.
- The demo shows how to keep HTML/CSS simple while adding a small JS library to enhance UX.

_This is my journey so far!_
