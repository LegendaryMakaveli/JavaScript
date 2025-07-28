function getGrade() {
//let score = prompt("Enter student grade: ");
    let score =  document.getElementById("password").value
	score = Number(score);
	if (score <= 100) {
		return score;
	} else {
		console.log("Enter a valid score from 0 - 100");
	}
return getScore();
}


function calculateGrade(score) {
	let grade;

	if (score >= 90) {
		grade = "A";
	} else if (score >= 70) {
		grade = "B";
	} else if (score >= 55) {
		grade = "C";
	} else if (score >= 35) {
		grade = "D";
	} else {
		grade = "F";
	}
console.log("Grade: ", grade);
return grade;
}

function getFeedback(grade) {
	if (grade === "A") {
		console.log("Excelent job!");
	} else if (grade === "B") {
		console.log("Awesome!");
	} else if (grade === "C") {
		console.log("You can do better");
	} else if (grade === "D") {
		console.log("Nur try this again next semester oo");
	} else {
		console.log("Dey go house!")
	}
return grade;
}

function main() {
	let score = getGrade();
	let grade = calculateGrade(score);
	let feedback = getFeedback(grade);
}



