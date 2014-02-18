
var secret_number, your_guess, how_many_guesses;

secret_number = Math.floor((Math.random()*10)+1);
how_many_guesses = 0;
while (your_guess != secret_number ) {
  your_guess = prompt("Guess a number between 1 and 10");
  how_many_guesses = how_many_guesses + 1;
if (your_guess < secret_number) {
	console.log("too low");
}
else if (your_guess > secret_number) {
	console.log("too high")
}
else {
	console.log("You guessed it in " + how_many_guesses + " guesses!");
}
}


