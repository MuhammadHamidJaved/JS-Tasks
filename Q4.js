// Write a function to reverse a string?

function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

console.log(reverseString("Ali"));
console.log(reverseString("Usman"));
