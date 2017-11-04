/*console.log( 100 % 3 );*/ /* 100/3 = 33, remainder 1 */

/*("blah" + "blah") [6]*/ /* the first letter is 0, so 6 = a */

/*console.log( "hello".length % "hi\\".length );*/ /* 5 % 3 = 2 */

// JS Stalker Exercise

// var firstName = prompt( "What is your first name?" );
// console.log(firstName);
// var lastName = prompt( "What is your last name?" );
// console.log(lastName);
// var age = prompt( "What is your age?" );
// console.log(age);
// alert( "Your name is " + firstName + " " + lastName + ", and you are " + age + " years old." );

// Age Calculator Exercise

// var age = prompt( "Enter your age to find out how many days you've been alive (approximately)." );
// var days = age * 365;
// alert( "You have been alive for approximately " + days + " days!" );

// Boolean Exercise 1

/*var x = 10;
var y = "a";

(y === "b" || x >= 10)*/ // true, because of x.

// Boolean Exercise 2

/*var x = 3;
var y = 8;

!( x == "3" || x === "y" ) && !( y != 8 && x <= y );

Process:

1. !( 3 == "3" || 3 === "y" ) && !( 8 != 8 && 3 <= 8 );
2. !( true || false ) && !( false && true );
3. !( true ) && !( false );
4. false && true;
5. false;*/

// Boolean Exercise 3

/*var str = "";
var msg = "haha!";
var isFunny = "false";

!(( str || msg ) && isFunny);

Process:

1. !( ( false || true ) && true );
2. !( true && true );
3. !true;
4. false;*/

// Boolean Exercise 4

/*If age is negative, print error message.
If age is 21, print "Happy 21st birthday!"
If age is odd, print "Your age is odd."
Super bonus: If age is a perfect square, print "Perfect square!"*/
/*var age = Number( prompt( "What is your age?" ) );
console.log( "Your age is " + age + ".");

if ( age < 0 ) {
	console.log( "Error." );
}
else if ( age === 21 ) {
	console.log( "Happy 21st birthday!!");
}
else if ( (age % 2) !== 0) {
	console.log( "Your age is odd." );
}*/
// else if ( age/age === 1 ) {
// 	console.log( "Perfect square!" );
// }
// Or:
/*else if ( age % Math.sqrt( age ) === 0 ) {
	console.log( "Perfect square!" );
}*/

// While Loop Exercise 1

/*var num = 1;

while ( num <= 10 ) {
	console.log( num );
	num += 2;
}*/

// Should print:
/* 1, 3, 5, 7, 9 */

// Print all numbers between -10 and 19.
/*var numA = -10;

while ( numA < 20 ) {
	console.log( "numA = " + numA );
	numA++;
}*/


// Print all even numbers between 10 and 40.
/*var numB = 10;

while ( numB <=40 ) {
	console.log( "numB = " + numB );
	numB += 2;
}*/


// Print all odd numbers between 300 and 333.
/*var numC = 300;

while ( numC <= 333 ) {
	console.log( "numC = " + ( numC + 1 ) );
	numC += 2;
}*/


// Print all numbers divisible by 5 AND 3 between 5 and 50.
/*var numD = 5;

while ( numD <= 50 ) {
	if ( ( numD % 5 === 0 ) && ( numD % 3 === 0 ) ) {
		console.log( "numD = " + numD );
	}
	numD++;
}*/

// Annoy-O-Matic

/*var answer = prompt( "Are we there yet?" );

while ( answer !== "yes" && answer !== "yeah" ) {

	answer = prompt( "Are we there yet?" );
	
}

alert( "Yay, we finally made it!");*/

// Version 2, allowing "yes" to be anywhere in the answer string:
/*var answer = prompt( "Are we there yet?" );

while ( answer.indexOf( "yes" === -1 ) ) {

	answer = prompt( "Are we there yet?" );
	
}

alert( "Yay, we finally made it!");*/

// For Loops Exercises

// Print all numbers between -10 and 19.
/*for ( var i = -10; i <=19; i++ ) {
	console.log( i );
}*/

// Print all even numbers between 10 and 40.
/*for ( var i = 10; i <=40; i += 2 ) {
	console.log( i );
}*/

// Print all odd numbers between 300 and 333.
/*for ( var i = 300; i <=333; i ++ ) {
	if ( i % 2 !== 0 ) {
		console.log( i );
	}

}*/

// Print all numbers divisible by 5 AND 3 between 5 and 50.
/*for ( var i = 5; i <= 50; i++ ) {
	if ( i % 5 === 0 && i % 3 === 0 ) {
		console.log( i );
	}
}*/