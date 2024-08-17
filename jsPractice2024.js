let countries = {
    southAmerica: "Argentina",
    asia: "Laos",
    europe: "Switzerland",
    centralAmerica: "Panama",
    northAmerica: {
      unitedStates: [
        "california",
        "texas",
        "montana",
        { colorado: "denver", alaska: "anchorage" }
      ],
      mexico: "guadalahara",
      canada: {toronto: 'province'}
    }
  };
  
  for (let key in countries) {
    if(typeof countries[key] === 'object'){
      console.log(`(Key)${key}:`);
      for(let subkey in countries[key]){
        if(Array.isArray(countries[key][subkey])){
          console.log(`         (Subkey Array)${subkey}:`);
          countries[key][subkey].forEach(item => {
           if(typeof item === 'object'){
             for(let innerkey in item){
               console.log(`                   (Innerkey)${innerkey}: ${item[innerkey]}`);
             }
           } else{
             console.log(`                         (Array element)${item}`)
           }
          });//forEach close
         } else if(typeof countries[key][subkey] === 'object'){
            console.log(`(Subkey Object)${subkey}`)
           for(let innerkey in countries[key][subkey]){
             console.log(`                     ${innerkey}: ${countries[key][subkey][innerkey]}`)
           }  
         }
        else{
           console.log(`(Subkey non object)${subkey}: ${countries[key][subkey]}`);
         }
        }
       }
        else{
          console.log(`${key}: ${countries[key]}`)
        }
    };


    //return the indices of 2 numbers in an array that add up to the target

    function twoSum(arr, target) {
        const previousValues = {};
        for(let i = 0; i < arr.length; i++){
            const currentNumber = arr[i];
            const neededValue = target - currentNumber;
            const index2 = previousValues[neededValue];
            if(index2 !== undefined){
                return [index2, i]
            }else{
                previousValues[currentNumber] = i;
            }
        }
    }

    console.log(twoSum([2, 3, 4, 5, 6, 7, 8], 15));//5, 6

    function takesArrayReturnsLargest(arr){
        const largestNum = Math.max(...arr);
        return largestNum;
    }

    console.log(takesArrayReturnsLargest([2, 33, 44, 55, 77, 5, 3]));
    //77

    function example(){
        
        const x = 0;
        console.log(x)
    }
    example()

const digits = [33, 44, 22, 15, 77, 99, 14, 2, 3];

// sum of highest two numbers in an array
const sumTwo = (arr)=> {
  
  const sorted = digits.sort((a, b) => a - b);

  return sorted[arr.length - 1] + sorted[arr.length - 2];
  
}


console.log(sumTwo(digits));

//using the every method
const colors = ['red', 'green', 'blue'];

const colorMap = {};

for(const [index, color] of colors.entries()) {
  colorMap[index] = color;
}

console.log(colorMap);

//slice: copy an array/ or portion of an array
const dogs = ['poodle', 'beagle', 'terrier', 'collie'];
dogs.slice();
console.log(dogs)

//modifies the existing array because push adds to the same array that it is called upon WRONG WAY
function mutatingPush(original, newItem) {
  original.push(newItem);
  return original;
}

const first = [1, 2, 3];
const second = [4, 5];

console.log(mutatingPush(first, second));

//combines array with out changing either array
function nonMutating(arr1, arr2){
  const combinedArr = [...arr1, ...arr2];
  return combinedArr;
}

console.log(nonMutating([1, 2, 3], [4, 5, 6]))

//The concat method also combines arrays without matating the origial
function concatArray(original, newItem){
  return original.concat(newItem);
}

const pets = ['dogs', 'cats', 'birds'];
const morePets = ['fish', 'snakes', 'hamsters'];
console.log(concatArray(pets, morePets));

const users = [
  {name: 'John', age: 34},
  {name: 'Amy', age: 20},
  {name: 'camperCat', age: 10}
]

const sum = arr => arr.reduce((sum, user)=> sum + user.age, 0)

console.log(sum(users));

//transform an array into an object by runnng reduce on an array of objects

const userObject = arr => arr.reduce((obj, user)=>{
  //sets a property on the accumulator object
  obj[user.name] = user.age;
  return obj;
}, {});

console.log(userObject(users))
//{John: 34, Amy: 20, camperCat: 10}

const numbers = [4, 55, 77, 18, 29];

