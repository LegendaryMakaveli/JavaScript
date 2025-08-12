const prompt = require("prompt-sync")();

function checkAge() {
	let userAge = prompt("How old are you?:  ");
	let userHeight = prompt("What's your height?:  ");

	if (userAge >= 12 && userHeight >= 140) {
		console.log("Ride Allowed!");
	} else if (userAge < 12 && userHeight >=140) {
		console.log("Too young!");
	} else if (userAge >= 12 && userHeight < 140) {
		console.log("Too short");
	} else {
		console.log("Wetin you dey do for here!")
	}

}

checkAge();