var principal, rate, time, interest
 
principal = prompt("What is the principal balance?");
rate = prompt("What is the percent interest rate?");
time = prompt("Over how many years will the interest accrue?");

interest = (principal * rate/100 * time).toFixed(2)

document.write("The total accrued interest of $" + principal + 
" over " + time + " years at " + rate + "% is $" + interest + ".");