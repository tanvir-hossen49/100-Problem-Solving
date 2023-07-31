// Write a JavaScript program to find the most frequent element in an array and return it.
const frequentEle = arr => {
  const obj = arr.reduce((accumulator, element) => {
    accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;

    return accumulator;
  }, {});

  let frequentNumber = 1;
  let char = arr[0];

  for (let num in obj) {
    if (obj[num] > frequentNumber) {
      frequentNumber = obj[num];
      char = num;
    }
  }
  return char;
};

const result = frequentEle([3, 5, 2, 2, 2, 2, 5, 3, 3, 4, 5]); //3
console.log(result);
