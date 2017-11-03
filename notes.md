# JavaScript

## 5 Primitive Datatypes

1. Numbers.
2. Strings.
3. Booleans.
4. Null.
5. Undefined.

## Counting

`.length` will count the characters in a string starting with `1`. But the `index` will start counting from `0`, so `index` will always be one value less than `length`.

## Variable Cases

- camelCase (this is what you should use for variables in JavaScript)
- snake_case
- kebob-case (or dash-case)

## Undefined

A variable that has been declared but not defined. (No value has been assigned to it.)

`var name;`
`var age;`

## Null

"Explicitly nothing."

```
var currentPlayer = "Charlie";
currentPlayer = null; // Game Over
```

In the above example, you have the variable `currentPlayer` set to `Charlie` while he is playing.
When that player dies, you specifically set the variable `currentPlayer` to `null` to show that he does not exist anymore.

## Built-In JavaScript Methods

1. Alert
2. Prompt
3. console.log
4. `clear()`: You can clear your console by typing `clear()` and hitting enter.

## Prompt

To store the data gathered from using a prompt, put it in a variable:

`var userName = prompt( "What is your name?" );`

## Type Coercion

BEST PRACTICE: It is safest to always use `===` (strict equals) to avoid confusion due to type coercion.

EXAMPLES:

```
var x = 99;
x == "99" // true
x === "99" // false
```

```
var y = null;
y == undefined // true
y === undefined // false
```

### Cases where `==` does NOT behave the way you'd expect

`true == "1" // true`
`0 == false // true`
`null == undefined // true`
`NaN == NaN // false`

Again, due to quirks like these, it is best to use `===` by default instead of `==`.

## Short Circuiting

If the first side of an `or` statement is true, JavaScript skips checking the second side because it would be a moot point -- the `or` statement is now true regardless of whether the second side is true or false. This is called short circuiting.

## Truthy / Falsy

These are values that are not specifically "true" or "false," but equate to either of these values in the system.

To check if something is truthy or falsy, open your console and type it in -- and DOUBLE NEGATE IT before hitting enter. Like this:

`!!""` will result in `false`, meaning that an empty string is falsy.

Examples:

```
!!"Hello World" // true

!!"" // false

!!0 // false

!!-1 // true

!!NaN // false
```

Note that just because `-1` is truthy in JavaScript, this does not mean it is also truthy in all other coding languages.

Falsy Values:

1. False (the boolean value `false`! The string `"false"` is actually `true`.)
2. 0
3. ""
4. null
5. undefined
6. NaN

Everything else is truthy.

## Conditionals

Conditionals are how you program your code to make decisions. They are the way you add logic to your programming.

For example, entering your login information on a site requires the site to check if that info is correct before it grants you access. This is a conditional.

Three keywords:

1. If
2. Else If
3. Else

Bouncer Example:

- If you are under 18, you cannot enter the club.
- If you are between 18 and 21, you can enter but cannot drink alcohol.
- If you are 21 or over, you can enter AND drink alcohol.

if ( age < 18 ) {
	enter = false;
	drink = false;
}
else if ( age < 21 ) { */ Because it's else if, you don't need to specify the age being greater than or equal to 18 -- that's already included because of the preceding if statement. /*
	enter = true;
	drink = false;
}
else {
	enter = true;
	drink = true;
}