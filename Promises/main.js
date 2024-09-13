// console.log('start');
// setTimeout(()=>{console.log('first callback function')}, 5000);
// setTimeout(()=>{console.log('second callback function')}, 0);
// console.log('end');
//start, end, second call function, first callback function,

// console.log('A');

// setTimeout(() => {
//   console.log('B');
// }, 1000);

// console.log('C');

// setTimeout(() => {
//   console.log('D');
// }, 0);

// setTimeout(() => {
//   console.log('E');
// }, 500);

// console.log('F');

// A, C, F, D, E, B


// console.log('start');
// setTimeout(()=>{console.log('from callback')}, 0);
// Promise.resolve().then(()=>{console.log('From promise')})
// console.log('end');


//start, end, 'From promise', 'from callback'

function renderImages() {
    fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(response => {
        if(!response.ok){
          throw new Error('status code not ok')
        }
        return response.json()
    })
    .then(data => {
        // console.log(data)
    })
    .catch(error => {
        // console.log('there was a problem with the fetch operation:', error)
    })
}

renderImages()


function renderTheImage(){
    fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(response => {
        if(!response.ok){
            throw new Error('response was not ok')
        } return response.json()
    })
    .then(data => {
        // console.log(data)
    })
    .catch(error => {
        // console.log('there was an error', error)
    })
}

renderTheImage()


function renderItAgain(){
    fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(response => {
        if(!response.ok){
            throw new Error('request not ok')
        }return response.json()
    })
    .then(data =>{
        // console.log(data)
    })
    .catch(error => {
        // console.log('there was an error:', error)
    })
}

renderItAgain()

//refactor to async await
async function renderTheImages(){
  
}


// console.log('Start');

setTimeout(() => {
//   console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
//   console.log('Promise 1');
});

setTimeout(() => {
//   console.log('Timeout 2');
}, 100);

Promise.resolve().then(() => {
//   console.log('Promise 2');
});

// console.log('End');

//Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2


function displayImagesNow(){
    fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(response => {
        if(!response.ok){
            throw new Error('bad fetch')
        }
        return response.json();
    })
    .then(data => {
        // console.log(data)
    })
    .catch(error => {
        // console.log('there was an error ya see:', error)
    })
}

displayImagesNow()

// console.log('X');

// setTimeout(() => {
//   console.log('Y');
//   Promise.resolve().then(() => {
//     console.log('Z');
//   });
// }, 100);

// Promise.resolve().then(() => {
//   console.log('A');
//   setTimeout(() => {
//     console.log('B');
//   }, 50);
// });

// setTimeout(() => {
//   console.log('C');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D');
// });

// console.log('E');

//X, E, A, D, C, B, Y, Z

// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('3');
//   setTimeout(() => {
//     console.log('4');
//   }, 0);
// });

// Promise.resolve().then(() => {
//   console.log('5');
// });

// console.log('6');

// setTimeout(() => {
//   console.log('7');
// }, 100);

// Promise.resolve().then(() => {
//   setTimeout(() => {
//     console.log('8');
//   }, 50);
// });

// console.log('9');
// 1, 6, 9, 3, 5, 2, 4, 8, 7

// console.log('A');

// const promise1 = new Promise((resolve) => {
//   console.log('B');
//   resolve('C');
// });

// const promise2 = new Promise((resolve) => {
//   console.log('D');
//   setTimeout(() => {
//     resolve('E');
//   }, 0);
// });

// promise1.then((value) => {
//   console.log(value);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('F');
//     }, 0);
//   });
// }).then((value) => {
//   console.log(value);
// });

// promise2.then((value) => {
//   console.log(value);
//   return 'G';
// }).then((value) => {
//   console.log(value);
// });

// console.log('H');

//A, B, D, H, C, E, G, F

// console.log('A');

// Promise.resolve().then(() => {
//   console.log('B');
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('D');
//     }, 0);
//   });
// }).then((value) => {
//   console.log('C');
//   return value;
// });

// console.log('E');

//A, E, B, C, 

// console.log('One')

// setTimeout(()=>{
//     console.log('Two')
// }, 5000)

// Promise.resolve().then(function(){
//     console.log('Three')
// })

// console.log('Four')

// One, Four, Three, Two

// for(var i = 0; i < 3; i++){
//     console.log(i)
//     setTimeout(()=>{
//         console.log(i)
//     }, 1000)
// }

const numbers = [1, 2, 3, 4, 5];

const [a, b, c, ...d] = numbers;
// console.log(d)

const duplicateKey = {a: 'one', b: 'two', a: 'three'}

