function createToaster(information) {
 return function(msg){
  let div = document.createElement("div");
  div.textContent = msg;
  div.className = `inline-block ${information.theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity `;
  document.querySelector(".parent").appendChild(div);
  setTimeout(()=>{
    document.querySelector(".parent").removeChild(div);
  },information.duration * 1000)
 }
}
let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme:"dark",
  duration: 3,
});
toaster("Download Done!!!")
setTimeout(()=>{
  toaster("File Uploaded!!!")
},2000);

