// promt to ask the user for amount borrowed
var loanAmount = prompt("How much would you like to borrow?");

// prompt to ask the user for interest rate
var rate = prompt("What is the interest rate?");

// prompt to ask the user for number of years
var years = prompt("How many years to pay back this loan?");

// calculation that will return the amount of interest that will be paid
var interest = function(principal, rate, n){
  return principal * rate * n;
};

console.log("With an interest rate of " + rate + ", a loan amount of $" + loanAmount + ", and " + years + " years, you'll pay $" + interest(loanAmount, rate, years) + " as interest.");



