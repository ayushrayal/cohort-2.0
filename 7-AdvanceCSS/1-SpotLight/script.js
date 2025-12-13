addEventListener("click", function (){
  const root = document.documentElement;
  const current = getComputedStyle(root).getPropertyValue('--pixel').trim();
  const next = current === '250px' ? '150px' : '250px';
  root.style.setProperty('--pixel', next);
});

addEventListener("mousemove", function (dets){
  const root = document.documentElement;
  // console.log(dets.clientX, dets.clientY);
  root.style.setProperty("--x", dets.clientX + "px");
  root.style.setProperty("--y", dets.clientY + "px");
});

const video = document.querySelector('video');
if (video) {
  document.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}
