const prompt = require("prompt-sync")();

function convertTemp() {

let invalidTemp = -273;
let convert = 0;
for (let count = 1; count <= 5; count++) {
	let userInput = parseInt(prompt("Enter today temperature:  "));
if (userInput == invalidTemp) {
	convert = (userInput * 9)/ 5 + 32
	}

return convert;
}
}

console.log(convertTemp());