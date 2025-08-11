function passwordRetry(word) {
	const userInput = require("prompt-sync")();
	
	const CORRECTPASSWORD = "python";
for (let count = 1; count <= 3; count++) {
	let userEntry = userInput("Enter the correct password to enter: ");
if(userEntry == CORRECTPASSWORD) {
		return "Success!";	
} else {
	console.log("Incorrect password!");
	}
if (count == 3) {
	return "Locked out!";
	}
}
}
let password = "python";
console.log(passwordRetry(password))