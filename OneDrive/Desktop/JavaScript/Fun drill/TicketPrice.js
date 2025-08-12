const prompt = require("prompt-sync")();

function ticketPrice(number) {
const AdultPrice = 10;
const childPrice = 5;

	let userName = prompt("How old are you?:  ");

	if (userName >= 18 ) {
		return AdultPrice;
	}else if (userName < 18 ) {
		return childPrice;
	}

}

let age = 18;
console.log(ticketPrice(age));