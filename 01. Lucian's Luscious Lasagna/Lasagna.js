"use strict";

/*

Lucian's girlfriend is on her way home, and he hasn't cooked their anniversary dinner!

1. Define the expected oven time in minutes
2. Calculate the remaining oven time in minutes
3. Calculate the preparation time in minutes
4. Calculate the total working time in minutes

*/



const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
	return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
	return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
	return numberOfLayers * 2 + actualMinutesInOven;
}

console.log(
	remainingMinutesInOven(28),
	preparationTimeInMinutes(14),
	totalTimeInMinutes(14, 48)
);
