const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/calculate", function(req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);
    res.send("Your BMI is: " + bmi.toFixed(2));
});

app.listen(3000, function() {
    console.log("Server starting: http://localhost:3000");
});
