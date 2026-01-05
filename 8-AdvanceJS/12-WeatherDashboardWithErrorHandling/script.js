let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector("#weather-result");
let error = document.querySelector("#error-message");

let apikey = "59dd6ee838fd5ae8f311008113d834d0";

async function getWeather(city) {
    try {
   let rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
   if(!rawdata.ok){
       throw new Error(`HTTP error! status: ${rawdata.status} - ${rawdata.statusText} Check the city name becauese it might be incorrect.`);
   }
   let data = await rawdata.json();
//    console.log(data.coord.lat);
//    console.log(data.name);
//    console.log(data.sys.country);
//    console.log(data.main.temp);
if(data.main.temp < 0){
    result.style.color = "blue";
    error.innerHTML = "Brrr! It's freezing outside! Stay warm!";
} else if(data.main.temp >= 0 && data.main.temp < 15){
    result.style.color = "cyan";
    error.innerHTML = "It's quite chilly! Don't forget your jacket."; 
}
else if(data.main.temp >= 15 && data.main.temp < 25){
    result.style.color = "green";
    error.innerHTML = "The weather is pleasant today! Enjoy your day.";
}
else if(data.main.temp >= 25 && data.main.temp < 35){
    result.style.color = "orange";
    error.innerHTML = "It's getting warm! Stay hydrated.";
}
else{
    result.style.color = "red";
    error.innerHTML = "It's scorching hot! Take care in the heat.";
}
   console.log(data);
   result.innerHTML = `<h1>City : ${data.name}</h1>
   <h6>Country : ${data.sys.country}</h6>
   <h6>lat : ${data.coord.lat}</h6>
   <h6>lon : ${data.coord.lon}</h6>
   <h6>temp : ${data.main.temp}</h6>
   `}
    catch(err){ 
        console.log("Error occurred:", err);
        error.innerText = "Could not fetch weather data. Please check the city name and try again." + " Error details: " + err.message;
    }
}

btn.addEventListener("click",function(evt){
    evt.preventDefault();
    getWeather(input.value);
    setTimeout(() => {
        error.innerText = "";
        input.value = "";
    }, 5000);
})