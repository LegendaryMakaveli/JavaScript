function guessAnimal(name) {

const myPetName = require("prompt-sync")();

const MYANIMAL = "dog"

let petName = myPetName("Guess an animal:  ");

if (petName == MYANIMAL) {
	return "Correct!";
} else {
	return "Nope!, it's a dog!"
	}

}
let Pet = "dog";
console.log(guessAnimal(Pet));