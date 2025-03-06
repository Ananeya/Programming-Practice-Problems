"use strict";

/*

A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.

The password is always based on a poem and can be derived in a two-step process.

The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
The details of the process depend on which door you are trying to enter.

1. Get the first letter of a sentence.
2. Capitalize a word
3. Get the last letter of a sentence
4. Be polite

*/

let line = "NOW";

function frontDoorResponse(line) {
	return line[0];
}

function frontDoorPassword(word) {
	let inputWord = word;
	let firstLetter = inputWord.slice(0, 1);
	let otherLetters = inputWord.slice(1).toLowerCase();
	let capitalizedLetter = firstLetter.toUpperCase();
	return capitalizedLetter + otherLetters;
}

function backDoorResponse(line) {
	let trimedLine = line.trim();
	return trimedLine.slice(-1);
}

function backDoorPassword(line) {
	return frontDoorPassword(line) + ", please";
}

console.log(
	frontDoorResponse(line),
	frontDoorPassword(line),
	backDoorResponse(line),
	backDoorPassword(line)
);
