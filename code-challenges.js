// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// input: 2 strings
// output: 1 string is the longest
// create a function that takes two parameters of data type string 
// get the length of each string
// compare lengths
// return the longer string

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const longestString = (fruitOne, fruitTwo) => {
  if(fruitOne.length > fruitTwo.length) {   
    return `"${fruitOne}"`
  } 
    else if(fruitTwo.length > fruitOne.length) {
    return `"${fruitTwo}"`
  } 
    else {
    return "something went wrong"
  }
}
console.log(longestString(fruit1, fruit2))
console.log(longestString(fruit3, fruit4))

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo Code:
// Create a function named "givenNumber" that takes in a number named "temp" to see if the given number is below boiling point, at boiling point, or above boiling point
// Boiling point is given number of "212" degrees Fahrenheit
// If the temp is less than boiling point, will return "below boiling point"
// If the temp is above boiling point, will return "above boiling point"
// If the temp is at boiling point, will return at boiling point

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
const givenNum = (temp) => {
  if(temp < 212) {
    return `"${temp} is below boiling point"`
  } 
    else if(temp > 212) {
    return `"${temp} is above boiling point"`
  }
    else if(temp = 212) {
    return `"${temp} is at boiling point"`
  }  
    else {
    return "something is wrong"
  }
}
console.log(givenNum(temperature1))
console.log(givenNum(temperature2))
console.log(givenNum(temperature3))


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// input: combine two arrays
// output: arrays are added together to equal length
// Create a variable with a parameter that takes in two arrays of data types and combine length of arrays by using .concat method
// return one combined arrays length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

  let combinedArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(combinedArrays.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// input: 1 string changed into an array
// output: 1 array reversed letters
// Create a function that will reverse the letters of a string
// Use .split("") built-in method with parentheses and quotations together so that it will separate each of characters and numbers in the string
// Use .reverse(" ") built-in method with parentheses and a space between the quotations so that it will reverse each character and number in the string
// Use . join()
// returns the letters and numbers joined and reversed 

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

console.log(currentCohort.split("").reverse("").join(""))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// input: 2 variables
// output: last index of given value from array
// create two variables with string parameters and array
// take length of given values in array number
// return last index of given number

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.length -2)
console.log(myNumbers.length -1)


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// input: 2 arrays built-in method
// output: 2 arrays largest to smallest
// create an array with a built-in mutator method
// sort the order of numbers
// return reverse to largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoSummerTemperatures.sort((a, b) => a - b)
console.log(sanDiegoSummerTemperatures.reverse(" "))

sanDiegoWinterTemperatures.sort((a, b) => a - b)
console.log(sanDiegoWinterTemperatures.reverse(" "))