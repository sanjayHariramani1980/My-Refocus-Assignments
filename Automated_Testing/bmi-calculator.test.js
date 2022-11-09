const bmiResults = require("./bmi-calculator");

test("Check if BMI calculator Obese", () => {
    expect(bmiResults(130, 1.72)).toEqual("Obese");
});

test("Check if BMI calculator Healthy Weight", () => {
    expect(bmiResults(50, 1.5)).toEqual("Healthy Weight");
});