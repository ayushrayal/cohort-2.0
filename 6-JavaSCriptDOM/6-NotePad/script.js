let input = document.getElementById("input");
let add = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
let topPriority = document.getElementById("top-priority");
let section2 = document.getElementById("section2");
let ol = document.createElement("ol");

function createList(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    section2.appendChild(ol);
    ol.appendChild(li);
    input.value = "";
}
    
add.addEventListener("click", function() {  
    createList();
});

deleteBtn.addEventListener("click", function(){
    let lastItem = ol.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
})

topPriority.addEventListener("click", function(){
    let lastItem = ol.lastElementChild;
    if (lastItem) {
        lastItem.style.backgroundColor = "yellow";
        lastItem.style.fontWeight = "bold";
    }
})