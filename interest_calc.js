var rate, borrowed, years;
rate = prompt("interest rate?"); 
borrowed = prompt("amount borrowed?"); 
years = prompt("years?"); 

interest = parseFloat(rate) * parseFloat(borrowed) * parseFloat(years)
console.log(interest)
