let img = document.querySelector("#card img");
let btn = document.querySelector("button");

async function getHDImage() {
    // Random number to break cache
    let random = Math.floor(Math.random() * 100000);

    // Always new fresh HD image
    img.src = `https://picsum.photos/600?random=${random}`;
}

btn.addEventListener("click", getHDImage);

// First time load
getHDImage();
