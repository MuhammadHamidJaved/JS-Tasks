// Write a function to check if a string is a palindrome

function isPalindrome(str) {
    const reversed = str.split('').reduce((reversed, char) => char + reversed, '');
    return str === reversed;
}

console.log("Result for this string is " + isPalindrome("madam"));
console.log("Result for this string is " + isPalindrome("Ali"));