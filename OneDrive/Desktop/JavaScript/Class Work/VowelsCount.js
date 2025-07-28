let sentence = "Nigga with attitude"
let again;
let vowelCount= 0;
let count;
for(count = 0; count < sentence.length; count++) {
again = sentence.toLowerCase();
let letter = again.charAt(count);
if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
	vowelCount++;
	}
}
console.log("Vowel count is: " + vowelCount)