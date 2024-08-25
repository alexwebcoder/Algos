function myReplace(str, before, after) {
    let checkCaps = /^[A-Z]/.test(before)
                    ? after[0].toUpperCase() + after.slice(1)
                    : after[0].toLowerCase() + after.slice(1)
    return str.replace(new RegExp(before, 'gi'), checkCaps)
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); 

  console.log('hi')


  const myArray = [[[[['My value']]]]]

  function unWrap(array){
    if(Array.isArray(array)){
      return  unWrap(array[0])
    } else{
      return  array
    }
  }

  console.log(unWrap(myArray))

  const numbers = [5, 3, 2, 4, 16, 18, 22];

  console.log(numbers.sort((a, b) => a - b))

  const words = ['banana', 'apple', 'cherry'];

  console.log(words.sort().reverse())

  //given an array of intervals representing the start and end times of meetings(eg [[start1, end1], [start2, end2], ...]) determine the number of meeting rooms required.

  //need to find min number of rooms so we can accomodate all meetings without any overlap

  const intervals = [[0, 30], [5, 10], [15, 20]]

  function numberOfMeetingRooms(arr){
    //check to see if it is an empty array
    if(arr.length === 0) return 0;

    //separate the start and end times to track when a meeting starts and ends
    const starts = arr.map(item => item[0])
    const ends = arr.map(item => item[1])

    //we have to sort them in chronological order to determine the overlaps. This will determine if a new room is needed or if a previously used room can be freed up
    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)

    //declare variables to track the number of rooms needed
    //declare variable to track the next meeting that finishes
    let rooms = 0;
    let endPointer = 0;
    
    //iterate over each start time
    //and check each meeting start time to see if it overlaps with the previous meetings end time
    for(let i = 0; i < starts.length; i++){

    }
  }

  numberOfMeetingRooms(intervals)

  let regex = /^[A-Z]\*$/

  //get all elements that have tt
 const ttWords = ['cattle', 'attempt', 'tattle', 'puddle', 'riddle'];
console.log(ttWords.filter(item => /tt/.test(item))) ;

//check if all elements have a tt or a dd
//if checking for every use every for any use some
console.log(ttWords.every(item => /tt|dd/.test(item)))
console.log(ttWords.some(item => /em/.test(item)))
const pat = new RegExp('dog', 'gi');
console.log(pat)
let greeting = 'hi';
greeting = 'yo'
const pattern1 = new RegExp(`${greeting}`)
console.log(pattern1)
const numbersCommas = '1,2,3,4,5';

console.log(numbersCommas.replace(/,/, '-'))
console.log(numbersCommas.split(',').join('-'))

const numberWithDash = numbersCommas.split(',')
const result = numberWithDash[0] + '-' + numberWithDash.slice(1).join(',')
console.log(result)

let patterTwo = /two/gi
let two1 = 'Their artwork is exceptional';
let two2 = 'one plus tw0 is not three';
let two3 = 'TRUSTWORTHY'

console.log(patterTwo.test(two3))
//filter all items that do not contain an e
let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];

console.log(items.filter(item => !/e/.test(item)))
console.log(items.filter(item => !item.includes('e')))

//replace all occurances of 5
let ip = 'They ate 5 apples and 5 oranges'
console.log(ip.replace(/5/i,'five'))
console.log(ip.split('5').join('five'))

let notePattern = 'This note should not be NoTeD'
console.log(notePattern.replace(/note/gi, 'X'))

//filter all lines not containing the string 2
let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;

console.log(purchases.split('\n').filter(item => !/2/.test(item)).join('\n'))

//filter all elements that contain either a or w
let itemsArray = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
function aOrW(arr){
  return arr.filter(item => /a|w/.test(item))
}

console.log(aOrW(itemsArray))

//filter all elements that contain both e and n

let eItems = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']

function eAndN(arr){
  return arr.filter(item => /e/.test(item) && /n/.test(item))
}

console.log(eAndN(eItems))

// replace 0xA0 with 0x7F and 0xC0 with 0x1F
let xOpattern = 'start address: 0xA0, func1 address: 0xC0'
console.log(xOpattern.replace(/0xA0/, '0x7f').replace(/0xC0/,'0x1F'))

let wordBoundaries = 'par spar apparent spare part'
console.log(wordBoundaries.replace(/\b/g, '"').replace(/ /g, ','))
console.log('-----hello-----'.replace(/\b/g, ' '))

// Check if the given input strings contain is or the as whole words.

let str1 = 'is; (this)'
let str2 = "The food isn't good"
let str3 = 'the2 cats'
let str4 = 'switch on the light'

console.log(/\b(is|the)\b/.test(str4))

//change only the whole word red to brown

let red = 'bred red spread credible red';

console.log(red.replace(/\bred\b/g, 'brown'))

// For the given array, filter all elements that contain 42 surrounded by word characters.
let items42 = ['hi42bye', 'nice1423', 'bad42', 'cool_42a', 'fake4b'];
console.log(items42.filter(item => /\w42\w/.test(item)))
console.log(items42.filter(item => /\B42\B/.test(item)))

// filter all elements that start with den or end with ly

let itemsDenLy = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\n', 'dent']

console.log(itemsDenLy.filter(item => /^den|ly$/.test(item)))

// change whole word mall to 1234 only if it is at the start of a line.

let para = `(mall) call ball pall
ball fall wall tall
mall call ball pall
wall mall ball fall
mallet wallet malls
mall:call:ball:pall`

console.log(para.replace(/^mall\b/gm, '1234'))

// filter all elements having a line starting with den or ending with ly
let arrayItems = ['lovely', '1\ndentist', '2 lonely', 'eden', 'fly\nfar', 'dent']

console.log(arrayItems.filter(item => /^den|ly$/mg.test(item)))

// filter all whole elements 12\nthree irrespective of case.
let items12 = ['12\nthree\n', '12\nThree', '12\nthree\n4', '12\nthree']
console.log(items12.filter(item => /^12\nthree$/ig.test(item)))

// replace hand with X for all elements that start with hand followed by at least one word character.
let hand = ['handed', 'hand', 'handy', 'un-handed', 'handle', 'hand-2']

console.log(hand.map(item => item.replace(/^hand\B/, 'X')))

// filter all elements starting with h. Additionally, replace e with X for these filtered elements.

let itemsH = ['handed', 'hand', 'handy', 'unhanded', 'handle', 'hand-2']

console.log(itemsH.filter(item => /^h/.test(item)).map(item => item.replace(/e/g, 'X')))

//need the m flag to enable matching at the end of a line separator
console.log(/end$/m.test('bend it\nand send\n'))