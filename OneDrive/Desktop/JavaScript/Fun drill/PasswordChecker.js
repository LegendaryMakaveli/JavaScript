function verifyPassword(words) {
	const userInput = require("prompt-sync")();

	const PASSWORD = "secret123";

	let userEntry = userInput("Enter the entry passsword!:  ");
	if (userEntry === PASSWORD) {
		return "Access granted! Welcome!";
	} else {
		return " Accces denied!";
	}

}

let customer = "myPassword123";

console.log(verifyPassword(customer));