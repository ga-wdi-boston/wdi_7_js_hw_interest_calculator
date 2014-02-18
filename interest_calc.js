var borrowed, rate, term;

borrowed = prompt("How much do you need to borrow?");
rate = prompt("What's the interest rate?");
term = prompt("How many years?");

rate = rate / 100;


document.write('You will pay $' + borrowed * rate * term + ' in interest over the life of the loan.')
