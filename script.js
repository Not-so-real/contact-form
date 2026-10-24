document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("message");

    if (!form || !message) {
        console.error("Form or message element not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const button = form.querySelector('button[type="submit"]');

        button.disabled = true;
        button.textContent = "Submitting...";

        setTimeout(function () {
            message.textContent =
                "Thank you! Your response has been received successfully.";

            message.style.display = "block";

            form.reset();

            button.disabled = false;
            button.textContent = "Submit Details";

            message.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }, 800);
    });
});