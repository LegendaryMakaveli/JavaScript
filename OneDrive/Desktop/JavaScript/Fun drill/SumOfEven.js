function sumEven(number) {
	let sumEven = 0;
	for (let count = 0; count <= number; count++) {
		if (count % 2 == 0) {
			sumEven += count
		}
	}
return sumEven;
}

console.log(sumEven(20));