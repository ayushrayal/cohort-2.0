function validateEmail(email) { 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}       
document.getElementById('validateBtn').addEventListener('click', function(dets) {
    dets.preventDefault();
    const emailInput = document.getElementById('emailInput').value;
    const resultDiv = document.getElementById('Result');    
    if (validateEmail(emailInput)) {
        resultDiv.textContent = 'Valid email address.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Invalid email address.';
        resultDiv.style.color = 'red';
    } 
    const passwordInput = document.getElementById('password').value;
    const lengthCriteria = document.getElementById('length');
    const uppercaseCriteria = document.getElementById('uppercase');
    const numberCriteria = document.getElementById('number');
    const specialCriteria = document.getElementById('special');
    // Validate password criteria
    if (passwordInput.length >= 8) {
        lengthCriteria.style.color = 'green';
    } else {
        lengthCriteria.style.color = 'red';
    }
    if (/[A-Z]/.test(passwordInput)) {
        uppercaseCriteria.style.color = 'green';
    }
    else {
        uppercaseCriteria.style.color = 'red';
    }   
    if (/\d/.test(passwordInput)) {
        numberCriteria.style.color = 'green';
    } else {
        numberCriteria.style.color = 'red';
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput)) {
        specialCriteria.style.color = 'green';
    } else {
        specialCriteria.style.color = 'red';
    }
}); 
