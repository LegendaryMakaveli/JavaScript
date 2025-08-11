function squareNumber(number) {
	let newArray = [];
	let squareArray = [];
for (let rows = 0; rows < number.length; rows++) {
	newArray = number[rows] * number[rows]
	squareArray.push(newArray)

	}
return squareArray;
}

let numbers = [1,2,3,4,5];
console.log(squareNumber(numbers));