const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function() {
    console.log("Server starting: http://localhost:3000");
});
