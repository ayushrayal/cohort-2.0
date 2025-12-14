let p = document.querySelector('p');
if (p) {
    const originalText = p.innerHTML;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let iteration = 0;
    let intervalId = null;

    p.addEventListener("mouseenter", () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        iteration = 0;
        intervalId = setInterval(() => {
            const str = originalText.split("").map((char, index) => {
                if (char === " ") return " ";
                if (index < iteration) return char;
                return characters[Math.floor(Math.random() * characters.length)];
            }).join("");

            p.innerHTML = str;
            iteration += 0.25;

            if (iteration >= originalText.length) {
                p.innerHTML = originalText;
                clearInterval(intervalId);
                intervalId = null;
            }
        }, 50);
    });
}