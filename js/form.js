

const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const container = document.querySelector(".container");



function validateForm() {

    try {
    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
}
    else {
        nameError.style.display = "block";
}

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
}
    else {
        subjectError.style.display = "block";
}

    if(validateEmail(email.value)) {
        emailError.style.display = "none";
} 
    else {
        emailError.style.display = "block";
}

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
}   
    else {
        addressError.style.display = "block";
        }  
    }
    catch {
        console.log("Form not filled out correctly");
    }
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


if (validateForm()) {
    container.innerHTML = `Form is validated`
}
