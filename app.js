const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("Server is working!");
});

app.listen(3000, function() {
    console.log("Server starting: http://localhost:3000");
});
