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
    const form = document.querySelector('.volunteer-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('volunteer-name').value;
        const email = document.getElementById('volunteer-email').value;
        const message = document.getElementById('volunteer-message').value;

        // Send the email
        emailjs.send("service_g0xjxy7", "template_yr9w1t9", {
            from_name: name,
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
