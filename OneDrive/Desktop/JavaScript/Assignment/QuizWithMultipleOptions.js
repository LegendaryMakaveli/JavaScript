const readline = require("readline");
const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout

});
let winCount = 0;
let loseCount = 0;

rl.question("\n1. Which element has the atomic number 92?  \n\nA) Platinum \n\nB) Uranium \n\nC) Thorium \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "B") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is B) Urainium");
			loseCount++ ;
	}

rl.question("\n2. Who was the first woman to win a Nobel Prize??  \n\nA) Marie Curie \n\nB) Ada Lovelace \n\nC) Rosalind Franklin \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "A") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is A) Marie Curie");
			loseCount++ ;
	}

rl.question("\n3. Which planet has the shortest day?  \n\nA) Saturn \n\nB) Jupiter \n\nC) Mars \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "B") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is B) Jupiter");
			loseCount++ ;
	}

rl.question("\n4. Which English king had six wives?  \n\nA) Richard III \n\nB) Edward VI \n\nC) Henry VIII \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "C") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is C) Henry VIII");
			loseCount++ ;
	}

rl.question("\n5. Which famous structure was originally built as a mausoleum in India?  \n\nA) Lotus Temple \n\nB) Taj Mahal VI \n\nC) Red Fort \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "B") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is B) Taj Mahal VI");
			loseCount++ ;
	}

rl.question("\n6. Which bird can fly backward?  \n\nA) Swallow \n\nB) Finch \n\nC) Hummingbird \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "C") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is C) Hummingbird");
			loseCount++ ;
	}

rl.question("\n7. What is the longest river in Asia?  \n\nA) Mekong \n\nB) Ganges \n\nC) Yangtze \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "C") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is C) Yangtze");
			loseCount++ ;
	}

rl.question("\n8. Who wrote “The Brothers Karamazov?  \n\nA) Tolstoy \n\nB) Dostoevsky \n\nC) Chekhov \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "B") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is B) Dostoevsky");
			loseCount++ ;
	}

rl.question("\n9. Which mathematician invented calculus independently from Newton?  \n\nA) Euler \n\nB) Gauss \n\nC) Leibniz \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "C") {
	console.log("\n   Correct guy!");
		winCount++;
	} else {
		console.log("\n   wrong! The answer is C) Leibniz");
			loseCount++ ;
	}

rl.question("\n10. What is the best gear tranmission for a truck?  \n\nA) Automatic transmission \n\nB) Manual transmission \n\nC) Self drive \n\n Your answer:  ", (answer) => {
if (answer.toUpperCase() === "B") {
	console.log("\n   Correct guy!... You sabi better thing");
		winCount++;
	} else {
		console.log("\n   wrong!... Na una type dey want free woman, The answer is B) Manual transmission");
			loseCount++ ;
	}

	console.log(`\n   You got ${winCount} / 10 questions correctly`);
	console.log(`\n   You lose ${loseCount} / 10 questions`);


	if (winCount >=8) {
		console.log("\n   You sabi book my guy!!");
	} else if (winCount >=5 && winCount <= 7) {
		console.log("\n   you sabi small!!");
	} else {
		console.log("\n   Your brain too dull guy!!")
	}
rl.close();
});
});
});
});
});
});
});
});
});
});




