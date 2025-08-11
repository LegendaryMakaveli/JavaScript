//function guessNumber(number) {
	const userInput = require("prompt-sync")();

	const SECRET = 8;
	
	let userEntry = userInput("Guess the number:  ");

	while(userEntry != 8) {
		userEntry = userInput("Try again:  ");
	}
	if (userEntry == SECRET) {
		console.log("Correct!");
	} else {
		console.log("Try again!")
	}
//}

//let input = 8;

//console.log(guessNumber(input));