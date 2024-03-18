function educationScroll() {
    document.getElementById("education").scrollIntoView();
}
function projectsScroll() {
    document.getElementById("projects").scrollIntoView();
}
function aboutMeScroll() {
    document.getElementById("aboutMe").scrollIntoView();
}
function myPCScroll() {
    document.getElementById("myPC").scrollIntoView();
}
function contactScroll() {
    document.getElementById("contact").scrollIntoView();
}

function backToTop() {
    document.getElementById("header").scrollIntoView();
}


const aboutMeSection = document.querySelector('.aboutMeGallery');
const scrollSpeed = 1; // Adjust scroll speed as needed
const accelerationFactor = 5; // Adjust acceleration factor as needed

let scrollDirection = 1;
let mouseHovering = false;

aboutMeSection.addEventListener('mouseenter', () => {
    mouseHovering = true;
});

aboutMeSection.addEventListener('mouseleave', () => {
    mouseHovering = false;
});

// Continuous scrolling function
const scrollContainer = () => {
    if (mouseHovering) {
        aboutMeSection.scrollLeft += scrollDirection * scrollSpeed * accelerationFactor;
    } else {
        aboutMeSection.scrollLeft += scrollDirection * scrollSpeed;
    }

    // Reset scroll position if scrolled beyond the content width
    if (scrollDirection === 1 && aboutMeSection.scrollLeft >= aboutMeSection.scrollWidth - aboutMeSection.clientWidth) {
        aboutMeSection.scrollLeft = 0;
    } else if (scrollDirection === -1 && aboutMeSection.scrollLeft <= 0) {
        aboutMeSection.scrollLeft = aboutMeSection.scrollWidth - aboutMeSection.clientWidth;
    }

    requestAnimationFrame(scrollContainer);
};

scrollContainer();