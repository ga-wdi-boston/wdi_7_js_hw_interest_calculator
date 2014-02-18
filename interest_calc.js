var borrowed, rate, term;
 
borrowed = prompt("How much would you like to borrow?");
rate = prompt("What is the current interest rate?");
term = prompt("And for how long are you investing?");
 
rate = rate / 100;
 
 
document.write('You will pay $'  borrowed * rate * term  ' in interest over the life of the loan.') 
