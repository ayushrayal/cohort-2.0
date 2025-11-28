````markdown
# 6-JavaSCriptDOM — Mini projects and exercises

This folder contains a collection of small DOM-focused practice projects and interactive demos. Each mini-project demonstrates a DOM-related concept (event handling, element creation, animation, keyboard/mouse events, and more).

## Quick Links
- `3-Counter/` — simple counter (increment/decrement) example using DOM updates
- `6-NotePad/` — a simple notepad demo to add/delete/toggle tasks in the DOM
- `9-Download/` — a download progress simulator using JS to animate progress
- `10-Change/` — Seasonal demo showing crossfading background overlays, dynamic fonts, and heading animations
- `11-Keydown/` — keyboard events demo
- `12-FileUPloadMiniProject/` — file upload helper demo with an `Upload` button that triggers the file chooser
- `13-MouseOverAndMouseOut/` — mouseover/mouseout events demo
- `14-MouseMove/` — mousemove-based visual demo
- `15-EventBubbling/` — event bubbling/capturing demo (toggle `important` class on list items)
- `16-PianoPlay/` — piano keys demo using keyboard or click events to play sounds
- `17-CharacterCount/` — live character counting and preview
- `1-BasicOfDOM/` — basics of selecting elements and manipulating them
- `2-LightOffOnProject/` — demonstrates toggling styles or states via DOM
- `4-RandomThingWithAPI/` — fetch API usage with DOM updates
- `5-QuotesGeneratorWithAPI/` — quotes generator using a remote API
- `7-MiniProjectOFCreateElementAndApendChild/` — creating and appending elements programmatically
- `8-MiniProjectOFCreateElementAndApendChildWithMousemove/` — a variant that reacts to mouse movement

## How to preview
All projects are static. You can open any `index.html` directly in the browser, but some fonts/assets load better via a local server. From the workspace root:

```powershell
cd "c:\Users\ayush\SheryiansClasses"
python -m http.server 8000
# then open http://localhost:8000/6-JavaSCriptDOM/ in your browser
```

## How to contribute
- Add a small demo in a new folder with its own `index.html`, `style.scss` (or `style.css`), and `script.js`.
- Include a short README inside the project explaining the purpose and how to use it.
- Keep each project independent — don't rely on global styles/scripts unless intended.

## Tips & Notes
- If a demo references `style.scss`, compile it to `style.css` using `sass` or `npx sass`:

```powershell
npx sass path\to\style.scss path\to\style.css --no-source-map
```

- Use the browser console to see logs and errors while testing.
- Prefer class toggles (add/remove) over inline styles for better separation of presentation and behavior.

---
Generated and updated on your workspace.

````
