const regPractice = /^([psr][iple](t|ap|ot|ate|spite))\s?(two)?/

const regPracticeTwo = /hu./

const regThree = /.un/

const divRegex = /^(\Wdiv\W)(exe(\Wbr\W)?)((\w+\W+\w+\W\s?)?)(\Wbr\W)?((cis\Wbr\W\w+\W+\w+\W+\w+\W)?)$/

const abc = /abc([defg]*)/

const endsWithADot = /[\w-']+\.$/

let sentencE = 'This is a sample string'
console.log(sentencE.includes('is'))
console.log(/is/.test(sentencE))

let ttWords = ['cattle', 'attempt', 'tattle', 'riddle']

console.log(ttWords.filter(item => item.match(/tt/)))
// console.log(ttWords)

let word = 'caTer';
word = word.replace(/cat/ig, 'hack')
console.log(word)

let s1 = 'Their artwork is exceptional';
let s2 = 'one plus tw0 is not three';
let s3 = 'TRUSTWORTHY';
const pat1 = /two/i

console.log(pat1.test(s1))
console.log(pat1.test(s2))
console.log(pat1.test(s3))

let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];

console.log(items.filter(item => !item.match(/e/)))
console.log(items.filter(item => !item.includes('e')))
console.log(items.filter(item => !/e/.test(item)))

// Replace only the first occurrence of 5 with five for the given string.

let ate = 'They ate 5 apples and 5 oranges'

function replaceFive(str){
    return str
             .replace(new RegExp(/5/, 'ig'), 'five')
}

console.log(replaceFive(ate))

function replaceFiveTwo(str){
    return str
             .split('5').join('five')
}

console.log(replaceFiveTwo(ate))

// Replace all occurrences of note irrespective of case with X

let ip = 'This note should not be NoTeD'
const X = ip.split('note').join('X')
console.log(X)

function thisNote(str){
 return   str
       .replace(new RegExp(/note/,'gi'), 'X')
       
}

console.log(thisNote(ip))

// For the given multiline input string, filter all lines NOT containing the string 2

let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`

function filterOutTwo(str){
    return str.split('\n')
              .filter(item => !/2/.test(item))
              .join('\n')   
}

console.log(filterOutTwo(purchases))
console.log(purchases)

// For the given array, filter all elements that contain either a or w.
let itemsAgain = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
function filterAW(arr){
    return arr.filter(item => (/a|w/).test(item) )
}
console.log(filterAW(itemsAgain))

// For the given array, filter all elements that contain both e and n.

let moreItems = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
function filterMas(arr){
    return arr.filter(item => /e/.test(item) && /n/.test(item))
}
console.log(filterMas(moreItems))

function filterAgain(arr){
  return arr.filter(item => item.includes('e'&&'n'))
}

console.log(filterAgain(moreItems))

// For the given string, replace 0xA0 with 0x7F and 0xC0 with 0x1F
let givenString = 'start address: 0xA0, func1 address: 0xC0'

function replaceGiven(str){
    return   str.replace(new RegExp(/0xA0/, 'gi'), '0x7f')
                .replace(new RegExp(/0xC0/, 'gi'), '0x1f')
}
console.log(replaceGiven(givenString))
const testReg = /\d*/g

let cat = 'cat'
let cater = 'cater'
console.log(cat == cater)

function addDollarSign(arr){
 return  arr.map(item => item.toString().replace(/^/, '$').replace(/$/, ' Sale'))
}

console.log(addDollarSign([4.99, 3.99, 1.99, 29.99]))

function addDollarTwo(arr){
    return arr.map(item => `$${item} Sale`)
}

console.log(addDollarTwo([4.99, 3.99, 1.99, 29.99]))

let multiLineText = `first line
top of the second line
pare
third line top`;
//matches any line ending in are
//m is for match any line in a multi line string.
console.log(/are$/m.test(multiLineText)); // Output: true

// \b is for matching word boundaries...where a word character is next to a non word character.
let words = 'par spar apparent spare part'

console.log(words.replace(/\bpar/g, 'X')) //replace par at the start of a word
console.log(words.replace(/par\b/g, 'X'))//replace par at the end of a word
console.log(words.replace(/\bpar\b/g, 'X'))//replace par only if it is not part of another word

console.log(words)
console.log(words.replace(/\b/g, '"').replace(/\s/g, ','))

let output = `'output=num1+35*42/num2'`;

output = output.replace(/\b/g, ' ')
output = output.trim()
console.log(output)