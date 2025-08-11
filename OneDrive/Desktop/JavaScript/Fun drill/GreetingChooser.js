function greetUser(myName) {
const user = require("prompt-sync")();

let name = userName.toUpperCase();

userName = user("What is your name:  ");

if (userName == "Alex") {
	return "Hello, friend";
} else {
	return "Hi, stranger"
	}

}

let userName = "Alex";
console.log(greetUser(userName));