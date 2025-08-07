function floydsTriangle(rows){
let number = 0;
for(let count = 0; count <= rows; count++) {
	let line = " ";
for (let counter = 0; counter <= count; counter++) {

if (number < 9) {
	line+= " "
	}
if (number == 10) {
	line+= ""
	}
	number++;
line = line + " " + number;
}
console.log(line);
} 

}

floydsTriangle(72);