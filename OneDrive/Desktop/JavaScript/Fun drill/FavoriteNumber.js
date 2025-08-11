function guessNumber(number) {
const favNumber = require("prompt-sync")();

const favoriteNumber = 7;

let guessLuckyNumber = favNumber("Guess the lucky number:  ");

if (guessLuckyNumber == favoriteNumber) {
	return "That's my favorite number!";
	} else {
	return "Nice try, guess again!";
	}

}

let userGuess = 7;

console.log(guessNumber(userGuess));