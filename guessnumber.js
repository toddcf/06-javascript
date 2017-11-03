var secretNumber = Math.floor( Math.random() * 10 ) + 1;
console.log( "The secret number is: " + secretNumber );

var userGuess = Number( prompt( "Guess a number between 1 and 10!") );

if ( userGuess > 10 ) {
	userGuess = Number( prompt( "Too high. Please pick a number between 1 and 10.") );
}
else if ( userGuess < 1 ) {
	userGuess = Number( prompt( "Too low. Please pick a number between 1 and 10.") );
}

if ( userGuess === secretNumber ) {
	alert( "You got it!!");
}
else if ( userGuess > secretNumber ) {
	userGuess = Number( prompt( "Too high. Try again." ) );
}
else {
	userGuess = Number( prompt( "Too low. Try again." ) );
}