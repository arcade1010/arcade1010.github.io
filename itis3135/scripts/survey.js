function addCourse() {
    let courses = document.getElementById("courses");
    let courseTitle = document.createElement("h5");
    courseTitle.innerHTML = "Course Title: ";
    let inputTitle = document.createElement("input");
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('Placeholder', 'ITIS 31...');
    courses.appendChild(courseTitle);
    courses.appendChild(inputTitle);

    let courseDescription = document.createElement("h5");
    courseDescription.innerHTML = "Course Title: ";
    let inputDescription = document.createElement("input");
    inputDescription.setAttribute('type', 'text');
    inputDescription.setAttribute('Placeholder', 'In this course...');
    courses.appendChild(courseDescription);
    courses.appendChild(inputDescription);
}