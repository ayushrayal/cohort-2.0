let main = document.querySelector("main");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let div = document.createElement("div");
    let x = Math.random()*100;
    let y = Math.random()*100;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    div.style.height = "5rem";
    div.style.width = "5rem";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.position = "absolute";
    div.style.top = y +"%";
    div.style.left = x + "%";
    
    main.appendChild(div);
})