console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var firstCard = cardThree;
var secondCard = cardFour;

if (firstCard === 'queen' && secondCard === 'queen') {
	alert("You found a match!")
} else if (firstCard === 'king' && secondCard === 'king') {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}


// is there a reason why I can't make things a little quicker and just do this?


// if (firstCard === secondCard) {
// 	console.log("You found a match!") 
// } else {
// 	console.log("Sorry, try again.")
// }