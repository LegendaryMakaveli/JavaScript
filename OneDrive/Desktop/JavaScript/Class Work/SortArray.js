function TwoArrays(firstArray, secondArray) {
	let counter = secondArray.length;
	let newOption = firstArray.length + secondArray.length;
	let newArray = [newOption.length];
	for (let rows = 0; rows < firstArray.length; rows++) {
		newArray[rows] = firstArray[rows];
	}
	for (let rows = 0; rows < secondArray.length; rows++) {
		newArray[counter++] = secondArray[rows];
	
	}
//console.log(newArray);
	for (rows = 0; rows <  newArray.length; rows++) {
        
		for (column = 0; column < newArray.length - 1; column++) {
			if (newArray[rows] < newArray[column]) {
 				let temp = newArray[column];
				newArray[column] = newArray[rows];
				newArray[rows] = temp;
			}

		}
	}
	return newArray;
}

console.log(TwoArrays([1,4,5,6,3,5,2,3,4,5,1,4,5,6,6], [2,10,20,22,21,9,7,9,10]));





















