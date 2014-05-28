console.log("Hello from interest_calc");

var total_borrowed = prompt("How much $$ are you borrowing"),
    interest_rate = prompt("What is the current rate?"),
    loan_maturity = prompt("What is the term length (in years)?");

function totalInterest(total_borrowed, interest_rate, loan_maturity) {
  var adjusted_loan_base = total_borrowed - ((total_borrowed / loan_maturity) / 2),
  interest_paid = 0;
  for(var loan_year = loan_maturity; loan_year > 0; loan_year--){
    interest_paid += adjusted_loan_base * interest_rate;
    adjusted_loan_base -= (total_borrowed / loan_maturity);
    }
  return interest_paid
}

alert("Total interest paid is " + totalInterest(total_borrowed, interest_rate, loan_maturity) + " dollars!");

//for(var i = 0; i < 10; i++)

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
