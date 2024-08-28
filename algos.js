function diff(arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2)
  return  [
       ...arr1.filter(item => !set2.has(item)),
       ...arr2.filter(item => !set1.has(item))
    ]
}

console.log(diff([1, 2, 3, 4, 5, 6, 22],[1, 2, 3, 4, 5, 7, 9]))

function diffBetweenArrays(arr1, arr2) {  
    // create an empty array, this will includes all diff between two arrays
    const diffNums = [];
    // iterate through arr1 and if each element is not in arr2 by using .includes we push to empty array to be returned later
    arr1.forEach((num) => {
      if (!arr2.includes(num)) {
        diffNums.push(num);
      }
    })
    // itterate through arr2 and proceed to do the same as above
    arr2.forEach((num) => {
      if (!arr1.includes(num)) {
        diffNums.push(num);
      }
    })
    // return diff array
    return diffNums;
  }

  console.log(diffBetweenArrays([1, 2, 3, 4, 5, 6, 22],[1, 2, 3, 4, 5, 7, 9]))

//   Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.


// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maxSubArray (nums) {
    // create a sum varaible
      let maxSum = 0; // 
      // iterate through each element in the array, iterate through each element again (nested)
      for (let i = 0; i < nums.length; i++) {
        let totalSum = nums[i]; // 
        // add the sum of the second for loop with the current outter for loop element to find maxSum
        for (let j = i + 1; j < nums.length; j++) {
          totalSum += nums[j]; 
          if (totalSum > maxSum) {
            maxSum = totalSum;
          }
        }
      }  
      // return sum
      return maxSum;
    }
    
    
    console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

    const timeIntervals = [[0, 30], [5, 10], [15, 20], [16, 30], [0, 30]]

function howManyRooms(arr){
   if(arr.length === 0) return 0

   const starts = arr.map(item => item[0]);
   const ends = arr.map(item => item[1])

   starts.sort((a, b) => a - b)
   ends.sort((a, b) => a - b)
   console.log(starts)
   console.log(ends)

   let rooms = 0;
   let endPointer = 0;
   
   for(let i = 0; i < starts.length; i++) {
     if(starts[i] >= ends[endPointer]){
       endPointer++
     }else{
      rooms++
     }
   }
   return rooms
}

console.log(howManyRooms(timeIntervals))

// sum of two arrays
function sumOfTwo(arr1, arr2) {
    const twoArrays = [...arr1, ...arr2]
    return twoArrays.reduce((acc, number) => acc + number)
}

console.log(sumOfTwo([1, 3, 4, 5, 6], [7, 8, 9, 10, 11]))

const matrix = [
    [1, 2, 3],
    [4,[ 5, 6]],
    [7, 8, 9],
    [10, 11, 12],
    
];

const flattend = matrix.flat(2);
console.log(flattend)

const flats = [].concat(...matrix)
console.log(flats)

console.log(matrix[1][1])

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[j])
    }
}
const allValues = [...matrix[0].concat(matrix[1], matrix[2], matrix[3])];
console.log(allValues)

const nestedArray = [1, [2, [3, [4, [5]]]], 6];

const deepValues = nestedArray.flat(Infinity);
console.log(deepValues); // [1, 2, 3, 4, 5, 6]

const myArray = [[[[['My value']]]]];
const unwrappedValue = myArray.flat(Infinity)[0];
console.log(unwrappedValue); // "My value"