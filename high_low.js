var randomNumber = Math.ceil(Math.random()*10);

for(var i = 0; i < 3; i++) {
  var guess = prompt("Guess a numbrawr between wan and ten");
    if(guess == randomNumber){
      alert("You win.");
      console.log(randomNumber);
      break;
    }
    else if(guess > randomNumber && i < 2){
      alert("Guess lower.");
    }
    else if(guess < randomNumber && i < 2){
      alert("Guess higher.");
    }
    else if(i === 2){
      alert("You lose...");
    }
}
