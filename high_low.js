// Also, write a simple 'game' that makes a user guess a number between 1 and 10. If they are incorrect, output if they are high or low. If they are correct, output that they are correct and end the game. 
 
var answer, guess;
answer = Math.floor(Math.random()*11);
guess = prompt("Guess a number between 1 and 10");
guess = parseFloat(guess);

while (guess != answer) {
        if (guess > answer) {
                guess = prompt("A little lower now");
        }
        else if (guess < answer) {
        guess = prompt("Guess a little higher now");
}
        else {
                prompt("Boo yaaa!");
                document.write("Boo yaaa!");
        }
        }; 
