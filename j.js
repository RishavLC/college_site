// Add interactivity for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Display success message
    alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
    
    // Reset the form
    document.getElementById('contact-form').reset();
});
