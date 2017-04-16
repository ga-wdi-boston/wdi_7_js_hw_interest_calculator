// generate a random number between 1 and 10
var randomNumber = Math.ceil(Math.random()*10);

// function that gives user a hint and tells them the number after three guesses

var guesses = 3;

//console.log(randomNumber);

var guess = -1;

  while (guesses > 0 && guess !== randomNumber) {
    console.log("You have " + guesses + " guesses remaining.");
    guess = parseInt(prompt("Guess a number between 1 and 10."));
    guesses = guesses - 1;
    if (guesses > 0){
      if(guess > randomNumber) {
        console.log("Try going a bit lower.");
      }
      else if(guess < randomNumber) {
        console.log("Try going a bit higher.");
      }
    }
  }

  if(guess === randomNumber) {
    console.log("Correct!");
  }
  else {
    console.log("You are out of guesses. The correct answer was " + randomNumber + ".");
  }


