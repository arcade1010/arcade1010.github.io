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
const scrollSpeed = 10; // Adjust scroll speed as needed

let scrollDirection = 0;

aboutMeSection.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const sectionWidth = aboutMeSection.offsetWidth;

    if (mouseX < sectionWidth * 0.1) {
        scrollDirection = -1; // Scroll left
    } else if (mouseX > sectionWidth * 0.9) {
        scrollDirection = 1; // Scroll right
    } else {
        scrollDirection = 0; // Stop scrolling
    }
});

// Scroll container on hover
const scrollContainer = () => {
    aboutMeSection.scrollLeft += scrollDirection * scrollSpeed;
    requestAnimationFrame(scrollContainer);
};

scrollContainer();