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


let slideshow = ['<img src="images/debrisRemoval.png" id="image-in-slide"><figcaption id="caption-of-image">Debris clearing and removal - Summer 2023</figcaption>',
'<img src="images/debrisRemoval2.png" id="image-in-slide"><figcaption id="caption-of-image">"Debris/material moving - Summer 2022"</figcaption>',
'<img src="images/garden.png" id="image-in-slide"><figcaption id="caption-of-image">"Garden organization and masonry- Summer 2022"</figcaption>',
'<img src="images/fence.jpg" id="image-in-slide"><figcaption id="caption-of-image">"10ft fence constructions - Spring 2023"</figcaption>']
let images = ["images/debrisRemoval.png", "images/debrisRemoval2.png", "images/garden.png", "images/fence.jpg"];
let captions = ["Debris clearing and removal - Summer 2023", "Debris/material moving - Summer 2022",
                "Garden organization and masonry- Summer 2022", "10ft fence constructions - Spring 2023"];

function nextSlide() {
  for (let i=0; i<slideshow.length()-1; i++) {
    if(document.getElementById("slide-figure").innerHTML == slideshow[i]){
      document.getElementById("slide-figure").innerHTML = slideshow[i+1];
    }
  }
  document.getElementById("slide-figure").innerHTML = slideshow[0];
}
function prevSlide() {
  for (let i=1; i<slideshow.length(); i++) {
    if(document.getElementById("slide-figure").innerHTML == slideshow[i]){
      document.getElementById("slide-figure").innerHTML = slideshow[i-1];
    }
  }
  document.getElementById("slide-figure").innerHTML = slideshow[slideshow.length()-1];
}