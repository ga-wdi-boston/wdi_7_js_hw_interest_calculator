function loanCalc () {
	// Ask for principal
	var principal = prompt("Enter the principal:");
	// Ask for interest
	var interest = prompt("Enter annual interest rate:");
	// Ask for number of years
	var time = prompt("Enter the number of years of the loan term:");
	// Provide user with loan interest total
	alert("Total loan interest is" + (principal * interest * time));
}



