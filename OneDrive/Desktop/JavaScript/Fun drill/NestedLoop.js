function numberGrid() {
for (let count = 1; count <= 5; count++){
let line = ' ';
	for (let counter = 1; counter <= 3; counter++) {
		line += counter + ' '
	}
	console.log(line);

}
}

console.log(numberGrid());