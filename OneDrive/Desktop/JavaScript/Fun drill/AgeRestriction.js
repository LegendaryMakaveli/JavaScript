function ageLimit(number) {
	const userInput = require("prompt-sync")();

	const MINIMUMAGE = 10;

	let userEntry = userInput("Enter your age:  ");

	if (userEntry >= MINIMUMAGE) {
		return "Welcome to the show!";
	} else {
		return "dey go house, you are too young!";
	}

}

let customer = 20;

console.log(ageLimit(customer));