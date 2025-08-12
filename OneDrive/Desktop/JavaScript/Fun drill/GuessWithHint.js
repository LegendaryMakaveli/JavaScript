const prompt = require("prompt-sync")();

function guessHint() {
	let answer = prompt("Guess the number:  ");
	
	while (answer != 25) {
		let answer = prompt("Guess the number:  ");	
	} if (answer > 25) {
		console.log("Too high!");
	} else if (answer < 25) {
		console.log("Too low!");
	} else {
		console.log("Correct!");
	}
}

guessHint();