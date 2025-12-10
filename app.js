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
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    res.send(`
        <html>
        <head>
            <title>BMI Result</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Your BMI Result</h1>
                <p>Your BMI is: <strong>${bmi.toFixed(2)}</strong></p>
                <p>Category: <strong>${category}</strong></p>
                <a href="/" class="btn">Back</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, function() {
    console.log("Server starting: http://localhost:3000");
});
