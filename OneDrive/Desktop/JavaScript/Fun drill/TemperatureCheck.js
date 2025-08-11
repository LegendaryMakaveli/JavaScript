function checkTemperature(number) {
	const userInput = require("prompt-sync")();
	
	let userEntry = userInput("What is the temperature:  ");
	
	if (userEntry > 30) {
		return "Hot!";
	} else if (userEntry >= 15 && userEntry <= 30) {
		return "Nice!"
	} else if (userEntry < 15) {
		return "Cold!";
	}

}

let temp = 20;

console.log(checkTemperature(temp));