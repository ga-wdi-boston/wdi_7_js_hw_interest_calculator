var computer_number;
var person_number;


computer_number = Math.floor((Math.random()*10)+1);
person_number = prompt("I've got a number between 1 and 10. What do you think it is?"); 


		switch(person_number, computer_number) {
			case person_number < computer_number:
			alert("Try a higher number");
			break;
			case person_number > computer_number:
			alert("Try a lower number");
			break;
			default:
			alert("You got it!"); 
		}

	