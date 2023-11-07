function emailSubmit() {
    let email = document.getElementById('email').value;
    document.getElementById("emailResult").innerHTML = "We will contact you at " + email + " in approximately 3 tp 5 business days";
}