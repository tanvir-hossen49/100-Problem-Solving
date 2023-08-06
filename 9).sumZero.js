// checking sum zero
// [-5, -4, -3, -2, 0, 2, 4, 6, 7] -> sorted array
// [-4 , 4] = output

function getSumPairZero(arr) {
  for (let number of arr) {
    // o(n^2) quadratic time complexity
    for (let j = number + 1; j < arr.length; j++) {
      if (number + arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
}
console.log(getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 7]));

function getSumPairZero1(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    const leftValue = array[leftIndex],
      rightValue = array[rightIndex];

    if (leftValue + rightValue === 0) {
      return [leftValue, rightValue];
    } else if (leftValue + rightValue > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
}
console.log(getSumPairZero1([-5, -4, -3, -2, 0, 2, 3, 6, 7]));
