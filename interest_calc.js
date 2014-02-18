// interest_calc.js
//simple interest calculator


var principal = prompt("What is the principal?");
var term = prompt("What is the term of the loan?");
var interest_rate = prompt("What is the interest rate (percent)?");
var interest = 0;

interest_rate = interest_rate/100

interest = ((principal * interest_rate * term)/100);

alert("Your interest payment will be: $" + interest);

 
