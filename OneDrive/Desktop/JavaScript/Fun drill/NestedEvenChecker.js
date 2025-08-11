function nestedEven(number) {
	let newArray = [];
	let overAll = [];
	for (let count = 0; count < number.length; count++) {
		newArray = number[count];
	if (newArray % 2 == 0) {
			overAll.push(newArray);
		}
	}
return overAll;
}

let number = [1,2,3,4,5,6,7,8,9,10];

console.log( nestedEven(number));