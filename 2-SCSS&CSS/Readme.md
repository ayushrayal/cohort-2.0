# 2-SCSS&CSS

**Overview:**
- **Purpose:** Collection of small CSS/SCSS experiments and examples used during class exercises and mini-projects.
- **Location:** This folder contains demos built with plain HTML/CSS and SCSS (Sass).

**Included Demo(s):**
- **`6-Post`**: An Instagram-like square post/card demo. Key files:
	- `index.html` — demo markup
	- `style.scss` — source Sass styles
	- `style.css` — compiled CSS (may be generated locally)

**Quick Start (PowerShell)**
- Install Sass (if not installed):

```powershell
npm install -g sass
```

- Compile a single SCSS file to CSS:

```powershell
sass style.scss:style.css
```

- Watch SCSS for changes (rebuild automatically):

```powershell
sass --watch style.scss:style.css
```

- Preview locally (from this folder):

```powershell
# Run a simple HTTP server on port 8000
python -m http.server 8000; Start-Process "http://localhost:8000"
```

**Notes & Tips**
- The demos assume local font files may be present; if fonts don't load, the browser will use fallback fonts.
- Use `aspect-ratio: 1/1;` in the card demo to maintain a square (Instagram-like) layout.
- If you see Sass errors, check for unmatched braces or nested global rules (move `@font-face` and global selectors to top-level in SCSS).

**How to Contribute**
- Add a new subfolder for each demo with a descriptive name.
- Include a short `README.md` in each demo folder detailing how to run and build it.

If you'd like, I can commit & push this README to the repo — say the word and I'll do it for you.