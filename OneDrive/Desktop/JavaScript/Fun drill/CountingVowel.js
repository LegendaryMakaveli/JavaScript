const userInput = require("prompt-sync")();

function countVowel() {
	let word = userInput("Enter a sentetce:  ").toLowerCase();

	let vowelCount = 0;
	for (let count = 0; count < word.length; count++) {
	let letter = word.charAt(count);

	if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
			vowelCount++;
		}
	}
console.log(vowelCount);

}

countVowel();