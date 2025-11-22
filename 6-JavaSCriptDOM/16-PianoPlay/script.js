let keysArea = document.querySelector("#keysArea");

// Piano notes (1 octave)
let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

function createWhiteKeys(){
   if (!keysArea) {
     console.error("Keys area not found");
     return;
   }
   
   notes.forEach((note) => {
     let div = document.createElement("div");
     div.classList.add("key", "white"); // Dono classes add karo
     div.textContent = note;
     div.setAttribute("data-note", note); // Note store karo
     keysArea.appendChild(div);
   });
   
   console.log("White keys created successfully!");
}

// Page load pe function call karo
document.addEventListener("DOMContentLoaded", function() {
    createWhiteKeys();
});