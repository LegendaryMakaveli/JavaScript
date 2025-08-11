function controlTraffic(word) {
const userInput = require("prompt-sync")();

	const goForward = "green";
	const stopThere = "red";
	const waitThere = "yellow";

	let userEntry = userInput("What is the ligth color at the moment:  ");
	if (userEntry === goForward) {
		return "Go!";
	} else if (userEntry ===  stopThere) {
		return "Stop!";
	} else if (userEntry === waitThere) {
		return "Wait!";
	}

}

let testCase = "red";

console.log(controlTraffic(testCase));