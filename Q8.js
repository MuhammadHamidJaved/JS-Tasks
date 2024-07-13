// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.

function sumOfEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        if(num % 2 === 0) {
            return sum += num;
        }
        else {
          return sum += 0;
        }
    },0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sumOfEvenNumbers(numbers)); 