// ============================
// Part 1: Event Handling
// ============================

// Show message on button click
document.getElementById("messageBtn").addEventListener("click", function() {
    document.getElementById("messageOutput").textContent = "Hello! You clicked the button.";
});

// ============================
// Part 2: Interactive Elements
// ============================

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
let countValue = document.getElementById("countValue");

document.getElementById("incrementBtn").addEventListener("click", function() {
    count++;
    countValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
    count = 0;
    countValue.textContent = count;
});

// ============================
// Part 3: Form Validation
// ============================

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default submission

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    let isValid = true;

    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Email validation with regex
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Password validation
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Success message
    if (isValid) {
        document.getElementById("formSuccess").textContent = "Form submitted successfully!";
        document.getElementById("signupForm").reset();
    }
});
