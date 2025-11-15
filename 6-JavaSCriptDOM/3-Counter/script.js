let dec = document.querySelector("#Decrease");
let inc = document.querySelector("#Increase");
let h1 = document.querySelector("#Box h1");
let count = 0;
inc.addEventListener("click", function(){
        count++;
        h1.innerHTML=count;
      });
dec.addEventListener("click", function(){
        count--;
        h1.innerHTML=count;
      });