'use strict'

/*

help a freelancer communicate with their clients about the prices of certain projects. 

1. Calculate the day rate given an hourly rate
2. Calculate the number of workdays given a fixed budget
3. Calculate the discounted rate for large projects

*/

function dayRate(ratePerHour) {
	return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
	return Math.floor(budget / ratePerHour / 8);
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
	let numberOfMonths = Math.floor(numDays / 22);
    let monthlyRates = 22 * dayRate(ratePerHour);
    let monthlyDiscount = monthlyRates * (1 - discount);

    let extraDays = numDays % 22;
    let extraDaysRates = extraDays * dayRate(ratePerHour);
    return Math.ceil( numberOfMonths * monthlyDiscount + extraDaysRates);
}

console.log(dayRate(15), daysInBudget( 3400, 15), priceWithMonthlyDiscount(15, 230, 0.42));

