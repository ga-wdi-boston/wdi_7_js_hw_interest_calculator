function numberGuess(){
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (10 - 1 + 1)) +1;
  }
  var correct_num = randomNumber(1,10);
  var chances = 3;
  var guess = nil;
  alert(correct_num);
  while(guess !== correct_num && chances > 0){
    guess = prompt("Guess a number between 1 and 10");
    if(guess === correct_num){
      alert('You got it!');
    } else if(guess < correct_num){
      alert('too low, try again');
    } else if(guess > correct_num) {
      alert('too high, guess again');
    }
    chances -= 1;

  }
}

numberGuess();
