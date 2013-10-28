var x, guess;

x = 5; 
guess = prompt("Guess the number betwen 1 and 10.")

if (x < guess) {
	console.log("Too high.");
}
else if (guess < x) {
	console.log("Too low.");
}
else if (guess === x) {
	console.log("That's correct.");
}


