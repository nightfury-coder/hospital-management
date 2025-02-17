document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value.trim();

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
                return;
            }

            // Simulating authentication (Replace with backend logic)
            if (username === "testuser" && password === "password123") {
                alert("Login successful! Redirecting to dashboard...");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid credentials! Try again.");
            }
        });
    }

    // Handle Signup
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("signup-username").value.trim();
            const email = document.getElementById("signup-email").value.trim();
            const password = document.getElementById("signup-password").value.trim();

            if (username === "" || email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Simulating account creation (Replace with backend logic)
            alert("Signup successful! You can now log in.");
            window.location.href = "index.html"; // Redirect to login page
        });
    }
});
