//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:

//should return "found the needle at position 5"



//My Solution

function findNeedle(haystack) {
 let found = haystack.indexOf("needle");
  return "found the needle at position " + found;
 
}


//I solved with it indexOf() method.




//Other solution I searched from Codewars

//#1
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

//#2
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;
