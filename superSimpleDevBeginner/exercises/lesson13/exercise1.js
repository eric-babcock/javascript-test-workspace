/* Write a function "max" that takes an 
   array and numbers and returns the 
   largest number.
 - write one that returns the smallest
 - write one that returns the smallest
   that is greater than 0
 */

const numbersArray = [1,5,-2,4,3,5,0];



console.log(Math.max(...numbersArray));

console.log(Math.min(...numbersArray))

naturalNumbers = numbersArray.filter(belowZero)

function belowZero(number) { 
     return (number > 0)
}

console.log(Math.min(...naturalNumbers))

console.log(numbersArray.sort((a,b) => a-b))

console.log(numbersArray)