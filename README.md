# BMI Calculator — Node.js + Express

A clean and modern web application for calculating **Body Mass Index (BMI)**.  
Built using **Node.js**, **Express**, **HTML**, and **CSS** as part of the **WEB Technologies (Back End)** course.

---

## Technologies Used

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## Features

- **Simple and user-friendly interface**
- **Input validation** (prevents negative and zero values)
- **Server-side BMI calculation**
- **Beautiful, modern UI with color-coded categories**
- **Separate result page rendered with template placeholders**
- **Clean and understandable project structure**
- **Informational disclaimer: *BMI is not a medical diagnosis**

---

## Project Structure
```
bmi-calculator/
├── app.js              # Express server, routes, and BMI logic
├── package.json        # Project dependencies and configuration
├── package-lock.json    # Dependency lock file
├── README.md            # Project documentation
│
├── public/             # Static files
│   └── style.css       # Global minimalist styles
│   └── animations.js  # Simple UI animations
└── views/              # HTML templates
    ├── index.html      # Main page with the input form
    └── result.html     # BMI result page template
```

---

## How BMI Is Calculated

### **Formula**
BMI = weight (kg) / height² (m)


### **Categories**

| Category       | BMI Range     | Color      |
|----------------|----------------|------------|
| Underweight    | < 18.5         | 🔵 Blue     |
| Normal         | 18.5 – 24.9    | 🟢 Green    |
| Overweight     | 25 – 29.9      | 🟡 Yellow   |
| Obese          | ≥ 30           | 🔴 Red      |

---

##  How to Run the Project

### 1. Install dependencies
```bash
npm install
```
### 2. Start the server
```
node app.js
```
### 3. Open in browser
```
http://localhost:3000
```
---
##  How It Works

1. User opens **index.html**
2. Enters **height** and **weight**
3. Form sends data to **/calculate**

### Server Process
- Validates input
- Calculates **BMI**
- Determines **category**
- Loads **result.html**
- Replaces placeholders:
    - `{{bmi}}`
    - `{{category}}`
    - `{{class}}`

4. User receives a fully styled **dynamic result page**

## Author

**Altynay Yertay**  
Software Engineering Student  
Astana IT University
