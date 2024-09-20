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



function sumOfTwo(arr){
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    console.log(i)
    sum += i
    console.log(sum)
  }
  return sum
}

console.log(sumOfTwo([5,10]))

//look through an array of objects(first argument)
//and return an array of all objects that have matching name value pairs as the second argument
//each name value pair of the sourch argument has to be present in the object from the collection in order for it to be included in the returned array

function whatsInAName(collection, source){
  //extract all the keys into an array
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys)

  return collection
                  .filter(obj => sourceKeys
                  .every(key => obj[key] === source[key]))
}

console.log(whatsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

console.log(a); // What will this log?
var a = 5;
console.log(a); // What will this log?


// bar(); // What will this do?

console.log(bar)
var bar = function() {
  console.log('Function is not hoisted!');
};

console.log(x); // What will this log?
var x = 1;

let y = 2;
console.log(y); // What will this log?


var e = 25;
console.log(e); // What will this log?

var e = 30;
console.log(e); // What will this log?

let f = 35;
console.log(f); // What will this log?

// Uncommenting the line below will throw an error. Why?
    f = 40;
console.log(f); // What will this log?


function hoistingExample() {
  console.log(g); // What will this log?
  
  var g = 50;

  function g() {
    console.log('Function g is called');
  }

  console.log(g); // What will this log?
}

hoistingExample();

function spinalCase(str) {
  return str
            .replace(/\s+|_/g, '-')
            .replace(/[a-z][A-Z]/g, '$1-$2')
            .toLowerCase()
}

spinalCase('This Is Spinal Tap');

function pairElement(str) {
  const pairs = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  }
  console.log(pairs)
  return str
           .split('')
           .map(item => [item, pairs[item]])
}

console.log(pairElement("GCG"));


function uniteUnique(...arr) {
     return arr.flat()
               .filter((item, index, arr)=> arr.indexOf(item) !== -1)
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


function convertHTML(str) {
  const pairs = {
    "&":"&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  console.log(str.replace(/[&<>""']/g, item => pairs[item]))
}

convertHTML("Dolce & Gabbana");

// find two numbers in an array that add up to a specific target sum.
// Given an array of integers and a target sum, determine the indices of the two numbers in the array that add up to the target sum.
// [2, 7, 11, 15], target = 9 returns [0, 1]

function twoSum(arr, target){
  const alreadySeen = {};
  
  for (let i = 0; i < arr.length; i++){
   if(target - arr[i] in alreadySeen){
    return [alreadySeen[target - arr[i]], i]
   } else{
    alreadySeen[arr[i]] = i;
   }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))

// Objective: Given an array of strings, group the anagrams together. Two strings are anagrams if they contain the same characters but in a different order.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function anagramCheck(arr){
 return arr.map(item => item.split('').sort().join(''))
}

console.log(anagramCheck(["eat", "tea", "tan", "ate", "nat", "bat"]))

// The purpose of this function is to group words that are anagrams of each other into subarrays.

const anagramChecker = (arr) => {
 const anagramMap = {}
  arr.forEach(word => {
  const sortedWord = word.split('').sort().join('');
  if(anagramMap[sortedWord]){
   anagramMap[sortedWord].push(word);
  } else {
    anagramMap[sortedWord] = [word]
  }
 })
 console.log(anagramMap)
 console.log(Object.values(anagramMap))

}

anagramChecker(["eat", "tea", "tan", "ate", "nat", "bat"])



function longestWordString(str){
  let wordArray = str.split(' ');
  let longest = wordArray[0];

  for(let i = 0; i < wordArray.length; i++){
    if(wordArray[i].length > longest.length){
      longest = wordArray[i]
    }
  }
  return longest
}

console.log(longestWordString('Hello I am theeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee longest woooooorrrrrd'))


function longestWordString2(str){
  let wordArray = str.split(' ');

  let longestLength = Math.max(...wordArray.map(item => item.length))
  return wordArray.filter(item => item.length === longestLength)

}

console.log(longestWordString2('Hello I am the longest woooooorrrrrd'))


function longestWord(str){
  const words = str.split(' ');
  let longest = words[0];

  for(let i = 0; i < words.length; i++) {
    if(words[i].length > longest.length){
      longest = words[i]
    }
  }
  return longest;
}

console.log(longestWord('I am alwayyyyyyyyyyyys the longesfffffffffffffffffffffffffffffffft word'))


function longestWord2(str) {
  const words = str.split(' ');
  const longestWordLength = Math.max(...words.map(item => item.length))
  console.log(longestWordLength)
  return words.filter(item => item.length === longestWordLength)[0]
}

console.log(longestWord2('Who is going to beeeeeeeeeeeee the longest.'))

function longestWord3(str){
  return str.split(' ').reduce((longest, current) => longest.length > current.length ? longest : current)
}

console.log(longestWord3('Who will be the longesttttttt word todayyyyyyyyyyy.'))

// create a function that runs console log of 'first'

// create a function that returns a promise object, which will return a log of 'second'

// create a function that runs settime function that logs 'third'

// create another function that runs console log of 'fourth'


// run your logs, before hitting RUN let me know what you expect to be logged


function logOfFirst(){
  console.log('first')
}

function newPromise(){
  const myPromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
     resolve ('second')
    }else {
      reject('operation error')
    }
  })
  return myPromise
}
function runSetTimeOut(){
  setTimeout(() => {
    console.log('third')
  }, 5000)
}


function runFourth(){
  console.log('fourth')
}


logOfFirst();
runSetTimeOut();
newPromise()

.then((data) =>{
  console.log(data)
});

runFourth();
//first
//fourth
//second
//third

// create a function that runs console log of 'first'

// create a function that returns a promise object, which will return a log of 'second'

// create a function that runs settime function that logs 'third'

// create another function that runs console log of 'fourth'


// run your logs, before hitting RUN let me know what you expect to be logged


function logOfFirst(){
  console.log('first')
}

function newPromise(){
    return new Promise((resolve, reject)=> resolve ('second'));
}

function runSetTimeOut(){
  setTimeout(() => {
    console.log('third')
  }, 0)
}


function runFourth(){
  console.log('fourth')
}


logOfFirst();
runSetTimeOut();
newPromise()

.then((data) =>{
  console.log(data)
});

runFourth();
//first
//fourth
//second
//third

let d = 'dog';
let c = 'cat';
[d, c] = [c, d]
console.log(c);
console.log(d)
const arr = [1, 2, 3, 4];
console.log(a)





function sumRange(arr){
  let sumBetween = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr) ; i++){
    sumBetween += i;
  }
  return sumBetween
}

console.log(sumRange([1, 4]))