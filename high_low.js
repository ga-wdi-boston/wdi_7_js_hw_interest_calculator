function numberGuess(){
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (10 - 1 + 1)) +1;
  }
  var correct_num = randomNumber(1,10);
  var chances = 3;
  var guess;
  while(guess !== correct_num && chances > 0){
    guess = prompt("Guess a number between 1 and 10");
    if(guess == correct_num){
      alert('You got it!');
    } else if(guess < correct_num){
      alert('too low, try again');
    } else if(guess > 10){
      alert('Out of range! try a number less than 10');
      chances += 1;
    } else if(guess > correct_num) {
      alert('too high, guess again');
    }
    chances -= 1;
  }
  if(chances < 1 && guess !== correct_num){
    alert('You are out of guesses, the correct number was ' + correct_num);
  }
}

numberGuess();
