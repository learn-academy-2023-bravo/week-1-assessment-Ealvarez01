// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: 
//The example indicates that the variables in this string  array with a built-in method data type index will output a total number value of the words in parentheses separated by the comma after "indigo" is added to the end. The total word characters in the index is "4" and when you add the color "indigo" it will equal to "5".


// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:
//The example is a variable string array data type that asks for the total length and will count the number value of characters in the parentheses including the empty space. The total number of characters equals ten including the space in between "N" and "2". 


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: 
//The example is a variable string array data type with a request for a specific number index. When a specific number is indexed, it is asking to start a count from zero starting with the first letter in the greeting and so forth. Therefore, the output of the number index requests the data value for the fourth character of the greeting. The fourth character indexed is "o".


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: 
//This is an example of a variable string array index data type of languages to find the value of data type in index one. The number index in the array of characters will start with zero and count up. When a condition is created specifying a specific number index, the value will reference the character data. Since it asked for an output for index 1, it will log the word "Ruby". 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain:
//This is an example of a variable string array with index and parameter data types for "weekendDays". It is requesting to output all of the index word values to upper case letters. However, there is no set value indicated in the parentheses. Therefore, it will output an error that "toUpperCase" is not a valid function.   


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: error / undefined
// b) Verify and explain:
//This is an example of a variable string array with index and parameter for "dataTypes". It is requesting to find a specific type of data and add the total length of that data to output a number. It outputs an undefined error because "typeof" data is not a defined function. 
