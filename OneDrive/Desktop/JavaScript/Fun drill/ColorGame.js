const prompt = require("prompt-sync")();

function colorGame() {
const favColor = "blue";

for (let count = 1; count <= 3; count++) {
let guess = prompt("Guess the color:  ").toLowerCase();

if (guess == favColor) {
	console.log("Correct");
break;
} else if (guess == "green") {
	console.log("Close");
	} else {
	console.log("Wrong");
	}
}

}

console.log(colorGame());