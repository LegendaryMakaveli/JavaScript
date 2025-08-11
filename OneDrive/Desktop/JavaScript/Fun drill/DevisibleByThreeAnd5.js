function divisibleBy3And5(number) {
let newArray = [];
for (let count = 1; count <= number; count++) {
	if(count % 3 == 0 && count % 5 == 0)
	newArray.push(count);
	}
return newArray;
}

let numbers = 60;

console.log(divisibleBy3And5(numbers));