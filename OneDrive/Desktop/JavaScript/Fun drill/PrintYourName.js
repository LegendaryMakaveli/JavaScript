
const userInput = require("prompt-sync")();

let userEntry = userInput("What your name:  ");

for (let count = 0; count < 3; count++) {
	console.log(userEntry);
}