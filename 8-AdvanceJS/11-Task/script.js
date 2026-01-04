let main = document.querySelector("main");
let toolkit = document.querySelector("#toolkit");
main.addEventListener("contextmenu",(dets)=>{
    dets.preventDefault();
    toolkit.style.top = dets.y + "px";
    toolkit.style.left = dets.x + "px";
    toolkit.style.display = "inline";
});
main.addEventListener("click",(dets)=>{
    toolkit.style.display = "none";
})