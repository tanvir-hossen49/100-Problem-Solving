const count = array => {
  if (array.length === 0) throw new Error("Array is empty");

  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};
console.log(count([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9]));
