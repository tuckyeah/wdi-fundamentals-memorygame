console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


// sets element with id 'game-board' to variable 'gameBoard'
var gameBoard = document.getElementById('game-board');


// checks if the two cards passed to the function match
var isMatch = function(playedCards) {

	// if cards match, tells the player they've got it!

	if (playedCards[0] === playedCards[1]) {
		alert('You found a match!');
	} else {
		alert("Sorry, try again.")
	}

	// find all cards
	var allCards = document.querySelectorAll('.card');
	
	// iterate through allCards 
	for (var i = 0; i < allCards.length; i++) {
		
		// replace their innerHTML with ""
		allCards[i].innerHTML = "";
	}
};

//checks to see if there are 2 cards in play
var isTwoCards = function() {
	
	//sets variable cardType to the data-card value (king or queen)
	var cardType = this.getAttribute('data-card');

	// changes the card image to the appropriate face card when the card is clicked
	if (cardType === 'queen') {
		this.innerHTML = '<img src="queen.png" alt="Queen of Spades" />';
	} else if (cardType === 'king') {
		this.innerHTML = '<img src="king.png" alt="King of Spades" />';
	}

	//adds clicked card to array of cards in play
	cardsInPlay.push(cardType);

	//if you have two cards in play, check for  a match
	if (cardsInPlay.length === 2) {
		
		//runs isMatch() function on two cards in cardsInPlay array
		isMatch(cardsInPlay);

		//clear cards in play array for next try
		cardsInPlay = [];
	}
};

// function to create HTML for each card and appends them to div with class 'board'
var createBoard = function() {
	
	// for loop that executes 4 times, giving us 4 cards
	for (var i = 0; i < cards.length; i++) {

		// makes a new empty div element & sets it to variable 'card'
		var cardElement = document.createElement('div');

		// sets card 'data-card' to be an element of 'cards' array
		cardElement.setAttribute('data-card', cards[i]);
		
		// gives newly created div element a class of 'card'
		cardElement.className = 'card';

		// appends that new card element to the 'board' div
		document.querySelector('.board').appendChild(cardElement);

		//when a card is clicked, function isTwoCards will be executed
		cardElement.addEventListener('click', isTwoCards);
	}
};

//executes the function and makes our gameboard!
createBoard();

