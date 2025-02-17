const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // Serve frontend files from 'public' folder

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // Load the HTML page
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
