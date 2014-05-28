var random_number = Math.floor((Math.random() * 10) + 1),
    guess = prompt("Make a guess")
    guess_count = 1;

while (guess != random_number) {
  if (guess - random_number > 0) {
    guess = prompt("guess lower");
    guess_count++;
  }
  else {
    guess = prompt("guess higher");
    guess_count++;
  }
}

alert("you got it in " + guess_count + " tries, the number was " + random_number);


