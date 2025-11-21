let h1 = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
  if (dets.key === " ") {
    h1.innerHTML = "SPC";
  } else {
    h1.innerHTML = dets.key;
  }
});
