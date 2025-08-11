function gradeCalculator(number) {
	const userInput = require("prompt-sync")();

	let userEntry = userInput("Enter student score from 0- 100:  ");
	if (userEntry >= 90) {
		return "A";
	} else if (userEntry >= 80 && userEntry < 90) {
		return "B";
	} else if (userEntry >= 70 && userEntry < 80) {
		return "C";
	} else if (userEntry < 70) {
		return "F";
	}

}

let grade = "B";

console.log(gradeCalculator(grade));