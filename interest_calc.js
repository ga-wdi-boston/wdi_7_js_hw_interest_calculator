console.log("Hello from interest_calc");
// find the parameters for interest calculation

var total_borrowed = prompt("How much $$ are you borrowing"),
    interest_rate = prompt("What is the current rate?"),
    loan_maturity = prompt("What is the term length (in years)?");
// use collected data in function
function totalInterest(total_borrowed, interest_rate, loan_maturity) {
// offset necessary because at beginning of loan you are paying interest on full principle, but at end you are paying interest on almost $0
  var adjusted_loan_base = total_borrowed - ((total_borrowed / loan_maturity) / 2),
  interest_paid = 0;
// every year decrease the loan base, add interest paid, and decrement years remaining
  for(var loan_year = loan_maturity; loan_year > 0; loan_year--){
    interest_paid += adjusted_loan_base * interest_rate;
    adjusted_loan_base -= (total_borrowed / loan_maturity);
    }
  return interest_paid
}

alert("Total interest paid is " + totalInterest(total_borrowed, interest_rate, loan_maturity) + " dollars!");



