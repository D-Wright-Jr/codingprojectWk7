// Coding Steps:
// All questions should be printed to your Browser's console using console.log()

// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// How do you access the last element of any array?

// How do you access the first element of any array?

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
let ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference);
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(27);
console.log(ages);
ageDifference = ages[ages.length - 1] - ages[0];
console.log(ageDifference);
console.log(ageDifference);
// Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
// Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
console.log(totalLetters);
let averageLetters = totalLetters / names.length;
console.log(averageLetters);
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenateNames = "";
for (let i = 0; i < names.length; i++) {
  concatenateNames += names[i];
  if (i < names.length - 1);
  {
    concatenateNames += " ";
  }
}
console.log(concatenateNames);

// How do you access the last element of any array?
console.log(names.length - 1);
console.log(names[5]);
// or
let lastElement = names[names.length - 1];
console.log(lastElement);
// How do you access the first element of any array?
console.log(names[0]);
// or
let firstElement = names[0];
console.log(firstElement);

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
  totalLength += nameLengths[i];
}
console.log(totalLength);

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function magicWord(word, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
let word = "BeatleJuice";
let n = 3;
console.log(magicWord(word, n));

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
let firstName = "David";
let lastName = "Wright";

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName(firstName, lastName));

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreater(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum > 100;
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
}
function calculateAverage(array) {
  let sum = calculateSum(array);
  return sum / array.length;
}

function compareAverages(array1, array2) {
  let average1 = calculateAverage(array1);
  let average2 = calculateAverage(array2);
  return average1 > average2;
}
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let hotOutside = true;
let moneyInPocket = 10.5;

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket >= 10.5) {
    return true;
  } else {
    return false;
  }
}
console.log(willBuyDrink(hotOutside, moneyInPocket));
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
