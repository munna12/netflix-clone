// =========================================================
// Netflix Clone — script.js
// Handles the "Get Started" email sign-up forms.
// =========================================================

(function () {
    "use strict";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function wireUpForm(formId, inputId, errorId) {
        const form = document.getElementById(formId);
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);

        if (!form || !input || !error) return;

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const value = input.value.trim();

            if (!value) {
                showError(input, error, "Please enter an email address to continue.");
                return;
            }

            if (!emailPattern.test(value)) {
                showError(input, error, "Please enter a valid email address.");
                return;
            }

            clearError(input, error);
            error.textContent = "";
            error.style.color = "#4be37c";
            error.textContent = "Looks good! Redirect to sign-up would happen here.";
            form.reset();
        });

        input.addEventListener("input", function () {
            clearError(input, error);
        });
    }

    function showError(input, error, message) {
        input.classList.add("is-invalid");
        error.style.color = "#ffb3b3";
        error.textContent = message;
    }

    function clearError(input, error) {
        input.classList.remove("is-invalid");
        error.textContent = "";
    }

    document.addEventListener("DOMContentLoaded", function () {
        wireUpForm("signup-form", "email-input", "email-error");
        wireUpForm("signup-form-2", "email-input-2", "email-error-2");
    });
})();
