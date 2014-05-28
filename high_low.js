var random_number = Math.floor((Math.random() * 10) + 1),
    guess = prompt("Make a guess")
    guess_count = 1;

while (guess !== random_number) {
  if (guess - random_number > 0) {
    guess = prompt("guess lower");
  }
  else {
    guess = prompt("guss higher");
  }
}
alert("you got it, the number was " + random_number);
