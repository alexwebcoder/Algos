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

// Promise.resolve().then(()=> console.log('immediately resolved promise'))





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

// getUserData()


function translatePigLatin(str){
    if(str[0] === 'a' || str[0] === 'e'|| str[0] ==='i'|| str[0] ==='o'|| str[0] ==='u') {
        return `${str}way`
    }
    else{
        let firstLetter = str[0];
        return str.split('').slice(1).join('') + firstLetter+'ay'
    }
    
}

// console.log(translatePigLatin('california'))

//making api calls in a form with promises


// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// }).then(() => {
//   console.log('Promise 2');
// });

// console.log('Middle');

// setTimeout(() => {
//   console.log('Timeout 3');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
// });

// console.log('End');

//Start, Middle, End, Promise 1, Promise 3, Promise 2, Timeout 1, Timeout 3, Timeout 2

// console.log('Step 1');

// setTimeout(() => {
//   console.log('Timeout A');
// }, 500);

// Promise.resolve().then(() => {
//   console.log('Promise X');
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise Y');
// });

// setTimeout(() => {
//   console.log('Timeout B');
// }, 0);

// console.log('Step 2');

// Promise.resolve().then(() => {
//   console.log('Promise Z');
// });

// console.log('Step 3');
//Step 1, Step 2, Step 3, Promise X, Promise Z, Promise Y, Timeout B, Timeout A



function getThePics(){
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => {
        console.log(response)
        if(!response.ok){
             throw new Error('Response not ok')
        } return response.json()
       })
       .then(data => {
           const emails = data.map(item => item.email);
           console.log(emails)
           return data
       })
       .catch(error => {
        console.log('Here is the error:', error)
        throw error
       })
}

// getThePics()

// console.log('First');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 2');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// });

// console.log('Second');

// setTimeout(() => {
//   console.log('Timeout 3');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
// });

// console.log('Third');
//First, Second, Third, Promise 1, Promise 3, Promise 2, Timeout 1, Timeout 3, Timeout 2

// console.log('A');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout 2');
// }, 50);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
// });

// setTimeout(() => {
//   console.log('Timeout 3');
// }, 0);

// console.log('B');

//A, B, Promise 1, Promise 3, Promise 2, Timeout 1, Timeout 3, Timeout 2

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 10);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// }).then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout 3');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
// });

// console.log('End');

// Start, End, Promise 1, Promise 3, Promise 2, Timeout 3, Timeout 2, Timeout 1

// function removeAndSubarray(arr, start, count) {
//  let newArray = arr.splice(start, count).slice(0);
//  return newArray
// }

// const arr = [10, 20, 30, 40, 50, 60, 70];

// console.log(removeAndSubarray(arr, 2, 3))
// console.log(arr)

// function spliceAndSlice(arr, start, count, start2, end2) {
//   let slicedArray = arr.splice(start, count).slice(start2, end2);
//   return slicedArray;
// }

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log(spliceAndSlice(arr, 2, 4, 1, 3))

// function getPics(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             if(!response.ok){
//                 throw new Error;
//             } else{
//                return response.json()
//             }
//         })
//         .then((data)=>{
//             console.log(data)
//             return data
//         })
//         .catch(error => {
//             throw error;
//         })
// }

// getPics()

// Promise.resolve(15).then(value => console.log(`${value}`))

// const obj = { aa: 1, bb: 2 };
// const { aa, bb } = obj;
// console.log(aa)

// const dogs = ['spaniel', 'lab', 'poodle', 'german shephard', 'greyhound'];

// [dogs[2], dogs[4]] = [dogs[4], dogs[2]]

// console.log(dogs)











// const fruit = ['lemon', 'orange', 'apple', 'pineapple', 'grapes', 'tangerine'];

// [fruit[0],fruit[5]] = [fruit[5], fruit[0]]
// console.log(fruit)

// const names = ['Alex', 'Chris', 'Taylor'];
// const roles = ['Developer', 'Designer', 'Manager'];

// const combined = names.map((ele, index) => [ele, roles[index]])

// console.log(combined); // Output: [['Alex', 'Developer'], ['Chris', 'Designer'], ['Taylor', 'Manager']]


// function first() {
//     console.log("First");
//   }
  
//   function second() {
//     setTimeout(() => console.log("Second"), 0);
//   }
  
//   function third() {
//     return new Promise((resolve) => {
//       console.log("Third");
//       resolve("Third Promise Resolved");
//     });
//   }
  
//   function fourth() {
//     console.log("Fourth");
//   }
  
//   function fifth() {
//     setTimeout(() => console.log("Fifth"), 100);
//   }
  
//   function sixth() {
//     console.log("Sixth");
//   }
  
//   async function execute() {
//     first();
//     second();
//     await third().then(console.log);
//     fourth();
//     fifth();
//     sixth();
//   }
  
//   execute();
  // First, Fourth, Sixth, Third, Third Promise Resolved, Second, Fifth


  function alpha() {
    console.log("Alpha");
  }
  
  function beta() {
    setTimeout(() => console.log("Beta"), 50);
  }
  
  function gamma() {
    console.log("Gamma");
    return Promise.resolve("Gamma Promise Resolved");
  }
  
  function delta() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Delta");
        resolve("Delta Promise Resolved");
      }, 0);
    });
  }
  
  function epsilon() {
    console.log("Epsilon");
  }
  
  async function executeFlow() {
    alpha();
    await gamma();
    epsilon();
    await delta();
    beta();
  }
  
  // executeFlow();
  // Alpha, Gamma, Epsilon, Delta, Beta
  // https://jsonplaceholder.typicode.com/users


  function fetchUserInfo(){
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => {
          if(!response.ok){
            throw new Error ('Response was not ok')
          } return response.json()
         })
         .then(data => {
          const nameAddress = data.map(({name, address}) => ({name, address}))
          console.log(nameAddress);
          return data;
         })
         .catch(error => {
          console.log('There was an error:', error)
          throw error;
         })
  }

  fetchUserInfo()