const averageOfAll = arr => {
  const sum = arr.reduce((total, number) => total + number);
  return sum / arr.length;
}

console.log(averageOfAll(numbers));

//sorting ages

const women = [
  {name: 'LillyGene', age: 21},
  {name: 'Gini', age: 31},
  {name: 'Barbie', age: 25},
  {name: 'Annie', age: 20}
]

function sortAges(arr){
  return arr.sort((a, b) => a.age - b.age)
      .sort((a, b) => a.name.length - b.name.length)
}

console.log(sortAges(women))

const names = ["alex", "dexter", "charles", "aaron", "zach", "glenn"];

function alphabeticalOrder(arr) {
  // Only change code below this line


  //use toSorted so that you don't alter the original array
  return arr.toSorted((b, a) => {
    return a === b ? 0 : a < b ? 1 : -1
  })
  // Only change code above this line
}

console.log(alphabeticalOrder(numbers));
console.log(names);

const str = 'Hello World';
const bySpace = str.split(' ');
console.log(bySpace)

const otherString = 'How9are7you2today';
const byDigits = otherString.split(/\d/);
console.log(byDigits)

function splitify(str){
    return str.split(/\W/);
            
}

console.log(splitify('Hello World, I-am code'))

const paragraph = `I think Ruth's dog is cuter than your dog!`
console.log(paragraph.replace(`Ruth's`, 'my'))
console.log(paragraph)

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'))

function urlSlug(title) {
  return title.split(' ')
        //  .filter((substr) => substr !== '')
         .join('-')
         .toLowerCase();
             
}


console.log(urlSlug('  Winter Is Coming'))

//every method checks if all items meet a certain criteria returns true or false
function checkPositive(arr) {
  return arr.every( item => item > 0)
}

console.log(checkPositive([1, 2, 3, -4, 5]))

//some method checks if some items meet the criteria

function checkPositives(arr) {
  return arr.some( item => item > 0)
}

console.log(checkPositives([1, 2, 3, -4, 5]))

//removing duplicates with set method
const digits1 = [1, 2, 3, 4, 4, 5]
const set1 = new Set(digits1)

// console.log(set1)

//takes in an array of 2 numbers and finds the sum of the numbers between them
function sumAll(arr) {
  let sumBetween = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll([1, 4]))


//find diff between two arrays

//imperative solution (use statements to tell the computer to do something step by step)

function diffBetweenTwo(arr1, arr2) {
  let newArr = [];

   function findOnlyInOne(first, second){
    for(let i = 0; i < first.length; i++){
      if(second.indexOf(first[i]) === -1){
        newArr.push(first[i])
      }
    }
   }
   
   findOnlyInOne(arr1, arr2);
   findOnlyInOne(arr2, arr1);

  return newArr;
}

console.log(diffBetweenTwo([1, 2, 3, 4, 5], [1, 2, 3 , 4, 5, 6]))
//6

//declarative solution (you focus on the end result and let the code take care of all the steps between)
 function diffBetween(arr1, arr2){
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const difference = (first, second) => 
    [...first].filter(element => !second.has(element));
  
  const diff1 = difference(set1, set2);
  const diff2 = difference(set2, set1);
  return [...diff1, ...diff2];
 }

 console.log(diffBetween([2, 3, 4, 5], [2, 3, 4, 6, 7]));
 //5, 6, 7


//return indices of 2 elements that add up to the target

function returnTwoIndices(arr, target) {
  const previousValues = {};

  for(let i = 0; i < arr.length; i++) {
    const neededValue = target - arr[i];
    if(neededValue in previousValues){
      return [previousValues[neededValue], i]
    } previousValues[arr[i]] = i;
  }
}

console.log(returnTwoIndices([2, 4, 5, 7, 7], 14));
// 3, 4

//return the differences between two arrays in an array

function differenceInTwoArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const findDiff = (first, second) => {
  return  [...first].filter(item => !second.has(item))
  } 

   return [...findDiff(set1, set2), ...findDiff(set2, set1)]
}

console.log(differenceInTwoArrays([2, 3, 4, 5], [2, 23, 4, 5]))
// 3, 23

// declarative solution
function diffArray(arr1, arr2) {
      return arr1
                .concat(arr2)
                .filter(item => !arr2.includes(item) || !arr1.includes(item));
}
let resultedArray = diffArray([1, 2, 3, 4], [3, 4, 5, 6])
console.log(resultedArray);

