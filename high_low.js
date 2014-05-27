var upper_limit = parseInt(prompt('Please specify a maximum number'));
var num_guesses = 0;

var randomnumber=Math.floor(Math.random()*upper_limit);

var guess = parseInt(prompt('Please guess a number'));

while(num_guesses < 2) {
  if(guess === randomnumber) {
    break;
  } else if(guess > randomnumber) {
    num_guesses += 1;
    guess = parseInt(prompt('Too high! Guesses remaining: ' + (3 - num_guesses) + '. Please guess a new number'));
    //alert('Too high, try again. Guesses remaining: ' + (3 - num_guesses));
  } else if(guess < randomnumber) {
    num_guesses += 1;
    guess = parseInt(prompt('Too low! Guesses remaining: ' + (3 - num_guesses) + '. Please guess a new number'));
    //alert('Too low, try again. Guesses remaining: ' + (3 - num_guesses));
  } else {
    guess = parseInt(prompt('Please enter a valid number between 1 and ' + upper_limit));
    //alert('Please enter a valid number between 1 and ' + upper_limit);
  }
}

if(guess === randomnumber) {
  alert('Great guess!');
} else {
  alert('Sorry, out of guesses!  The answer was ' + randomnumber);
}



