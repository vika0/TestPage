function validateForm() {
    var firstVal = document.forms["testPageForm"]["firstname"].value;
    if (! /^[a-zA-z]/.test(firstVal) ) {
        alert("Name must be filled out");
        return false;
    }
    var secondVal = document.forms["testPageForm"]["lastname"].value;
    if (! /^[a-zA-z]/.test(secondVal)) {
        alert("Last name must be filled out");
        return false;
    }
    var thirdVal = document.forms["testPageForm"]["message"].value;
    if (! /^[a-zA-z]/.test(thirdVal)) {
        alert("Message must be filled out");
        return false;
    }
}