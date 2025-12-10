const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/calculate", function(req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (!weight || !height || weight <= 0 || height <= 0) {
        return res.send(`
            <h1>Invalid input!</h1>
            <p>Weight and height must be positive numbers.</p>
            <a href="/">Back</a>
        `);
    }

    const bmi = weight / (height * height);

    let category = "";
    let categoryClass = "";

    if (bmi < 18.5) {
        category = "Underweight";
        categoryClass = "underweight";
    } else if (bmi < 24.9) {
        category = "Normal";
        categoryClass = "normal";
    } else if (bmi < 29.9) {
        category = "Overweight";
        categoryClass = "overweight";
    } else {
        category = "Obese";
        categoryClass = "obese";
    }

    fs.readFile(__dirname + "/views/result.html", "utf8", (err, data) => {
        if (err) return res.send("Error loading result page.");

        let html = data
            .replace("{{bmi}}", bmi.toFixed(2))
            .replace("{{category}}", category)
            .replace(/{{class}}/g, categoryClass);

        res.send(html);
    });
});

app.listen(3000, function() {
    console.log("Server starting: http://localhost:3000");
});
