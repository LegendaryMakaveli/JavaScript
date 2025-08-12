const prompt = require("prompt-sync")();

function gradeAverage() {
let total = 0;

for(let count = 1; count <= 5; count++) {
	let userScore = parseInt(prompt("Enter student score from 0 ---  100:  "));

if (userScore >= 0 && userScore <= 100) {

total += userScore;

}	
}
let average = total / 5;
return average;
}

console.log(gradeAverage());