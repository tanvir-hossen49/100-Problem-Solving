function calculateTotalTime(customers, n) {
  const checkoutTills = new Array(n).fill(0);

  for (const customerTime of customers) {
    const earliestTillIndex = checkoutTills.indexOf(Math.min(...checkoutTills));
    checkoutTills[earliestTillIndex] += customerTime;
    console.log(earliestTillIndex, checkoutTills);
  }

  //for of loop
  // [0, 0]
  // 0 = 0 + 3 = 3
  // 1 = 0 + 2 = 2
  // 1 = 2 + 5 = 7
  // 0 = 3 + 4 = 7
  // 0 = 7 + 1 = 8

  return Math.max(...checkoutTills);
}

const queue = [3, 2, 5, 4, 1];
const numberOfTills = 2;
const totalTime = calculateTotalTime(queue, numberOfTills);
console.log(totalTime);
