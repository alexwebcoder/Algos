function fibonacci(n) {

    const fib = [0, 1];  //1
    for(let i = 2; i < n; i++) {
     fib[i] = fib[i - 1] + fib[ i - 2]; //7
    }
    return fib;  //1
 }
 
//  console.log(fibonacci(2));
//  console.log(fibonacci(3));
 console.log(fibonacci(7));


 const calculateFib = num => {
    const arr = [0, 1];
    let a, b;
    for (let i = 2; i < num; i++) {
        a = arr[i - 1]; //2 - 1 = 1
        b = arr[i - 2]; //2 - 2 = 0
        arr.push(a + b); // 1 + 0 = 1, so the third item in the array will be a three.
    }

    return arr;
}

console.log(calculateFib(7));


// Given an array of integers, find the maximum sum of any contiguous subarray of size k

function slidingWindow(arr, k) {
    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
  return maxSum;
  
}


const arrayIntegers = [4, 5, 7, 23, 54, 15, 23, 8, 11];
const k = 3;

console.log(slidingWindow(arrayIntegers, k))


function slidingWindow2(arr, k) {
    let windowSum = 0;
    let maxSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum;

    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum;
}

console.log(slidingWindow2(arrayIntegers, k))



function slidingWindow3(arr, j) {
    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < j; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum;

    for(let i = j; i < arr.length; i++) {
        windowSum = windowSum - arr[i - j] + arr[i];
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum
}

const someNumbers = [4, 5, 17, 8, 33, 14, 20];
const j = 2;

console.log(slidingWindow3(someNumbers, j))
//47


function slidingWindow4(arr, k) {
    let windowSum = 0;
    let maxSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i]
    }

    maxSum = windowSum;

    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum;
}

const numbers = [13, 15, 20, 8, 24, 7, 5]
console.log(slidingWindow4(numbers, k))
//52





function slidingWindow5(arr, k){
    let windowSum = 0;
    let maxSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for(let i = k; i < arr.length; i++){
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum;
}

const numbers1 = [4, 22, 33, 15, 18, 40]

//73

console.log(slidingWindow5(numbers1, k))




function slidingWindow6(arr, k) {
    let windowSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }
    maxSum = windowSum;

    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum;
}

const myArray = [4, 2, 3, 7, 8, 9, 1]
//24

console.log(slidingWindow6(myArray, k))

// Find the smallest subarray with a sum greater than or equal to a given number
// function will take in an array and a number
//the sum of the sub array needs to be equal to or greater than the target number



function smallestSubarry(arr, num) {
  let currentSum = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++){

  }
}

// console.log(smallestSubarry(myArray, 4))