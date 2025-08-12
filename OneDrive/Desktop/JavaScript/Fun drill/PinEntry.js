function pinEntry() {
	const userInput = require("prompt-sync")();
	
	const CORRECTPASSWORD = 1234;
for (let count = 1; count <= 3; count++) {
	let userEntry = parseInt(userInput("Enter the correct password to enter: "));
if(userEntry == CORRECTPASSWORD) {
		return "Access granted!";	
} else {
	console.log("Try Again!");
	}
if (count == 3) {
	return "Locked!";
	}
}
}
let password =123
console.log(pinEntry(password))