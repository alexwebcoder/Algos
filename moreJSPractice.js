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

  