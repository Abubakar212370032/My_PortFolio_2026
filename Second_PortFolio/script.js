document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const button = form.querySelector('button');
        if (button) {
            button.textContent = 'Thanks!';
            setTimeout(() => {
                button.textContent = 'Send Message';
            }, 2000);
        }
        form.reset();
    });
});