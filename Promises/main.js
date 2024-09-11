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
        console.log(data)
    })
    .catch(error => {
        console.log('there was a problem with the fetch operation:', error)
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
        console.log(data)
    })
    .catch(error => {
        console.log('there was an error', error)
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
        console.log(data)
    })
    .catch(error => {
        console.log('there was an error:', error)
    })
}

renderItAgain()

//refactor to async await
async function renderTheImages(){
  
}


console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 100);

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');

//Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2
