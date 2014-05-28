// prompt to ask for a random number between 1 and 10
var guess = prompt("Guess a number between 1 and 10.");

// generate a random number between 1 and 10
var randomNumber = Math.ceil(Math.random()*10);

// function that gives user a hint and tells them the number after three guesses
if(guess === randomNumber) {
    console.log("Correct!");
  } else {
    console.log("Try Again.");
  }


