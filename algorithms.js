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