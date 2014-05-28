var amount_borrowed = 250000; // prompt('Enter Amount Borrowed(ex - 250000): ');
var interest_rate = 2.75;  // prompt('Enter Interest Rate(ex - 3.75): ');
var num_years = 30;  // prompt('Enter Number of Years for Loan(ex - 30): ');

var calculateInterest = (function(principal, rate, years) {
  return principal * (rate * 0.01) * years;
});

console.log(calculateInterest(amount_borrowed, interest_rate, num_years));
