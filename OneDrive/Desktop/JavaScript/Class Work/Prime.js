
let totalNumbers = 150; 
for (let count = 3; count < totalNumbers; count++) {
	isPrimeNumber = true;
	for (let counter = 2; counter < count; counter++) {

		if (count % counter === 0) {
			isPrimeNumber = false;
			break;
		}

		}
if (isPrimeNumber) {

	console.log(count)
}
}