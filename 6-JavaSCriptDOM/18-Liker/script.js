let img = document.querySelector("img");
let i = document.querySelector("i");
img.addEventListener("dblclick",function(){
    i.style.opacity = 1;
    i.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(() => {
        i.style.transform = "translate(-50%, -220%) scale(0)";
    }, 1000);
    setTimeout(() => {
        i.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1200);
});