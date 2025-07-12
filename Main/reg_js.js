document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form (add your own validation logic here)
    var isValid = validateForm();

    if (isValid) {
        alert('Successfully Registered');
        window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
    }
});

function validateForm() {
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('email_error');
    var contactNoField = document.getElementById('contact-no');
    var contactNoError = document.getElementById('contact_no_error');

    var isValid = true;

    // Email validation
    if (!validateEmail(emailField.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = ''; // Clear the error message
    }

    // Contact number validation (simple check for digits only)
    if (!validateContactNo(contactNoField.value)) {
        contactNoField.nextElementSibling.textContent = 'Please enter a valid contact number.';
        isValid = false;
    } else {
        contactNoField.nextElementSibling.textContent = ''; // Clear the error message
    }

    return isValid;
}

function validateEmail(email) {
    // Simple email validation
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateContactNo(contactNo) {
    // Simple contact number validation (digits only, length check)
    var re = /^\d{10}$/;
    return re.test(contactNo);
}
