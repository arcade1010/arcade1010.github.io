let courseContent =[];

function addCourse() {

    var curCount = courseContent.length;
    var curCourse = "course" + curCount;
    var content = " <div id=\"" + curCourse + "\" > ";
    content +="<br> <label> Course Title: <input type=\"text\" name=\"courseTitle\"></label>";
    content +="</label><label>Course Description:<textarea type=\"text\" name=\"courseDescription\"></textarea></label>";
    content +="<button type=\"button\" onclick=\"removeCourse(" + curCount + ")\">Delete</button>";
    content+= "<div>";

    document.getElementById("coursesContainer").innerHTML += content;
    courseContent.push(curCourse);
}

function removeCourse(location) {
    console.log(courseContent[location]);
    var curCourse = document.getElementById(courseContent[location]);
    if(curCourse != null) {
        curCourse.remove();
        courseContent.splice(location, 1);
    }
}

function loadContent(){
   
   
   
    var page = document.getElementById("displayOutput");
    
    var name = document.getElementById("name").value;
    var mascot = document.getElementById("mascot").value;
    var image = document.getElementById('image').files[0];
    const imageUrl = URL.createObjectURL(image); 
    var caption = document.getElementById("caption").value;
    var persBackground = document.getElementById("personalBackground").value;
    var profBackground = document.getElementById("professionalBackground").value;
    var acadBackground = document.getElementById("academicBackground").value;
    var webDevBackground = document.getElementById("webDevBackground").value;
    var compPlatform = document.getElementById("computerPlatform").value;
 
    const listCourseName = document.getElementsByName("courseTitle");
    const listCourseDescription = document.getElementsByName("courseDescription");

    var funnyThing = document.getElementById("funnyThing").value;
    var anythingElse = document.getElementById("anythingElse").value;


    page.innerHTML = "<h2>Name: " + name + "</h2>";
    page.innerHTML += "<h2>Mascot: " + mascot + "</h2>";
    page.innerHTML += "<figure> <img src=\"" + imageUrl + "\"> <figcaption>" + caption + "</figcaption> </figure>";
    page.innerHTML += "<ul> <li>Personal Background: " + persBackground + " </li>\
                            <li>Professional Background: " + profBackground + " </li>\
                            <li>Academic Background: " + acadBackground + " </li>\
                            <li>Web Devolopment Background: " + webDevBackground + " </li>\
                            <li>Computer Platform: " + compPlatform + "</li> </ul>";
    
                            page.innerHTML += "<ul>Courses I'm taking: ";
    for(var i=0; i<courseContent.length; i++) {
        page.innerHTML += "<li>" + listCourseName[i].value + " - \
         " + listCourseDescription[i].value; "</li>";
    }
    page.innerHTML += "</ul>";
    page.innerHTML += "<ul><li>Funny thing about myself: " + funnyThing + "</li>\
                           <li>Anything else I'd like to share: " + anythingElse + "</li> <ul>";

    page.innerHTML += "<button type=\"button\">\
    <a href = \"byo_intro.html\">Reset Form</a></button>";


    document.getElementById("frm").remove();
}