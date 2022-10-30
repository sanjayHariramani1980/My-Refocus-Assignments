// Module 1, Unit 1, Lesson 3, Assignment 2, Task 1
// Create an algorithm which checks a text and finds its first uppercase letter.

const str = "there is a storm coming to the East of the Philippines";
const strUpperCase = str.match(/[A-Z]/g);  // we take all capital letters from the string and place them in a new array
// console.log(strUpperCase) will give me all the Capital Letters within the string.

function firstCapital() {    // we create a function that gives a response if the new array is null OR to return the first value (being the value for index 0)
        if (strUpperCase === null) {
            return console.log(`There are no upper-case letters in this string.`);
        } else {
            const firstUpperCase = strUpperCase[0]; // we create a new parameter to hold the final result
            return console.log(`The first upper-case letter found in this string is: ${firstUpperCase}`);
        }
    }

firstCapital(); // we call the final result, by running the function.

// you may edit the string capitals (line 4) to test the function;