 "use strict"

  function solveEquation(a, b, c) {
  	let arr = [];
  	let d = Math.pow(b, 2) - 4 * a * c;

  	if (d < 0) {
  		arr = [];
  		return arr;
		
  	} else if (d === 0) {
  		arr = [-b / (2 * a)];
  		return arr;

  	} else {
  		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];

  		return arr;

  	}
  }

  function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  	let monthlyPercent = percent / 12 / 100;
  	let loanBody = amount - contribution;
  	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  	let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
  	
	return totalAmount;
  }