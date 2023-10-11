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