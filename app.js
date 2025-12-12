const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.post("/calculate", (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const gender = req.body.gender;
    const age = parseInt(req.body.age);

    if (!gender || !age || age < 5 || age > 120 || weight < 20 || height < 0.5) {
        return res.send(`
            <h1>Invalid input</h1>
            <p>Please enter valid gender, age, weight, and height.</p>
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

    let angle = Math.min(Math.max((bmi - 15) * 6, 0), 180);

    fs.readFile(__dirname + "/views/result.html", "utf8", (err, data) => {
        if (err) {
            return res.send("Error loading result page.");
        }

        let html = data
            .replace("{{bmi}}", bmi.toFixed(1))
            .replace("{{category}}", category)
            .replace(/{{class}}/g, categoryClass)
            .replace("{{gender}}", gender)
            .replace("{{age}}", age)
            .replace("{{angle}}", angle);

        res.send(html);
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