//1, 2, 5, 6

//find the longest string
//arguments object is good for variadric functions (don't know the arity (number of arguments that it will take))
function findLongestStr() {
  let longest = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    arguments[3] = 'The quick'
      if(arguments[i].length > longest.length){
        longest = arguments[i];
      }
  }
  return longest;
}

console.log(findLongestStr('Today is Monday', 'hello', 'oh', 'The quick brown fox jumped over the lazy dog'))

//remove all the elements from the initial array that are the same value as the arguements
//remove any number from the first argument that is the same as any of the othe arguments
//remove from the array what is not in the arguements and return that

function destroyer(arr, ...theArgs) {
 return arr.filter(item => !theArgs.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5));

//(Nested for loop)removing elements from initial array that have same value as the arguments
function destroyerWithLoops(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];
  for(let i = 0; i < arr.length; i++){
    let removeElement = false;
    for(let j = 0; j < valsToRemove.length; j++){
      if(arr[i] === valsToRemove[j] ){
        removeElement = true
      }
    }if(!removeElement){
      filteredArray.push(arr[i])
    }
  }
  return filteredArray;
}

console.log(destroyerWithLoops([1, 2, 3, 1, 2, 3], 2, 3)); 


//removing duplicates
//filter method returns the first occurance of the current element
function removeDupes(arr) {
  const noDuplicates = arr.filter((ele, i, array) => array.indexOf(ele) === i );
  return noDuplicates;
}

console.log(removeDupes([1, 1, 2, 2, 3, 3, 4, 4]))

//remove dupes with set

function removeWithSet(arr) {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

console.log(removeWithSet([4, 4, 3, 3, 55, 55]));

//remove dupes with object
function removeDupesWithObject(arr) {
  const uniqueArr = [];
  const seen = {};

  for(let i = 0; i < arr.length; i++){
    if(!seen[arr[i]]){
      uniqueArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return uniqueArr;
}

console.log(removeDupesWithObject([2, 2, 4, 5, 5, 7, 7, 8]))

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
console.log(Object.values(object1));

const animals = ['Cow', 'Horse', 'Dog', 'Cat', 'Rabbit'];

for(let i = 0; i < animals.length; i++){
  const animals = ['Whale', 'Dolphin'];
  console.log(animals[i]);
}

function myFunction(){
  var notBlockedScoped;
if(true){
   let blockScopedVar = 'I am blocked scoped.';
    notBlockedScoped = 'I am not block scoped but I am functioned scoped and my value has been hoisted'
  console.log(blockScopedVar)//I am blocked scoped
} 
 console.log(notBlockedScoped)//I am not block scoped but I am functioned scoped and my value has been hoisted.
}
myFunction()
// console.log(blockScopedVar)//will throw reference error because it is trying to access a variable that has local scope and block level scope and this console.log is outside of the function


const fullName = function(firstName, lastName){
  return `${firstName} ${ lastName}`
}

console.log(fullName('Alex', 'DeLeon'));


// Create a function “isAnagram” that takes in two strings, this function will determine if the two strings are anagrams of each other. If so return True, else false

function isAnagram(str, str2){
  let string1 = str.split('');
  let string2 = str2.split('');
  let numberOfTimes = {};

  for(let i = 0; i < string1.length; i++){
    let currentLetter = string1[i];
    if(currentLetter in numberOfTimes){
      numberOfTimes[currentLetter] += 1;
    } else{
      numberOfTimes[currentLetter] = 1;
    }
  }

  for (let i = 0; i < string2.length; i ++){
    if(numberOfTimes[string2[i]]){
       numberOfTimes[string2[i]] -=1;
    }else{
      console.log(numberOfTimes)
      return false;
    }
  } 
  let numberOfTimesValues = Object.values(numberOfTimes)
  for(let i = 0; i < numberOfTimesValues.length; i++){
    if(numberOfTimesValues[i] !== 0){
      console.log(numberOfTimesValues)
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("aaabbb", "aabbbb"));
console.log(isAnagram("ba", "abb"));



//eliminate the duplicates in this array with hash map

function eliminateDupes(arr) {
  const seen = {};
  const filtered = [];
  for(let i = 0; i < arr.length; i++){
    if(!seen[arr[i]]){
       filtered.push(arr[i]);
       seen[arr[i]] = true;
    }
    console.log(seen[arr[i]])
  }
  console.log(seen)
  return filtered;
}

console.log(eliminateDupes([2, 2, 3, 4, 4, 5, 5]));



//twoSum

function twoSumTwo(arr, target){
  const previousValues = {};

  for(let i = 0; i < arr.length; i++){
    if(target - arr[i] in previousValues){
      return [previousValues[target - arr[i]], i]
    } previousValues[arr[i]] = i
  }
}

console.log(twoSumTwo([2, 3, 4, 5, 5, 7, 9], 16))
//5, 6

//example of non declared variable (no keyword) going to the global scope
function book() {
 good_book = "Slaughterhouse Five";
}
book();
console.log(good_book);

//return the smallest value of an array
//O(n) time complexity because arguement depends on the length of the array
//O(n) space complexity. The spread operator creates a new list of arguments. The array is duplicated in memory for the Math.min() function call
const numbers2 = [2, 44, 22, 55, 1]
function min_value(arr) {
  return Math.min(...arr);
}

console.log(min_value(numbers2))
console.log(numbers2)

//return the smallest value imperative
//O(n) time complexity since it iterates through the array once
//Space complexity is O(1) since it only uses a single variable to track the smallest value and no additional memory is needed regardless of the array size.
//This function is more memory efficient since it has O(1) space complexity than the function above
function smallestValue(arr){
  let smallestValue = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < smallestValue){
      smallestValue = arr[i]
    }
  }
  return smallestValue;
}

console.log(smallestValue(numbers2))

// Define a function called add_numbers() that adds two numbers and throws an error if the arguments supplied to the function are not numbers.
function add_numbers(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Argument Error: Numbers only')
  } return a + b;
}

console.log(add_numbers(4, 7))

const arr = [0, "nice", function bad_hairday () { return "YOLO" }];

console.log(arr[2]())

const your_name = function(){
  return 'Snoop Dogg'
}

var result;
if (undefined) {
  result = function () { return "blah blah blah"; }();
} else {
  result = function () { return "meow meow meow"; }();
}
console.log(result);

console.log(Math.round(4.87))

const oneTwo = [1, 2];
console.log(oneTwo === oneTwo)

const weird = [1, 40, 'bob', [], false, 89];

//return sum of just the numbers in this array
//didn't need filter method just use reduce and check typeof like on line 652.
function sumThis(arr) {
return  arr.filter((item) => typeof item === 'number')
     .reduce((acc, current) => acc + current)
}

console.log(sumThis(weird));
//130

function sumThisAgain(arr){
  let result = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      result += arr[i]
    }
  }
  return result;
}

