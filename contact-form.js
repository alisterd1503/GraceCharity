// Function to show the notification
function showNotification(message, duration) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.opacity = '1';

    // Hide after the specified duration
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, duration);
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send the email
        emailjs.send("service_g0xjxy7", "template_ve6qalk", {
            from_first_name: firstName,
            from_last_name: lastName,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message sent successfully!', 1000);
            contactForm.reset();
        }, function(error) {
            console.log('FAILED...', error);
            showNotification('Failed to send message!', 2000);
            contactForm.reset();
        });
    });
});
