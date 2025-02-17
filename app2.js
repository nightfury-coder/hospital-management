document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        selectable: true,
        dateClick: function (info) {
            let appointment = prompt("Enter appointment details for " + info.dateStr);
            if (appointment) {
                calendar.addEvent({
                    title: appointment,
                    start: info.dateStr,
                    allDay: true,
                });
                alert("Appointment scheduled on " + info.dateStr);
            }
        },
    });

    calendar.render();
});

// Login Functionality
function login() {
    let username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("loggedInUser", username);
        document.getElementById("login-container").classList.add("d-none");
        document.getElementById("scheduler-container").classList.remove("d-none");
    } else {
        alert("Please enter a username.");
    }
}

// Jitsi Video Call Functionality
function startVideoCall() {
    const domain = "meet.jit.si";
    const options = {
        roomName: "AppointmentRoom",
        width: "100%",
        height: 400,
        parentNode: document.getElementById("jitsi-container"),
        userInfo: {
            displayName: localStorage.getItem("loggedInUser") || "Guest",
        },
    };
    new JitsiMeetExternalAPI(domain, options);
}
