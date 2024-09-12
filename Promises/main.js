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

console.log('X');

setTimeout(() => {
  console.log('Y');
}, 0);

Promise.resolve().then(() => {
  console.log('A');
  setTimeout(() => {
    console.log('B');
  }, 0);
}).then(() => {
  console.log('C');
});

console.log('Z');

setTimeout(() => {
  console.log('D');
}, 0);

Promise.resolve().then(() => {
  console.log('E');
});

// X, Z, A, E, C, Y, D, B

// setTimeout(() => console.log('Outside Timeout'), 0);

// Promise.resolve().then(() => {
//   setTimeout(() => console.log('Inside Promise Timeout'), 0);
// });

// console.log('Synchronous Log');
