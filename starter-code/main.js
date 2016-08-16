console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// sets element with id 'game-board' to variable 'gameBoard'
var gameBoard = document.getElementById('game-board');

// function to create HTML for each card and appends them to div with class 'board'
var createBoard = function() {
	
	// for loop that executes 4 times, giving us 4 cards
	for (var i = 0; i < 4; i++) {

		// makes a new empty div element & sets it to variable 'card'
		var card = document.createElement('div');
		
		// gives newly created div element a class of 'card'
		card.className = 'card';

		// appends that new card element to the 'board' div
		document.querySelector('.board').appendChild(card);
	}
};

//executes the function and makes our gameboard!
createBoard();


// if-statement from previous exercise


// if (firstCard === 'queen' && secondCard === 'queen') {
// 	alert("You found a match!")
// } else if (firstCard === 'king' && secondCard === 'king') {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

// is there a reason why I can't make things a little quicker and just do this?

// if (firstCard === secondCard) {
// 	console.log("You found a match!") 
// } else {
// 	console.log("Sorry, try again.")
// }