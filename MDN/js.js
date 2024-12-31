function reverseWords(str){
    const reversed = str.split(' ').reverse().join(' ');
    console.log(reversed)
}

reverseWords('Hello world, how are you?')

console.log(Math.floor(Math.random() * 100))

function convertSentence(str) {
    let newStr = str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
    return newStr;
}

console.log(convertSentence('Hello world from JavaScript'))
//olleH dlrow morf tpircSavaJ

function abbreviateName(str){
 const abbreviated = str.split(' ');
 const lastName = abbreviated.pop()
 const firstLetter = abbreviated[0][0] + `. `
return firstLetter + lastName;
}

console.log(abbreviateName('Mary Ann Louise Smith'))