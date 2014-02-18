var x, guess;

x = Math.floor(Math.random() * 10) + 1; 
guess = parseInt(prompt("Guess the number betwen 1 and 10."));


if (guess === x) {
	console.log("That's correct.");
}
else if (guess < x) {
	console.log("Too low. The number is " + x + ".");
}
else if (x < guess) {
	console.log("Too high. The number is " + x + ".");
}


