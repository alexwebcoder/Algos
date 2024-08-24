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