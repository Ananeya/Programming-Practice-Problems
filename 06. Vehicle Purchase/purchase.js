"use strict";

/*

write some code to help you prepare to buy a vehicle.

You have three tasks, one to determine if you will need to get a license, one to help you choose between two vehicles and one to estimate the acceptable price for a used vehicle.

1. Determine if you will need a drivers license
2. Choose between two potential vehicles to buy
3. Calculate an estimation for the price of a used vehicle

*/

let kind = "Bike";
let option1 = "Bugati";
let option2 = "Ferari";

let originalPrice = 2300;
let age = 5;

function needsLicense(kind) {
	if (kind === "car") {
		return true;
	} else if (kind === "truck") {
		return true;
	} else {
		return false;
	}
}

function chooseVehicle(option1, option2) {
	let endingText = " is clearly the better choice.";
	if (option1 > option2) {
		return option2 + endingText;
	} else {
		return option1 + endingText;
	}
}

function calculateResellPrice(originalPrice, age) {
	if (age < 3) {
		return originalPrice * 0.8;
	} else if (age >= 3 && age <= 10) {
		return originalPrice * 0.7;
	} else if (age > 10) {
		return originalPrice * 0.5;
	}
}

console.log(
	needsLicense(kind),
	chooseVehicle(option1, option2),
	calculateResellPrice(originalPrice, age)
);