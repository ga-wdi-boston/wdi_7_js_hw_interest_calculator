console.log("Hello from interest_calc");

var total_borrowed = prompt("How much $$ are you borrowing"),
    interest_rate = prompt("What is the current rate?"),
    loan_maturity = prompt("What is the term length (in years)?");

function totalInterest(total_borrowed, interest_rate, loan_maturity) {
  var annual_principle_decrement = (total_borrowed / loan_maturity) / 2;
  return annual_principle_decrement;
}

console.log(totalInterest(total_borrowed, interest_rate, loan_maturity));


//alert("You will pay " + total_interest + ".");
/*
var factorial = (
  function(x) {
    if(x <= 1) {
      return x;
    }
    else {
      return x * factorial(x - 1);
    }
  }
);
*/
