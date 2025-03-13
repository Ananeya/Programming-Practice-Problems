"use strict";

/*

You are an avid bird watcher that keeps track of how many birds have visited your garden. Usually, you use a tally in a notebook to count the birds but you want to better work with your data. You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake

1. Determine the total number of birds that you counted so far
2. Calculate the number of visiting birds in a specific week
3 Fix a counting mistake

*/

function totalBirdCount(birdsPerDay) {
	let totalNumberOfBirds = 0;
	for (let i = 0; i < birdsPerDay.length; i++) {
		totalNumberOfBirds += birdsPerDay[i];
	}
	return totalNumberOfBirds;
}

function birdsInWeek(birdsPerDay, week) {
	let totalNumberOfBirds = 0;
	let startIndex = week * 7 - 7;
	let endingIndex = startIndex + 7;
	for (let i = startIndex; i < endingIndex; i++) {
		totalNumberOfBirds += birdsPerDay[i];
	}
	return totalNumberOfBirds;
}


