var p, r, n, fv;

p = prompt("Whats the principal?");
r = prompt("Whats the interest rate?");
n = prompt("How long will the $$ be in the bank?");

p = parseFloat(p);
r = parseFloat(r);
r = r/100;
n = parseFloat(n);

fv = Math.pow((p * (1 + r)), n);
fv = fv.toFixed(2);

document.write("The Future Value of your investment is: $" + fv);