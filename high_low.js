var upper_limit = parseInt(prompt('Please specify a maximum number'));
var randomnumber=Math.floor(Math.random()*upper_limit);

var num_guesses = 0;
var guess = parseInt(prompt('Please guess a number'));

while(num_guesses < 2) {
  if(guess === randomnumber) {
    break;
  } else if(guess > randomnumber) {
    num_guesses += 1;
    guess = parseInt(prompt('Too high! Guesses remaining: ' + (3 - num_guesses) + '. Please guess a new number'));
  } else if(guess < randomnumber) {
    num_guesses += 1;
    guess = parseInt(prompt('Too low! Guesses remaining: ' + (3 - num_guesses) + '. Please guess a new number'));
  } else {
    guess = parseInt(prompt('Please enter a valid number between 1 and ' + upper_limit));
  }
}

if(guess === randomnumber) {
  alert('Great guess!');
} else {
  alert('Sorry, out of guesses!  The answer was ' + randomnumber);
}

// ------ Solved with for loop instead --------

// var guess = parseInt(prompt('Please guess a number'));

// for(var num_guesses = 0; num_guesses < 2; num_guesses++ ){
//     if(guess === randomnumber) {
//       alert('Great guess!');
//       num_guesses = 3;
//     } else if(guess < randomnumber) {
//       guess = parseInt(prompt('Too low! Please guess a number'));
//     } else {
//       guess = parseInt(prompt('Too high! Please guess a number'));
//     }
// }

// if(guess !== randomnumber) {
//   alert ('Sorry, out of guesses! The answer was ' + randomnumber);
// }

