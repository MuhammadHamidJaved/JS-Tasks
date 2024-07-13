// Write a function to check if a number is even or odd.

function isEvenOrOdd(num) {
    if(num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}     

console.log(isEvenOrOdd(5));