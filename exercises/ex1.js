/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
    // Put your solution here
    data = [];
    let largestNumOne = data[0];
    let largestNumTwo = data[1];
    let sumLargestNums = largestNumOne + largestNumTwo;
    if ( data.lenght >= 2){
        for (let i = 2; i < data.lenght; i++){
            // check for who's the biggrest number
            if (data[i] > largestNumOne){
                largestNumOne = data[i];
            } else if ( data[i] > largestNumTwo){
                largestNumTwo = data[i];
            }
        }

        sumLargestNums = largestNumOne + largestNumTwo;
        return sumLargestNums;
    } else{
        return sumLargestNums;
    }
};
  
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126