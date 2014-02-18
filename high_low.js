var guess, actual;
guess = prompt("guess a # 1-10?"); 
actual = Math.floor(Math.random() * 10) + 1
while (guess != actual) {
	guess = prompt("guess a # 1-10?");
} 
console.log("you guessed correct")	

