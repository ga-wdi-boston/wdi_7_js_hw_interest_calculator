var guessed = false;
var guess = 0;
var playing = false;

playing = confirm('Would you like to play a game?');

while(playing) {
  var the_number = Math.floor((Math.random() * 10) + 1);
  alert(the_number);
  playing = confirm('Would you like to play again?');
}
