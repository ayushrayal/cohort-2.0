let bulb = document.getElementById("bulb");
let button = document.querySelector("button");
button.addEventListener("click", function() {
    if (button.innerText === "ON") {
        bulb.style.backgroundColor = "yellow";
        button.innerText = "OFF";
        bulb.style.boxShadow = "0 0 20px 10px yellow";
        bulb.style.border = "none";
    } else {
        bulb.style.backgroundColor = "black";
        button.innerText = "ON";
        bulb.style.boxShadow = "none";
        bulb.style.border = "#ffffff 5px solid";
    }
});