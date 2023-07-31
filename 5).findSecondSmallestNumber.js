const findSecondSmallestNum = arr => {
  // sort the array ascending order

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr[1];
};
console.log(findSecondSmallestNum([2, 5, 1, 3, 5, 9, 4]));
