let people = [];
let salaries = [];

function addSalary() {
    //get person from drop down menu
    let person = document.getElementById("dropDown").value;
    people.push(person);
    //generate salary
    let salary = Math.floor(Math.random() * 100000 + 50000);
    salaries.push(salary);
}
function displayResults() {
    //highest salary
    let highestSalary = 0;
    for(let i=0; i<salaries.length; i++) {
        if (highestSalary < salaries[i]){
            highestSalary = salaries[i];
        }
    }
    //average salary
    let total = 0;
    for(let i=0; i<salaries.length; i++) {
        total += salaries[i];
    }
    let averageSalary = (total / salaries.length);
    //display in results div
    let results = document.getElementById("results");
    results.innerHTML = "<h2>The Highest Salary is: </h2> <p>" + highestSalary + "</p> <h2>The Average Salary is: </h2> <p> " +  averageSalary + "</p>";
}

function displaySalary() {
    //initialize table headings
    let table = document.getElementById("results_table");
    table.innerHTML = "<tr><th>People</th><th>Salaries</th></tr>";

    //add row of cells for each index in arrays
    for(let i=0; i<people.length && i<salaries.length; i++) {
        table.innerHTML += "<tr><td>"+people[i]+"</td><td>"+salaries[i]+"</td> </tr>"
    }
}