var play = (function() {
  var the_number = Math.floor((Math.random() * 10) + 1);
  var guesses = 3;
  var guessed = false;

  while((!guessed) && (guesses > 0)) {
    var user_guess = 0;

    user_guess = prompt('Guess the number 1-10!\nYou have ' + guesses + ' guesses left!' + the_number);
    guesses = guesses - 1;

    if(user_guess === the_number) {
      guessed = true;
      alert('Congrats! You guessed the number ' + the_number + ' in ' + Math.abs(guesses - 3) + ' guesses!');
    }
    else if(guesses === 0) {
      alert('You ran out of guesses! The number was ' + the_number + '!');
      var play_again = confirm('Would you like to play again?');
      if(play_again) {
        play();
      }
    }
    else {
      alert('Sorry the number is not ' + user_guess + '! Try again!');
    }
  }
});

play();


