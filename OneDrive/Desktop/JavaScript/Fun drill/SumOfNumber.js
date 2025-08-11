function sumAllNumber(numbers) {
	let sum = 0;
	for (let count = 1; count <= numbers; count++) {
	sum += count;
	}
return sum;
}

let number = 10;

console.log("The sum is: " + sumAllNumber(number));