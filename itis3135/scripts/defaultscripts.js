function scriptTest() {
    alert("Hey my script is running");
}

function displayName() {
    let x = document.getElementById("frm1");
    let text1 = "The Elegant Whale welcomes you, ";
    for (let i=0; i<x.length; i++) {
        text1 += x.elements[i].value;
    }
    x = document.getElementById("frm2");
    let text2 = ". We're glad you are doing ";
    for (let i=0; i<x.length; i++) {
        text2 += x.elements[i].value;
    }
    document.getElementById("displayNameFeeling").innerHTML = (text1 + text2 + "!");
}

function favNum() {
    let x = document.getElementById("favNumInput").value;
    x = Math.round(x);
    

    if (isNaN(x)){
        document.getElementById("displayNumber").innerHTML = "number is coming through as NaN";
    }
    else {
    switch (x) {
        case 1: document.getElementById("displayNumber").innerHTML = "heisagon";
        break;
        case 2: document.getElementById("displayNumber").innerHTML = "digon";
        break;
        case 3: document.getElementById("displayNumber").innerHTML = "treisagon";
        break;
        case 4: document.getElementById("displayNumber").innerHTML = "tettaresagon";
        break;
        case 5: document.getElementById("displayNumber").innerHTML = "pentegon";
        break;
        case 6: document.getElementById("displayNumber").innerHTML = "hexagon";
        break;
        case 7: document.getElementById("displayNumber").innerHTML = "heptagon";
        break;
        case 8: document.getElementById("displayNumber").innerHTML = "oktogon";
        break;
        case 9: document.getElementById("displayNumber").innerHTML = "enneagon";
        break;
        case 10: document.getElementById("displayNumber").innerHTML = "dekagon";
        break;
        case 0: document.getElementById("displayNumber").innerHTML = "Not a polygon (or a shape for that matter)";
        break;
        default: 
            document.getElementById("displayNumber").innerHTML = "Please enter a number from 1 to 10";
    }
    }
}