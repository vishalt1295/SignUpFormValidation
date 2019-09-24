// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var firstName = document.signupForm.fname.value;
    var lastName = document.signupForm.lname.value;
    var email = document.signupForm.email.value;
    var invalidInput = /^[a-zA-Zs]+$/;

    // Defining error variables with a default value
    var fnameError = lnameError = emailError = true;

    // Validate name
    if (firstName == "") {
        printError("fnameError", "Please enter your first name");
        document.getElementById("firstName").style.borderBottomColor = "red";
        document.getElementById("firstName").style.borderBottomWidth = "2px";
    } else {
        if (invalidInput.test(firstName) === false) {
            printError("fnameError", "Please enter a valid first name");
            document.getElementById("firstName").style.borderBottomColor = "red";
            document.getElementById("firstName").style.borderBottomWidth = "2px";
        } else {
            printError("fnameError", "");
            fnameError = false;
            document.getElementById("firstName").style.borderBottomColor = "";
        }
    }

    if (lastName == "") {
        printError("lnameError", "Please enter your last name");
        document.getElementById("lastName").style.borderBottomColor = "red";
        document.getElementById("lastName").style.borderBottomWidth = "2px";
    } else {
        if (invalidInput.test(lastName) === false) {
            printError("lnameError", "Please enter a valid last name");
            document.getElementById("lastName").style.borderBottomColor = "red";
            document.getElementById("lastName").style.borderBottomWidth = "2px";
        } else {
            printError("lnameError", "");
            lnameError = false;
            document.getElementById("lastName").style.borderBottomColor = "";
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailError", "Please enter your email address");
        document.getElementById("email").style.borderBottomColor = "red";
        document.getElementById("email").style.borderBottomWidth = "2px";
    } else {
        // Regular expression for basic email validation
        printError("emailError", "");
        emailError = false;
        document.getElementById("email").style.borderBottomColor = "";
    }
}

// Reset Form
function resetForm() {
    document.getElementById("signupForm").reset();
    // First name field reset
    document.getElementById("firstName").style.borderBottomColor = "";
    document.getElementById("firstName").style.borderBottomWidth = "";
    // Last name field reset
    document.getElementById("lastName").style.borderBottomColor = "";
    document.getElementById("lastName").style.borderBottomWidth = "";
    // Email field reset
    document.getElementById("email").style.borderBottomColor = "";
    document.getElementById("email").style.borderBottomWidth = "";
    // Hide error messages
    printError("fnameError", "");
    printError("lnameError", "");
    printError("emailError", "");
}
