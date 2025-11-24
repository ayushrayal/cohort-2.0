let input = document.getElementById('input');
let charCount = document.getElementById('charCount');
input.addEventListener('input', function() {
    charCount.textContent = 20 - input.value.length;
    if(input.value.length > 20) {
        charCount.style.color = 'red';
    }else {
        charCount.style.color = 'black';
    }
});