function countByTwo(number) {

let counter = 0;
let newArray = [];

for (let count = 0; count < number; count++) {
	if (count % 2 == 0) {
		counter = count + 2;
		newArray.push(counter);
	}	

}

return newArray;
}

let number = 10;

console.log(countByTwo(number));