console.log(sumThisAgain(weird));

let heaven = [34, [], "Bodacious", "barbecues", "begin", "whatever", "By", "battering", true, "bacon"];

//concatenate all the elements that begin with letter 'b' and print it to the console
function concatLetterB(arr){
  let letterB = '';
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string'){
      arr[i] = arr[i].toLowerCase()
    }
    if(arr[i][0] === 'b'){
      letterB += `${arr[i]} `
    }
  }
  return letterB;
}

console.log(concatLetterB(heaven));

//add the sum of the numbers in the array and not the other elements

const strangeArray = [4, [], {}, '5', 6, 99, 'dolphin', false];

function addThisUp(arr){
 return arr.reduce((acc, item) => typeof item === 'number' ? acc + item : acc, 0)
}

console.log(addThisUp(strangeArray))
//109

let mug = {
  capacity: "10 fluid ounces",
  customer_message: function (desired_size) {
    if (desired_size > 10) { return "This mug is not large enough for you" };
  }
}
console.log(mug.customer_message(13));

function global_function () { return "I can be called anywhere" };
let an_obj = {
  something: global_function
}
console.log(an_obj.something());

let ideal_scene = {
  status: "chillin'",
  location: "somewhere with good waves",
  thoughts: "bling bling"
}
delete ideal_scene.thoughts
console.log(ideal_scene.thoughts);

let ruff_ryders = {
  dmx: {
    birthplace: "Mount Vernon, NY"
  }
}
console.log(ruff_ryders.lox && ruff_ryders.lox.birthplace);

let a = {
  x: "y"
}

console.log("x" in a);

let circle = {
  radius: 10,
}

// Add a circumference method to the following circle object that returns the circumference of the circle (Pi equals Math.PI).
circle.circumference = function(){return 2 * Math.PI * this.radius}

console.log(circle.circumference())

//twoSum

