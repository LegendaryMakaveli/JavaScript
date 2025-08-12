const prompt = require("prompt-sync")();

function playGame() {
let userInput = parseInt(prompt("Enter a number to play game:  "));

if (userInput % 3 == 0 && userInput % 5 == 0) {
	return "FizzBuzz";
} else if (userInput % 3 == 0) {
	return "Fizz";
} else if (userInput % 5 == 0) {
	return "Buzz";
}

}

console.log(playGame());