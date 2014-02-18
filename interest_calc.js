var principal = function() {
	var amount = parseInt(prompt("Enter ur initial amount:"));
	var rate = parseFloat((prompt("whats ur interest?")/100)/12);
	var time = parseInt(prompt("For how long tho(in months)?"));

	var total = amount * time * rate + amount;
	alert("Your total is " + total);
}


window.onload = principal;