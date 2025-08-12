function numberPattern() {
for (let count = 1; count <= 3; count++) {
let line = ' ';
for (let counter = 1; counter <= count; counter++) {
line += counter + ' ';
}
console.log(line);
}
}

numberPattern();