// generates a number 1 - 10 to the lowest int
var play = (function() {
var random_number = Math.floor((Math.random() * 10) + 1),
    guess = prompt("Make an integer guess 1-10"),
    guess_count = 1;
// while guess is not the random number, keep guessing if count under 3
while (guess != random_number) {
  if (guess - random_number > 0 && guess_count < 3) {
    guess = prompt("guess lower");
    guess_count++;
  }
// implied higher guess
  else if (guess_count < 3){
    guess = prompt("guess higher");
    guess_count++;
  }
// implied took too many guesses
  else {
    alert("you took too many guesses! it was " + random_number);
    return;
  }
}
alert("you got it in " + guess_count + " tries, the number was " + random_number);
});

play();

var play_again = confirm("play again?");
if (play_again){
  play();
}
