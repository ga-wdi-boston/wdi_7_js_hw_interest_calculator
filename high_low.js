var random_number = Math.floor((Math.random() * 10) + 1),
    guess = prompt("Make a guess")
    guess_count = 1;

while (guess != random_number) {
  if (guess - random_number > 0 && guess_count < 3) {
    guess = prompt("guess lower");
    guess_count++;
  }
  else if (guess_count < 3){
    guess = prompt("guess higher");
    guess_count++;
  }
  else {
    alert("you took too many guesses! it was " + random_number);
    return;
  }
}

alert("you got it in " + guess_count + " tries, the number was " + random_number);


