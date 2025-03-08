'use strict'

/*

As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.

1. Retrieve a card from a stack
2. Exchange a card in the stack
3. Insert a card at the top of the stack
4. Remove the a card from the stack
5. Remove the top card from the stack
6. Insert a card at the bottom of the stack
7. Remove a card from the bottom of the stack
8. Check the size of the stack

*/

let position = 2;
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let replacementCard = 95
let newCard = 59;

function getItem(cards, position) {
	return cards[position];
}

function setItem(cards, position, replacementCard) {
	cards[position] = replacementCard;
	return cards;
 }

function insertItemAtTop(cards, newCard) {
	cards.push(newCard);
	return cards;
}

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}



 console.log(getItem(cards, position), setItem(cards, position, replacementCard), insertItemAtTop(cards, newCard), removeItem(cards, position));


 


