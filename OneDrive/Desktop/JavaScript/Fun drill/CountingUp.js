function countingUp(number) {
	let newArray = [];
	for (count = 1; count < number; count++) {
		newArray.push(count);
	}
return newArray;
}
let number = 8;

console.log(countingUp(number));