 

var total_amount_borrowed, interest_rate, years, total_interest, total_amount;

total_amount_borrowed = parseFloat(prompt("Total amount borrowed?"));
interest_rate = parseFloat(prompt("Interest rate in percent"));
years = parseFloat(prompt("How many years?"));

total_interest = total_amount_borrowed * (interest_rate / 100) * years
total_amount = total_interest + total_amount_borrowed

console.log("The total interest accumulated will be $" + total_interest + ".00");

console.log("You will pay back $" + total_amount + ".00 over the course of the loan." )