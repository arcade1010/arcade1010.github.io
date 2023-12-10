alert("Script is running");
// JavaScript for Form Validation
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
      event.preventDefault();
   if (myForm.checkValidity()) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    document.getElementById("emailResult").textContent = "Thanks for the info, " + name + ". We'll reach out within the next few business days at " + email + ".";
   
   }
   else {
      // Prevent form submission if there are validation errors
      alert('Please fill in all required fields.');}
});


// JavaScript for Image Slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}