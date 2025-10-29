 //Requesting user their first name
var user = prompt("Hi, what is your firstname");
document.getElementById("userFirstName").innerHTML = "Welcome Back " + user;

function validateForm() {
    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    let isValid = true;

    // Personal Information
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const race = document.getElementById('race').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const pob = document.getElementById('pob').value.trim(); // Fixed ID here

    // Account Information
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validation Functions
    function isValidPassword(pwd) {
        return (
            pwd.length >= 8 &&
            /[A-Z]/.test(pwd) &&
            /[a-z]/.test(pwd) &&
            /[0-9]/.test(pwd) &&
            /[^A-Za-z0-9]/.test(pwd)
        );
    }

    function isValidDate(dateString) {
        if (dateString === '') return false;
        const date = new Date(dateString);
        return !isNaN(date) && date < new Date();
    }

    // Validate required fields
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = "Please enter your first name.";
        isValid = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').textContent = "Please enter your surname.";
        isValid = false;
    }

    if (gender === '') {
        document.getElementById('genderError').textContent = "Please select your gender.";
        isValid = false;
    }

    if (race === '') {
        document.getElementById('raceError').textContent = "Please select your race.";
        isValid = false;
    }

    if (!isValidDate(dob)) {
        document.getElementById('dobError').textContent = "Valid date of birth is required (YYYY-MM-DD).";
        isValid = false;
    }

    if (pob === '') {
        document.getElementById('pobError').textContent = "Please enter your place of birth.";
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = "Please enter your email.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (confirmEmail === '') {
        document.getElementById('confirmEmailError').textContent = "Please confirm your email.";
        isValid = false;
    } else if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = "Email addresses do not match.";
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = "Please enter a password.";
        isValid = false;
    } else if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent =
            "Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        isValid = false;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        isValid = false;
    }

    // Display submission result
    const output = document.getElementById('output');

    if (isValid) {
        output.style.color = 'green';
        output.innerHTML = `
            <br><strong>User Information:</strong><br>
            First name: ${firstName}<br>
            Last name: ${lastName}<br>
            Gender: ${gender}<br>
            Race: ${race}<br>
            Date of birth: ${dob}<br>
            Place of birth: ${pob}<br>
            Email: ${email}<br>
            Password: ${password.length ? '********' : ''}
        `;
    } else {
        output.style.color = 'red';
        output.textContent = 'Please fix the errors in the form.';
    }

    return false; // Prevent form submission
}

// Clear form on reset
document.getElementById('registerForm').addEventListener('reset', function () {
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    document.getElementById('output').textContent = '';
});
