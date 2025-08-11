function positiveOrNegative(number) {
	const userInput = require("prompt-sync")();
	
	let userEntry = userInput("Enter a number to check for positive and negative:  ");
	if (userEntry > 0) {
		return "Positive!";
	} else if (userEntry < 0) {
		return "Negative!";
	} else if (userEntry == 0) {
		return "Zero";
	}
}

let number = 5;

console.log(positiveOrNegative(number));