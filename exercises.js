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

// Operators Exercise 1

var x = 10;
var y = "a";

(y === "b" || x >= 10) // true, because of x.

// Operators Exercise 2

var x = 3;
var y = 8;

!( x == "3" || x === "y" ) && !( y != 8 && x <= y );

Process:

1. !( 3 == "3" || 3 === "y" ) && !( 8 != 8 && 3 <= 8 );
2. !( true || false ) && !( false && true );
3. !( true ) && !( false );
4. false && true;
5. false;