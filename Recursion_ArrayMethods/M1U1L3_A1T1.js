// Module 1, Unit 1, Lesson 3, Assignment 1, Task 1
// Find the most used item on the array

// The array
const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome"
];

// We create a new Array to be the output of our result
let arrSummary = {};

// The Algorithm to count occurences within an Array
arr.forEach(function (i) {
    arrSummary[i] = (arrSummary[i] || 0) + 1;
});

console.log(arrSummary);