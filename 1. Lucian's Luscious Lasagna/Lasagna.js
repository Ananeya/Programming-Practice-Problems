"use strict";

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
