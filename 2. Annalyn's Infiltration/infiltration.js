"use strict";

let knightIsAwake = true;
let archerIsAwake = true;
let prisonerIsAwake = true;
let petDogIsPresent = true;

function canExecuteFastAttack(knightIsAwake) {
	if (knightIsAwake) {
		return false;
	} else {
		return true;
	}
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
	if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
		return true;
	} else {
		return false;
	}
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
	if (!archerIsAwake && prisonerIsAwake) {
		return true;
	} else {
		return false;
	}
}

function canFreePrisoner(
	knightIsAwake,
	archerIsAwake,
	prisonerIsAwake,
	petDogIsPresent
) {
	if (
		(prisonerIsAwake && !archerIsAwake && !knightIsAwake) ||
		(petDogIsPresent && !archerIsAwake)
	) {
		return true;
	} else {
		return false;
	}
}

console.log(
	canExecuteFastAttack(knightIsAwake),
	canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake),
	canSignalPrisoner(archerIsAwake, prisonerIsAwake),
	canFreePrisoner(
		knightIsAwake,
		archerIsAwake,
		prisonerIsAwake,
		petDogIsPresent
	)
);
