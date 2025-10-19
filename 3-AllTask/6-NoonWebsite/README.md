# Noon Website

This folder contains the Noon website project — a landing/demo page built during the Cohort 2.0 at Sheryians Coding School.

## What I built
- Hero section with heading, subheading, CTA and an animated background video.
- A responsive card slider implemented with Swiper.js (horizontal carousel, pagination, navigation, scrollbar).
- Smooth mobile touch support and responsive breakpoints (1/2/3 slides per view).
- Custom styles in SCSS (`style.scss` compiled to `style.css`).
- JS initialization in `gsap.js` which configures Swiper (autoplay, breakpoints, navigation, pagination).

## Files
- `index.html` — page markup and CDN includes for Swiper and icons.
- `style.scss` / `style.css` — styles for layout, Swiper customizations, and responsive rules.
- `gsap.js` — Swiper initialization and settings.
- `Photos/` — local assets (logo, video, imagery).

## How to run
1. Open `index.html` in a browser. The page loads Swiper from CDN and initializes automatically.
2. For development, edit `style.scss`, compile to CSS (if you use an SCSS tool), and refresh the page.

## Notes & learnings
- Swiper's layout is primarily controlled by its `.swiper-wrapper` and `.swiper-slide` structure; avoid overriding layout with container-level `display: column`.
- Use `flex-wrap: nowrap` on `.swiper-wrapper` to ensure slides remain in a row.
- Autoplay with `disableOnInteraction: false` keeps the autoplay running after user interaction (optional UX choice).
- Touch gestures and `-webkit-overflow-scrolling: touch` improve mobile feel.

This README documents the current state of the project and the main implementation details.
