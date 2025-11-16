let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.querySelector("#new-quote");
async function getQuote() {
    let response = await fetch('https://dummyjson.com/quotes/random');
    let data = await response.json();
    quote.innerText = `"${data.quote}"`;
    author.innerText = `- ${data.author}`;
   
}
btn.addEventListener("click", getQuote);    
// First time load
getQuote();