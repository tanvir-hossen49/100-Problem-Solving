// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = str => {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
};
const result = reverseString("hello world");
console.log(result);
