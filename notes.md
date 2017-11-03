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