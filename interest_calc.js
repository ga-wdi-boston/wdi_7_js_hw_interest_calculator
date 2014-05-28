function intrestRate(borrowed, interest_rate, years) {
  var cost = borrowed * interest_rate * years;
  alert("you will owe $" + cost + ' in interest');
}

var borrowed = prompt("amount to be borrow?");
var interest_rate = prompt("At what interest rate?");
var years = prompt("How many years to pay off?");

intrestRate(borrowed, interest_rate, years);
