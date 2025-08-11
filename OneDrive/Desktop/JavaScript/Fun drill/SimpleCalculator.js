const userInput = require ("prompt-sync")();

let userEntryOne = parseInt(userInput("Enter the first number:  "));
let userEntryThree = userInput("Enter the arithemetric operator (+ or -):  ");
let userEntryTwo = parseInt(userInput("Enter the second number:  "));

let result = 0;

if (userEntryThree == "+") {
	result = userEntryOne + userEntryTwo;
} else if (userEntryThree == "-" )  {
	result = userEntryOne - userEntryTwo;
}

console.log("Result: " + result);