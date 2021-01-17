function fibonacci(n) {
    const arr = [0,1]; // the inital array, we need something to sum at the very beginning
    for (let i = 2; i <= n; i++) { // we want the last number, so don't forget the '=' sign
      let a = arr[i-1]; // previous Number
      let b = arr[i-2]; // the one before that
      arr.push(a+b); // push the result
    }
    return arr; // if you want the n-th number, just return arr[n] or arr.length - 1
}

const fibArray = fibonacci(10)
console.table(fibArray);

// exponential time complexity
const fibExpon = (n) => {
    if (n <= 2) return 1
    return fibExpon(n - 1) + fibExpon(n -2)
}

// memoization
// js object, keys will be arg to fn, value will the be retrun value
// Dynamic programming
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n -2, memo)
    return memo[n]
}

console.log(fib(5));
console.log(fib(2));
console.log(fib(3));
console.log(fib(55));