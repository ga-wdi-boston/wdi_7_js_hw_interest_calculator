var guess, number;

number = Math.floor(Math.random()*11);

guess = prompt("Whats your guess?");
guess = parseFloat(guess);

if (guess < number) {
	document.write("Too low!")
}
else if (guess > number) {
	document.write("Too high!")	
}
else {
	document.write("Right!")
}

