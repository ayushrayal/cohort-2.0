let main = document.querySelector("main");
main.addEventListener("mousemove",function(){
     let div = document.createElement("div");
    let x = Math.random()*100;
    let y = Math.random()*100;
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    div.style.height = "2rem";
    div.style.width = "2rem";
    div.style.borderRadius = "2rem";
    div.style.border = `rgb(${c1},${c2},${c3}) 1px solid`
    div.style.backgroundColor = "transparent";
    div.style.position = "absolute";
    div.style.boxShadow = `rgb(${c1},${c2},${c3}) 2px 2px 2px 2px`
    div.style.top = y +"%";
    div.style.left = x + "%";
    main.appendChild(div);
})