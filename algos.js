function diff(arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2)
  return  [
       ...arr1.filter(item => !set2.has(item)),
       ...arr2.filter(item => !set1.has(item))
    ]
}

console.log(diff([1, 2, 3, 4, 5, 6, 22],[1, 2, 3, 4, 5, 7, 9]))

function diffBetweenArrays(arr1, arr2) {  
    // create an empty array, this will includes all diff between two arrays
    const diffNums = [];
    // iterate through arr1 and if each element is not in arr2 by using .includes we push to empty array to be returned later
    arr1.forEach((num) => {
      if (!arr2.includes(num)) {
        diffNums.push(num);
      }
    })
    // itterate through arr2 and proceed to do the same as above
    arr2.forEach((num) => {
      if (!arr1.includes(num)) {
        diffNums.push(num);
      }
    })
    // return diff array
    return diffNums;
  }

  console.log(diffBetweenArrays([1, 2, 3, 4, 5, 6, 22],[1, 2, 3, 4, 5, 7, 9]))

//   Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.


// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maxSubArray (nums) {
    // create a sum varaible
      let maxSum = 0; // 
      // iterate through each element in the array, iterate through each element again (nested)
      for (let i = 0; i < nums.length; i++) {
        let totalSum = nums[i]; // 
        // add the sum of the second for loop with the current outter for loop element to find maxSum
        for (let j = i + 1; j < nums.length; j++) {
          totalSum += nums[j]; 
          if (totalSum > maxSum) {
            maxSum = totalSum;
          }
        }
      }  
      // return sum
      return maxSum;
    }
    
    
    console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

    const timeIntervals = [[0, 30], [5, 10], [15, 20], [16, 30], [0, 30]]

function howManyRooms(arr){
   if(arr.length === 0) return 0

   const starts = arr.map(item => item[0]);
   const ends = arr.map(item => item[1])

   starts.sort((a, b) => a - b)
   ends.sort((a, b) => a - b)
   console.log(starts)
   console.log(ends)

   let rooms = 0;
   let endPointer = 0;
   
   for(let i = 0; i < starts.length; i++) {
     if(starts[i] >= ends[endPointer]){
       endPointer++
     }else{
      rooms++
     }
   }
   return rooms
}

console.log(howManyRooms(timeIntervals))

// sum of two arrays
function sumOfTwo(arr1, arr2) {
    const twoArrays = [...arr1, ...arr2]
    return twoArrays.reduce((acc, number) => acc + number)
}

console.log(sumOfTwo([1, 3, 4, 5, 6], [7, 8, 9, 10, 11]))

const matrix = [
    [1, 2, 3],
    [4,[ 5, 6]],
    [7, 8, 9],
    [10, 11, 12],
    
];

const flattend = matrix.flat(2);
console.log(flattend)

const flats = [].concat(...matrix)
console.log(flats)

console.log(matrix[1][1])

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[j])
    }
}
const allValues = [...matrix[0].concat(matrix[1], matrix[2], matrix[3])];
console.log(allValues)

const nestedArray = [1, [2, [3, [4, [5]]]], 6];

const deepValues = nestedArray.flat(Infinity);
console.log(deepValues); // [1, 2, 3, 4, 5, 6]

const myArray = [[[[['My value']]]]];
const unwrappedValue = myArray.flat(Infinity)[0];
console.log(unwrappedValue); // "My value"

// Given a DNA strand (a string) composed of the characters "A", "T", "C", and "G", write a function that returns a 2D array where each element is an array containing a character from the input string and its corresponding DNA base pair.

// Base Pairing Rules:

// "A" pairs with "T"
// "T" pairs with "A"
// "C" pairs with "G"
// "G" pairs with "C"

function dnaPairs(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  return str.split('').map(char => [char, pairs[char]])
}

console.log(dnaPairs('GCG'))
// GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// ("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// ("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// ("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function dnaPairsA(str){
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  let result = [];
 
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    const pair = pairs[char];
    result.push([char, pair])
  }

  return result
}

console.log(dnaPairsA('GCG'))

//find missing letter in a sequence of consecutive letters

function missingLetter(str){
  //loop through each charater of the string
  for (let i = 0; i < str.length - 1; i++){
    //get the character codes
    let currentCharCode = str.charCodeAt(i);
    let nextCharCode = str.charCodeAt(i + 1);
    //the output for nextCharCode should be currentCharCode + 1, if it isn't, then a lette is missing
    if(nextCharCode !== currentCharCode +1){
      return String.fromCharCode(currentCharCode + 1)
    }
  }
  return null
}

console.log(missingLetter('abde'))

function findMissingLetter(str){
  for(let i = 0; i < str.length -1; i++){
    let currentCharCode = str.charCodeAt(i);
    let nextCharCode = str.charCodeAt(i + 1);
    if(nextCharCode !== currentCharCode + 1){
     return String.fromCharCode(currentCharCode + 1)
    }
  } return null
}

console.log(findMissingLetter('abcdefgijklmn'))

//rest parameter gathers any number of arrays into a single array
//flat method flattens them into one

function uniteUnique(...arr){
  let newArray = arr.flat()
  let finalArray = [...new Set(newArray)]
  console.log(finalArray)
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUnique(...arr) {
  return [
    ...new Set(arr.flat())
  ]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

//remove dupes

console.log([4, 4, 33, 2, 2, 44, 55, 55].filter((item, index, arr) => arr.indexOf(item) === index ))

// convert all the html entities
// convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// convertHTML("<>") should return the string &lt;&gt;.
// convertHTML("abc") should return the string abc.

function convertHTML(str){
  const entities = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;',
    '<>': '&lt;&gt;',
  }

  return str.replace(/[&<>"']/g, item => entities[item])
  
}

console.log(convertHTML("Dolce & Gabbana"))