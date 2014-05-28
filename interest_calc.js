// 1. Write a simple interest calculator for loans.
// Ask the user for the amount borrowed, interest rate, and number of years,
// and output the amount of interest that will be paid.

// var amountBorrowed = prompt("How much was borrowed?");
// var interestRate = prompt("What is the interest rate?");
// var numberOfYears = prompt("Number of years");

var amountBorrowed = 600.00;
var interestRate = 0.15;
var numberOfYears = 5;

function calculateInterest(amount, rate, years) {
  for(var i = 0; i <= years; i++){
    var interest = (amount*rate);
    amount += interest;
  }
  console.log(amount);
}

calculateInterest(amountBorrowed, interestRate, numberOfYears);
