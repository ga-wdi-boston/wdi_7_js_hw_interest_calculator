 

var total_amount_borrowed, interest_rate, years, total_interest, total_amount;

total_amount_borrowed = prompt("Total amount borrowed?");
interest_rate = prompt("Interest rate in percent");
years = prompt("How many years?");

total_interest = total_amount_borrowed * (interest_rate / 100) * years
total_amount = total_interest + total_amount_borrowed

console.log("The total interest accumulated will be $" + total_interest + ".00");

console.log("You will pay back " + total_amount + "over the course of the loan." )