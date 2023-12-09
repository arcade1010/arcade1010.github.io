function emailSubmit() {
    let email = document.getElementById('email').value;
    document.getElementById("emailResult").innerHTML = "We will contact you at " + email + " in approximately 3 tp 5 business days";
}

// JavaScript for Image Slider
const slider = document.querySelector('.slider');
let counter = 0;

function nextSlide() {
   counter++;
   if (counter === slider.children.length) counter = 0;
   updateSlider();
}

function updateSlider() {
   const transformValue = -100 * counter + '%';
   slider.style.transform = 'translateX(' + transformValue + ')';
}

setInterval(nextSlide, 3000);