// console.log(duplicateKey)

const A = {}
const B = {key: 'B'};
const C = {key: 'C'};
//object keys are automatically converted into strings
A[B] = 123
A[C] = 456

// console.log(A[B])

//splice modifies original array
//first arg is the index, second is the delete count
//from first index, remove x amount of items
//third index is what you want to add. you can add as many as you like
let array = [1, 2, 3, 4, 5];
// console.log(array.splice(1, 1))
// console.log(array)

let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// console.log(days.splice(4, 1, 'funday', 'viernes', 'any day of the week'))
// console.log(days)


//slice keeps original array intact
//slice as 2 arguments. starting index and ending index (non inclusive)
let array2 = [1, 2, 3, 4, 5];
// console.log(array2.slice(2,3))
// console.log(array2)

// console.log('X');

// setTimeout(() => {
//   console.log('Y');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('A');
//   setTimeout(() => {
//     console.log('B');
//   }, 0);
// }).then(() => {
//   console.log('C');
// });

// console.log('Z');

// setTimeout(() => {
//   console.log('D');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('E');
// });
// X, Z, A, E, C, Y, D, B

// setTimeout(() => console.log('Outside Timeout'), 0);

// Promise.resolve().then(() => {
//   setTimeout(() => console.log('Inside Promise Timeout'), 0);
// });

// console.log('Synchronous Log');


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// console.log("Middle");

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// console.log("End");


// Start, Middle, End, Promise 1, Promise 2, Timeout 1, Timeout 2

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 10);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
  
//   setTimeout(() => {
//     console.log("Timeout 2");
//   }, 20);
  
//   Promise.resolve().then(() => {
//     console.log("Promise 2");
//   });
// });

// setTimeout(() => {
//   console.log("Timeout 3");
// }, 0);

// console.log("End");


//Start, End, Promise 1, Promise 2, Timeout 3, Timeout 2, Timeout 1

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
// console.log(nested.flat(Infinity))

function flatten(arr){
    const flat = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
          flat.push(...flatten(element))
        }else{
            flat.push(element)
        }
    });
    return flat;
}

// console.log(flatten(nested))

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1"); //1st to macrotask queue
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");

//   setTimeout(() => {
//     console.log("Timeout 2"); //2nd to macrotask queue
//   }, 0);
// });

// (async () => {
//   console.log("Async 1");

//   await Promise.resolve();
  
//   console.log("Async 2");

//   setTimeout(() => {
//     console.log("Timeout 3");
//   }, 0);
// })();

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// console.log("End");

// Start, Async 1, End, Promise 1, Async 2, Promise 2, Timeout 1, Timeout 2, Timeout 3

// console.log('Starting...');

// setTimeout(function() {
//   console.log('Timeout callback');
// }, 0);

// console.log('Ending?');

// var name = "Victor";

// function first() {
//   var a = "Hi!";
//   second();
//   console.log(`${a} ${name}`);
// }

// function second() {
//   var b = "Hey!";
//   third();
//   console.log(`${b} ${name}`);
// }

// function third() {
//   var c = "Hello!";
//   console.log(`${c} ${name}`);
// }

// first();

// Hello Victor, Hey Victor, Hi Victor

// function fetchImages(){
//     fetch('https://dog.ceo/api/breeds/image/random/5')
//       .then(response => {
//         if(!response.ok){
//           throw new Error('response not 200 - 299')
//         }return response.json()
//       })
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.log('This is the error:', error)
//       })
// }

// fetchImages()

Promise.resolve().then(()=> console.log('immediately resolved promise'))





// function fetchUserData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(resolve => {
//         if(!resolve.ok){
//             throw new Error('Did not resolve ok')
//         } return resolve.json();
//       })
//       .then(data => {
//         console.log(data)
//       })
//       .catch(error => {
//         console.log('There was an error', error)
//       })
// }

// fetchUserData()



function getUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        // console.log(response)
        if(!response.ok){
            throw new Error('The response was not ok')
        } return response.json()
    })
    .then(data => {
       const userNames = data.map(user => user.address)
    //    console.log(userNames)
    console.log(data)
        return data
    })
    .catch(error => {
        throw error;
    })
}

getUserData()


function translatePigLatin(str){
    if(str[0] === 'a' || str[0] === 'e'|| str[0] ==='i'|| str[0] ==='o'|| str[0] ==='u') {
        return `${str}way`
    }
    else{
        let firstLetter = str[0];
        return str.split('').slice(1).join('') + firstLetter+'ay'
    }
    
}

console.log(translatePigLatin('california'))

//making api calls in a form with promises