function twoSumm(arr, target) {
  const previousValues = {};

  for (let i = 0; i < arr.length; i++){
    if(target - arr[i] in previousValues){
        return [previousValues[target - arr[i]], i]
    } previousValues[arr[i]] = i;
  }
}

console.log(twoSumm([2, 3, 4, 5, 7, 9, 9], 18))
//5, 6

//diff two arrays

function diffTwoArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  function findDiff(first, second){
    return [...first].filter((item) => !second.has(item));
  }

  return [...findDiff(set1, set2), ...findDiff(set2, set1)]
}

console.log(diffTwoArrays([2, 3, 4, 5, 6, 7, 8], [2, 3, 4, 9, 19]))
//5, 6, 7, 8, 9, 19

//event capturing and bubbling example

const divs = document.querySelectorAll('div')
function logText(e){
  console.log(this.classList.value)
  // e.stopPropagation();
}

//the once option removes the event listener to make sure the function just runs once.
divs.forEach(div => div.addEventListener('click', logText, {capture: false, once:true}))

const alex = {
  firstName: 'Alex',
  lastName: 'DeLeon',
  myName() {
    return `My name is ${this.firstName} ${this.lastName}!`
  }
}

console.log(alex.myName());

function Mammal(){
  this.warmBlooded = true;
  this.scaly = false;
}

const fido = new Mammal();
const spot = new Mammal();
console.log(spot)

console.log(fido.scaly)

let myCalculator = {
  square(x) {
    return x * x
  }
}

console.log(myCalculator.square(5));

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return `${firstName} ${lastName}`
  };
}

const jimmy = new Person('jimmy','wynn');
console.log(jimmy.fullName())

const wilson = {
  firstName: 'Ricky',
  lastName: 'Wilson',
  fullName() {
    return `Just call me ${this.firstName} ${this.lastName} please.`
  }
}

console.log(wilson.fullName());

function Hat(){
  this.brand = `shhh can't tell`;
}

let myHat = new Hat();
console.log(myHat.brand)

function Shape(side, name){
  this.side = side;function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
  this.name = name;
  this.area = function(){
    return this.side * this.side;
  }
}
//adding a method using the prototype object

Shape.prototype.speak = function(){
  return `I'm a ${this.name}`
}
const pentagon = new Shape(5, 'Pentagon');
console.log(pentagon.area(), pentagon.speak());

function Employee(name, daysWorked, vacationDaysPerYear, vacationDaysTaken){
  this.name = name;
  this.daysWorked = daysWorked;
  this.vacationDaysPerYear = vacationDaysPerYear;
  this.vacationDaysTaken = vacationDaysTaken;
  this.vacationDaysLeft = function(){
    return this.vacationDaysPerYear - this.vacationDaysTaken
  }
}

Employee.prototype.bestWorker = function(){
  return `${this.name} has worked ${this.daysWorked} days and is the best worker.`
}

const bestEmployee = new Employee('Alex', 50, 14, 2)

console.log(bestEmployee.bestWorker())

console.log(bestEmployee.vacationDaysLeft())


//write a function that takes an array of objects and a source object
//filter the array of objects to return only objects that have matching key-value pairs as specified by the source object

function whatIsInAName(collection, source){
  const sourceKeys = Object.keys(source);

  return collection.filter(obj => {
    for(let i = 0; i < sourceKeys.length; i++){
      if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
         return false;
      }
    }
    return true;
  })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
      .every(key => obj[key] === source[key]));
}

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));

//convert a string to spinal case (all lowercase with dashes inbetween the words)
function spinalCase(str){
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
}

console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase('The_Andy_Griffith_Show'))

//global exection context is created when a script is loaded and executed by the JS engine(when the script starts running)
//global exection context has two main phases (creation and execution phases)
//During the creation phase the global object(window), the this keyword and memory space is set up
//During the execution phase, code runs line by line and functions are invoked and put on top of the stack. When it finishes it is popped off the stack

function A(){
  b();
  let c = 'C';
  console.log(c)
}

function b(){
  let d = 'D';
  console.log(d)
}

let d = 'D2'
A();
console.log(d)
console.log(d)

//D, C, D2

//the inner function is defined within the same lexical scope since it is called within the outer function
//the inner function has access to the outer functions scope
function outer(){
  console.log('i am outer')
  inner()
  function inner(){
    console.log('i am inner')
  }
}

outer()

