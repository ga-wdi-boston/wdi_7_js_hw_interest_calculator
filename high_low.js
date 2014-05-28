
function highLow() {
var number = Math.round(Math.random() * 10) + 1;
// added for testing purposes
// console.log('Number is ' + number);
var guess_one = prompt("Guess a number between 1 and 10");
// added for testing purposes
// console.log("Guess is " + guess);
	if (guess_one == number) {
		alert("You're right! The number is " + number + ".");
		return;
		}
	else if (guess_one > number) {
			alert("Try again, this time a little lower");
		}
	else {
			alert("Try again, this time a litle higher");
		}
// Ask for second guesss if needed
var guess_two = prompt("Guess a second time:");
// added for testing purposes
// console.log("Guess two is " + guess_two);
	if (guess_two == number) {
		alert("You're right! The number is " + number + ".");
		return; 
		}
	else if (guess_two > number) {
		alert("Try again, this time a little lower");
		}
	else {
		alert("Try again, this time a litle higher");
		}
// Ask for third guess if needed
var guess_three = prompt("Guess a third time:");
// added for testing purposes
// console.log("Guess three is " + guess_three);
	if (guess_three == number) {
		alert("You're right! The number is " + number + ".");
		return; 
		}
	else {
		alert("Sorry but the number is " + number + ". Thanks for playing");
		}
}


