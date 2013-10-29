var guess = 0, the_number = Math.floor((Math.random()*10)+1);
while (guess !== the_number) {
  guess = prompt("Guess a number between 1 and 10:");
  if (guess > the_number) {
    console.log("Too high.");
  } 
  else if (guess < the_number) {
    console.log("Too low.");
  }
  else {
    console.log("You guessed the number! How did you know?");
    break;
  }
}