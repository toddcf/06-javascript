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