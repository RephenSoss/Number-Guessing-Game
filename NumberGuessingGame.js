var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I'm thinking of a number between 1 and 6. What could it be?");
if (parseInt(guess) === randomNumber) {
	document.write('<p>You guessed the number!</p>');
} else {
	document.write('<p>Sorry the number was ' + randomNumber + ' . Try again! </p>');
}