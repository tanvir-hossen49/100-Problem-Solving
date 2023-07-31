const palindrome = str => {
  str = str.replace(/[" "]/g, "").toLowerCase();

  const strArray = [];
  let reversedArray = "";

  for (let char of str) {
    strArray.push(char);
  }

  for (let i = strArray.length - 1; i >= 0; i--) {
    reversedArray += strArray[i];
  }

  return reversedArray === str;
};
console.log(palindrome("Do geese see God")); //true

const palindrome2 = str => {
  str = str.replace(/[" "]/g, "").toLowerCase();
  return str.split("").reverse().join("") === str;
};
console.log(palindrome2("Do geese see God")); //true

const palindrome3 = str => {
  str = str.replace(/[" "]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
};
console.log(palindrome3("Do geese see God")); //true
