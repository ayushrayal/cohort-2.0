const btn = document.querySelector("button");
const fileinp = document.querySelector("#fileinp");
btn.addEventListener("click", function () {
          fileinp.click();
     });
fileinp.addEventListener("change",function(dets){
    console.log(dets);
    
    btn.textContent = dets.target?.files[0].name;
})