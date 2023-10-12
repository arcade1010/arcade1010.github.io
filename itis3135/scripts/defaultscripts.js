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

function howManyWhales() {
    document.getElementById("displayHowManyWhales").innerHTML = "There are currently over 1.5 MILLION whales in the world";
}
function howManySpecies() {
    document.getElementById("displaySpecies").innerHTML = "There are a total of 77 species of whales with 10 grouped famillies"
}
function randomWhaleFact() {
    let x = Math.round(Math.random()*5);
    let message = "";
    switch (x) {
        case 0: message = "Male humpback whales found in U.S. waters sing complex songs in winter breeding areas in waters near Hawaii, in the Caribbean, and elsewhere that can last up to 20 minutes and be heard miles away.";
        break;
        case 1: message = "The blue whale is the largest animal that ever lived and can grow to 90 or more feet and weigh as much as 24 elephants! That’s more than 330,000 pounds ";
        break;
        case 2: message = "Some species of whales are among the longest lived mammals. Scientists estimate bowhead whales (a baleen whale found in the Arctic) can live for more than 200 years, and killer whales (a toothed whale found in various habitats worldwide) can live for more than 100 years.";
        break;
        case 3: message = "Killer whales are highly social and often travel in groups that are matrifocal—a family unit focused or centered on the mother.";
        break;
        case 4: message = "Gray whales make one of the longest annual migrations of any mammal: they travel about 10,000 miles (16,000 km) round trip!";
        break;
        default:
                message = "Press it again";
    }
    document.getElementById("displayFact").innerHTML = message;
}
function whaleJoke() {
    document.getElementById("displayWhaleJoke").innerHTML = "Free Willy!";
}