let select = document.getElementById("selectSeason");
let section = document.querySelector("section");
let main = document.querySelector("main");
let h1 = document.createElement("h1");
// helper: append heading once and play its entrance animation
function ensureHeading() {
  if (!main.contains(h1)) {
    main.appendChild(h1);
  }
  // trigger entrance animation
  h1.classList.remove('animate');
  // force reflow
  void h1.offsetWidth;
  h1.classList.add('animate');
}

// helper: create a fading overlay background and clean up old overlays
function crossfadeBackground(url) {
  const overlay = document.createElement('div');
  overlay.className = 'bg-overlay';
  overlay.style.backgroundImage = `url("${url}")`;
  main.appendChild(overlay);
  // allow DOM insertion, then add visible to start transition
  requestAnimationFrame(() => overlay.classList.add('visible'));
  // remove older overlays after transition
  setTimeout(() => {
    const overlays = main.querySelectorAll('.bg-overlay');
    overlays.forEach((el, i) => {
      if (i < overlays.length - 1) el.remove();
    });
  }, 700);
}

// helper: remove any seasonal font classes from the heading
function clearSeasonFonts() {
  h1.classList.remove('spring-font','summer-font','autumn-font','winter-font','rocky');
}

select.addEventListener('change', function () {
  select.style.backgroundColor = 'transparent';
  section.style.backgroundColor = 'transparent';

  ensureHeading();

  if (select.value === 'Spring') {
    h1.textContent = 'Spring';
    clearSeasonFonts();
    h1.classList.add('spring-font');
    crossfadeBackground('/Photos/Spring.jpg');
  } else if (select.value === 'Summer') {
    h1.textContent = 'Summer';
    clearSeasonFonts();
    h1.classList.add('summer-font');
    // keep rockybilly as compatibility
    h1.classList.add('rocky');
    crossfadeBackground('/Photos/summer.jpg');
  } else if (select.value === 'Autumn') {
    h1.classList.add('autumn-font');
    h1.textContent = 'Autumn';
    clearSeasonFonts();
    crossfadeBackground('/Photos/Autumn.jpg');
  } else if (select.value === 'Winter') {
    h1.textContent = 'Winter';
    clearSeasonFonts();
    h1.classList.add('winter-font');
    crossfadeBackground('/Photos/winter.jpg');
  }

  // fallback sizing for overlay backgrounds
  // (overlay handles sizing, but keep these for any other background uses)
  main.style.backgroundPosition = 'center';
  main.style.backgroundSize = 'cover';
});
