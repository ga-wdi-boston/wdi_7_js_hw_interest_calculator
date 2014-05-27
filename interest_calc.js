var borrowed = parseInt(prompt('Amount borrowed?'));
var rate = parseInt(prompt('Interest rate?'));
var years = parseInt(prompt('Number of years?'));

function interest_rate(borrowed, rate, years) {
  return ((borrowed * (rate/100) * years)).toFixed(2);
}

console.log('You owe $' + interest_rate(borrowed, rate, years) + ' immediately!');
