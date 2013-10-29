var total_amount, interest_rate, years, interest;
total_amount = prompt("What's the total amout borrowed?");
interest_rate = prompt("What's the interest rate (%)?");
years = prompt("How many years is the loan for?");

interest = total_amount * (interest_rate / 100) * years;

document.write(interest)