const input = document.querySelector('.numberInput');
const para = document.querySelector('p');
const br = document.createElement('br');
para.appendChild(br);

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}

input.addEventListener('change', ()=>{
    const num = parseFloat(input.value);
    if(isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = '';

        para.appendChild(document.createTextNode(`${num} squared is ${squared(num)},`));
        para.appendChild(br.cloneNode());

        para.appendChild(document.createTextNode(`${num} cubed is ${cubed(num)},`));
        para.appendChild(br.cloneNode());

        para.appendChild(document.createTextNode(`${num} factorial is ${factorial(num)}`));
    }

});

//array of numbers to be passed
const numbers = [44, 33, 55, 77, 100, 22, 5];

function findLargestNumber(array) {

//creates a paragraph element
 const para = document.createElement('p');
 //adds a class to the paragraph element
 para.classList.add('largest-number');
 //appends the paragraph element to the page
 document.body.appendChild(para);

 //Throws an error if the parameter is not an array or if the function is called without an array being passed
 if(!Array.isArray(array) || arguments.length !== 1 ){
    return para.textContent = 'You must input one array as an argument!'
}

//Throws an error if the input is an empty array
 if(array.length === 0){
     return para.textContent = 'The array cannot be empty!'
    }

//Throws an error if the edge case of the array having only one item
if(array.length < 2){
    return para.textContent = 'The array must have at least two numbers'
    }

//Declares a variable that holds a value of true if all items are positive numbers
const areAllNumbers = array.every(item => typeof item === 'number' && item > 0);
//Throws an error if each item of the array is not a positive number
  if(!areAllNumbers){
    return para.textContent = 'Each item has to be a positive number!'
  }


//designates the first item of the array to temporarily hold the value of the largest number so that each element in the array can be checked against this number 
let largestNo = array[0];

//loop that processes the array to find the largest number
    for(let i = 0; i < array.length; i++){
        //checks the current value against the current largest number
        if(array[i] > largestNo){
            //if the current value is larger, its value is assigned to largestNo
            largestNo = array[i]
        }
    }
    //populates the largest number into the paragraph
     return para.textContent = largestNo;
}

findLargestNumber(numbers)