let div = document.querySelector("div");
window.addEventListener("mousemove",function(dets){
    div.style.left = dets.clientX+"px";
    div.style.top = dets.clientY+"px";
})