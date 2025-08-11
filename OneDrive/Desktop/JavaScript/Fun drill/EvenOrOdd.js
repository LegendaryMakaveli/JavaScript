function checkEvenOrOddNumber(number) {
	const userInput = require("prompt-sync")();

	let userEntry = userInput("Enter a number pls!:  ");
	if (userEntry % 2 == 0) {
		return "Even!";
	} else {
		return "Odd!"
	}

}

let input = 4;
console.log(checkEvenOrOddNumber(input));