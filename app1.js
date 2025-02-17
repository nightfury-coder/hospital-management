document.addEventListener("DOMContentLoaded", function() {
    // Search functionality
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // You can replace this alert with actual search functionality
        }
    });

    // Notification Click Alert
    document.querySelector(".notifications").addEventListener("click", function() {
        alert("You have new notifications!");
    });

    // Redirect to Appointments
    document.querySelector(".appointments button").addEventListener("click", function() {
        window.location.href = "appointment.html";
    });

    // Redirect to Video Chat
    document.querySelector(".video-chat button").addEventListener("click", function() {
        window.location.href = "videochat.html";
    });

    // Profile Logout Confirmation
    document.querySelector(".profile").addEventListener("click", function() {
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            window.location.href = "login.html"; // Redirect to login page
        }
    });
});
