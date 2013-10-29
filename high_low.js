var user_number, random_number = Math.random() * 10;

random_number = Math.round(random_number);


while(user_number !== random_number){
user_number = prompt("Pick a number 0-10");
 if (user_number < random_number) {
	document.write("You're a bit low...");
} else if (user_number > random_number) {
	document.write("You're a bit high...");
} else {
	document.write("That's it!!");
	break;
}}