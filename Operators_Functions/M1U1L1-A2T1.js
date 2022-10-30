// Assignment 2 Task 1: Temperature Converter
// Formula 1: Kelvin = Celsius + 273.15
// Formula 2: Kelvin = Fahrenheit (Fahrenheit - 32) * (5/9) + 273.15

// Task to convert 28-Degrees Celsius to Kelvin
function convertToKelvin1(tempCelsius){
    let tempKelvin1 = tempCelsius + 273.15;
    return tempKelvin1;
}
console.log(convertToKelvin1(28));
console.log(`28-Degrees Celsius is equivalent to ${convertToKelvin1(28)} Kelvin.`);

// Task to convert 82-Degrees Fahrenheit to Kelvin
let fahrenheit = 82
function convertToKelvin2(tempFahrenheit){
    let tempKelvin2 = (tempFahrenheit - 32) * (5/9) + 273.15;
    return tempKelvin2
}
console.log(convertToKelvin2(fahrenheit));
console.log(`${fahrenheit}-Degrees Fahrenheit is equivalent to ${convertToKelvin2(fahrenheit)} Kelvin.`)