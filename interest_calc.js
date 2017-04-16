var amount_borrowed = prompt('Enter Amount Borrowed(ex - 250000): ');
var interest_rate = prompt('Enter Interest Rate(ex - 3.75): ');
var num_years = prompt('Enter Number of Years for Loan(ex - 30): ');

var calculateInterest = (function(principal, rate, years) {
  return principal * (rate * 0.01) * years;
});

console.log('Calculated Interest on $' + amount_borrowed + ' at ' + interest_rate + '% for ' + num_years + ' years: $' + calculateInterest(amount_borrowed, interest_rate, num_years));
alert('Calculated Interest on $' + amount_borrowed + ' at ' + interest_rate + '% for ' + num_years + ' years: $' + calculateInterest(amount_borrowed, interest_rate, num_years));
