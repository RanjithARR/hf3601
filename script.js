// script.js

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;

    if (name && email && country) {
        alert(`Thank you, ${name}, for registering from ${country}. We will send you details at ${email}.`);
    } else {
        alert('Please fill out all fields.');
    }
});