function twoSumFunction(arr, target){
  const previousValues = {};

  for(let i = 0; i < arr.length; i++){
    if(target - arr[i] in previousValues){
      return [previousValues[target - arr[i]], i]
    }
    previousValues[arr[i]] = i
  }
}

console.log(twoSumFunction([2, 3, 4, 6, 9, 11], 20))
//4, 5

//return the first non repeating character

function findFirstNonRepeat(str){
  let firstNonRepeat = '';
  for(let i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      firstNonRepeat += str[i]
      return firstNonRepeat
    }
  }return null;
}

console.log(findFirstNonRepeat('aabbccddeeffgghi'))
//h

function firstNonRepeat(str){
  return str
           .split('')
           .filter(item => str.indexOf(item) === str.lastIndexOf(item))[0]
}
console.log(firstNonRepeat('aabbccdeeffg'))


function firstNotRepeatCharacter(str){
  return str
           .split('')
           .find(item => str.indexOf(item) === str.lastIndexOf(item))
}

console.log(firstNotRepeatCharacter('aaabcccdefg'))

console.log('hello'.lastIndexOf('h'))

//return first non repeat with regex

function hasRepeats (str) {
  return /(.).*\1/.test(str);
}

console.log(hasRepeats('zzwwviipp'))

function firstNoRepeat(str){
  return str
           .split('')
           //find element will return the first element that passes the test
           .find((e, i, a) => a.indexOf(e) === a.lastIndexOf(e))
}

console.log(firstNoRepeat('aabbccddeefgh'))

function pigLatin(str){
 if(str.match(/^[aeiou]/)) return str + 'way';
 const consonants = str.match(/^[^aeiou]+/)[0];
 return str.substring(consonants.length) + consonants + 'ay';
}

console.log(pigLatin('dapple'))

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("econsonant"));

//pigLatin

