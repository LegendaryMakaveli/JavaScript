function sumOfMultiple() {
	let total = 0;
	
	for (let count = 0; count <= 50; count++) {
		if (count % 3 == 0 && count % 5 == 0) {
		console.log(count);
			total += count;
		}
	}
return total;
}

console.log( sumOfMultiple());