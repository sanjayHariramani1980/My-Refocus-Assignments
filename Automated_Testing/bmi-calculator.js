// Module 1, Unit 2, Lesson 1, Assignment 1, Task 2
// write a simple code that calculates a person's BMI or Body Mass Index

let weightInKG = 0;
let heightInM = 0;

function bmiResult(weightInKG, heightInM) {
    let result = weightInKG / (heightInM * heightInM);
    if (result < 18.5) {
        return "Underweight";
    } else if (result >= 18.5 && result < 25) {
        return "Healthy Weight";
    } else if (result >= 25 && result < 30) {
        return "Overweight";
    } else if (result >= 30) {
        return "Obese";
    }
}

module.exports = bmiResult;