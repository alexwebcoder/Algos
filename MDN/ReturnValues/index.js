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

const numbers = [44, 33, 55, 77, 100, 22, 5];

function findLargestNumber(array) {

 const para = document.createElement('p');
 para.classList.add('largest-number');
 document.body.appendChild(para);

 if(array.length === 0){
     console.log('empty')
     return para.textContent = 'The array cannot be empty'
    }

    
    let largestNo = array[0];

    for(let i = 0; i < array.length; i++){
        if(!Array.isArray(array)){
            return para.textContent = 'You must input an array!'
        }
        if(typeof array[i] !== 'number'){
           return para.textContent = 'Each item has to be a number!'
        }
        if(array[i] > largestNo){
            largestNo = array[i]
        }
    }
     return para.textContent = largestNo;
}

findLargestNumber(numbers)