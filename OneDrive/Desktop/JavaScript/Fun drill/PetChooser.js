function choosePet(name) {

const myPetName = require("prompt-sync")();

let petName = myPetName("Enter a pet name:  ");

if (petName == "dog") {
	return "woof! Dogs are awesome!";
} else {
	return "Cool choice, but i love dogs!"
	}

}
let favoritePet = "dog";
console.log(choosePet(favoritePet));