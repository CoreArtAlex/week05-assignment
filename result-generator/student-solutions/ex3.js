/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function(data) {
    // Put your solution here
    let a;
    let e;
    let i;
    let o;
    let u;
    let countA;
    let countE;
    let countI;
    let countO;
    let countU;
    let counter;

    if (data.match(/a/gi)){
      a = data.match(/a/gi);
      countA = a.length;
    }else{
      countA = 0;
    }
    if (data.match(/e/gi)){
      e = data.match(/e/gi);
      countE = e.length;
    }else{
      countE = 0;
    }
    if (data.match(/i/gi)){
      i = data.match(/i/gi);
      countI = i.length;
    }else{
      countI = 0;
    }
    if (data.match(/o/gi)){
      o = data.match(/o/gi);
      countO = o.length;
    }else{
      countO = 0;
    }
    if (data.match(/u/gi)){
      u = data.match(/u/gi);
      countU = u.length;
    }else{
      countU = 0;
    }

    counter = (countA + countE + countI + countO + countU);
    return counter;
  };
  
  console.log(numberOfVowels("orange")); // 3
  console.log(numberOfVowels("cornerstone college")); // 7
  console.log(numberOfVowels("aeiou")); // 5