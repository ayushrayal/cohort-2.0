var progress = 0;
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");
btn.addEventListener("click",function(){
     btn.style.pointerEvents = 'none'
     var num = 50 + Math.floor(Math.random()*50);
     console.log('Your file will be downloaded in',num/10,'seconds');
     let timeout = setInterval(()=>{
     progress++;
    //  console.log(progress);
     h2.innerHTML = progress+'%';
     inner.style.width = progress+'%';
  },num);

  setTimeout(()=>{
    clearInterval(timeout);
    btn.innerHTML = "Download";
    btn.style.opacity = 0.5;
  },num*100)
});