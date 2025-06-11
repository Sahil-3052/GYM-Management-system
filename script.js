document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        document.getElementById('registrationMessage').innerText = `Thank you for registering, ${name}!`;
    } else {
        document.getElementById('registrationMessage').innerText = 'Please fill in all fields.';
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const message = document.getElementById('message').value;

    if (contactName && contactEmail && message) {
        document.getElementById('contactMessage').innerText = 'Your message has been sent!';
    } else {
        document.getElementById('contactMessage').innerText = 'Please fill in all fields.';
    }
});
