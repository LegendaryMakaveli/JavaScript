function magicNumber(number) {
	const userInput = require("prompt-sync")();

	const MAGICNUMBER = 42;
	
	let userEntry = userInput("Guess the magic number:  ");
	
	if (userEntry == MAGICNUMBER) {
		return "You found the magic number";
	} else {
		return "Keep looking";
	}

}

let number = 89;

console.log( magicNumber(number));