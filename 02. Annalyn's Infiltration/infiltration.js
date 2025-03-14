"use strict";


/*

In this exercise, you'll be implementing the quest logic for a new RPG game a friend is developing. The game's main character is Annalyn, a brave girl with a fierce and loyal pet dog. Unfortunately, disaster strikes, as her best friend was kidnapped while searching for berries in the forest. Annalyn will try to find and free her best friend, optionally taking her dog with her on this quest.

After some time spent following her best friend's trail, she finds the camp in which her best friend is imprisoned. It turns out there are two kidnappers: a mighty knight and a cunning archer.

Having found the kidnappers, Annalyn considers which of the following actions she can engage in:

Fast attack: a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on, so he will be vulnerable.
Spy: the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.
Signal prisoner: the prisoner can be signalled using bird sounds if the prisoner is awake and the archer is sleeping, as archers are trained in bird signaling so they could intercept the message.
Free prisoner: Annalyn can try sneaking into the camp to free the prisoner. This is a risky thing to do and can only succeed in one of two ways:
If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.
If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer.
You have four tasks: to implement the logic for determining if the above actions are available based on the state of the three characters found in the forest and whether Annalyn's pet dog is present or not.

1. Check if the 'Fast Attack' action is possible
2. Check if the 'Spy' action is possible
3. Check if the 'Signal Prisoner' action is possible
4. Check if the 'Free Prisoner' action is possible

*/





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