function pigLatin2(str){
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
console.log(pigLatin2('and'))

const regExpLiteral = /pattern/;

//regex practice

const string = 'The Quick brown fox jumped over the lazy dog.';

console.log((/Dog/i).test(string))

console.log(/\d/.test(''))


function waitThreeSeconds(){
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function')
}

function clickHandler() {
  console.log('click event!');
}

document.addEventListener('click', clickHandler)

// waitThreeSeconds();
console.log('finished execution');

//regex

console.log(/[0123456789]/.test('in 1992'))

console.log(/\d\d-\d\d-\d\d\d\d/.test('07-06-1967')) //true

console.log(/[^\d]/.test('1d'))

let stringDog = 'There is a stray dvg Dog outside';

console.log(stringDog.match(/dog/ig))
console.log(stringDog.match(/d.g/ig))
console.log(stringDog.match(/d[v]g/ig))

let dogString = 'the dog, whose name is dag, dug and i told him not to dig'

//set of characters that you want to match
console.log(dogString.match(/d[oui]g/gi))

//set of characters that you don't want to match
console.log(dogString.match(/d[^oui]g/gi))

//match characters that appear consecutively on a line (no brackets)

let mississippi = 'Mississippi';

console.log(mississippi.match(/s+/gi))

//match characers that appear 0 or more times

let bigA = 'Aaaaagh';

console.log(bigA.match(/A*/gi))

//greedy match finds the longest possible part of the string that fits the regex pattern (*) and lazy match (?) will find the shortest substring

let titanic = 'Titanic';

console.log(titanic.match(/t[a-z]?i/gi))

let text = '<h1>Winter is coming</h1>'
console.log(text.match(/.*/gi))
//['<h1>Winter is coming</h1>', '']

//. matches any character including empty space
//* matches zero or more occurance of .
//? matches few characters as possible to meet the pattern

//extract individual html tags from a string
console.log(text.match(/<.*?>/gi))


let reCriminals = /C+/;

let firstString = 'ff Ricky is first and can be found.'
let firstRegex = /^Ricky/gi;

console.log(firstRegex.test(firstString))

console.log(firstString.match(firstRegex))

//if you want to match characters, put them in brackets

let ricky = 'I am Ricky and will return r, i, c, k, y';
let rickyRegix = /[ricky]/gi

let newRicky = ricky.match(rickyRegix)
let uniqueRicky = [...new Set(newRicky.map(char => char.toLowerCase()))];
let sorted = ['r', 'i', 'c', 'k', 'y']
console.log(uniqueRicky.sort((a, b) => sorted.indexOf(a) - sorted.indexOf(b)))

function greet(){
  console.log('hello')
}

greet.language = 'spanish';

console.log(greet.language)


let story = 'This is the never ending story.'

console.log(story.match(/story.$/gi))

let findLettersNumbersUnderscores = 'letters 44_ + sss%'


// /\w+/ will find letters numbers and underscores and a capital w (/\W+/)will find non word characters like punctuation, whitespace, quotes and symbols
//this is a shortcut for [A-Za-z0-9_]
console.log(findLettersNumbersUnderscores.match(/\W+/gi))

// /\d/g is the shortcut for finding all digits
//it is the same as using [0-9]
// /\D/g is for all non digits and is equal to [^0-9]

let numberStr = 'I told him 9 times on the 4th of July'
console.log(numberStr.match(/\d/g).length)

//how many digits in a string

function howManyDigits(str){
  return str
           .match(/\d/g).length
}

console.log(howManyDigits('I was there 4,300 times in 6 months. 432343333'))



let username = "Z97";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let resultA = userCheck.test(username);
console.log(resultA)

let testing = 'ssssss'
let regexTest = /^[a-z][a-z]+\d*$/ig
// makes sure that a string starts with a letter, is at least two letters and the plus sign allows for more than two letters

console.log(regexTest.test(testing))
console.log(testing.match(regexTest))

// \d$ says there needs to be one digit at the end 
// \d*$ can end with digits or have no digits at all (the * matches 0 or more of the preceding element)
// \d{2}$ says there needs to be three digits at the end
//+ sign looks for more of the preceding characters

//letters and numbers only
//numbers have to be at the end
//has to be at least 2 characters long and must be letters if 2 characters

//matches whitespace /\s/g

//to return at least 4 z between the ha and the ah
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/ig; 
let resultB = haRegex.test(haStr);

let favWord = "favorite";
let favRegex = /favou?rite/i; // the question mark is saying that the previous letter is optional
let resultC = favRegex.test(favWord);

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/g;//match q only if it is followed by u, but don't return u
let qRegex = /q(?!u)/g;//match q only if it is not followed by u, and don't return u
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/; //checks that the string has 3 to 6 word characters and makes sure a non digit is before a digit (the asterisk allows for any number of non digit characters in front of the digit)
console.log(checkPass.test(password));

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/i; // 6 characters long and 2 digits have to follow the characters
let resultD = pwRegex.test(sampleWord);

//string manipulation
//splitting a string into a character array
let ourString = 'Today is Thursday';
let array1 = ourString.split(' ');
console.log(array1)
let array2 = Array.from(ourString);
console.log(array2)
let array3 = [...ourString]
console.log(array3)

const sentence = "Remove&all% the whitespace &and ((punctuation";
const wordsArray = sentence.split(/\W+/).join(' ');
console.log(wordsArray)
// Output: ['Convert', 'this', 'string', 'into', 'an', 'array', 'of', 'words']


function firstNoRepeater(str){
  return str
           .split(' ')
           .find(item => str.indexOf(item) === str.lastIndexOf(item))
}

console.log(firstNoRepeater('apple apple pear banana banana orange'))

//regex

let matchDigits = /(789)/ig
let sevenEightNine = '59878123';

console.log(matchDigits.test(sevenEightNine))

let regexChallenge = /^[A-Z][a-z]{3}-[0-9]{4}!/

console.log(regexChallenge.test('Aabc-1234'))

// The string should start with either "http" or "https".
// It should be followed by "://".
// Then, it should have one or more lowercase letters (a-z) or digits (0-9).
// Next, there should be an optional port number that starts with a colon (:), followed by exactly 2 to 4 digits.
// Finally, the string should end with an optional forward slash (/).

const regexChallengeTwo = /^(https?:\/\/)[a-z0-9.-]+(:\d{2,4})?\/?$/
                      
console.log(regexChallengeTwo.test('https://example.com:8080'))

let myString = 'Eleanor Roosevelt'//true
let myString2 = 'Franklin D. Roosevelt'//true
let myString3 = 'FranklinRoosevelt'//false
let myString4 = 'Franklin P. Roosevelt'//true
let myString5 = 'Eleanor FannieMae Roosevelt'//true
let myRegex = /(Eleanor|Franklin) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/ig
console.log(myRegex.test(myString5));
console.log(myString5.match(myRegex))