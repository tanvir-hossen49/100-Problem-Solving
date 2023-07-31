const romanInt = romanStr => {
  romanStr = romanStr.toUpperCase();

  const romanLetter = "MDCLXVI";
  for (let key of romanStr) {
    if (!romanLetter.includes(key)) {
      return `Error: ${key} is not roman number`;
    }
  }

  const romanObj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let number = 0;
  let nexIndex = 0;

  for (let i = 0; i < romanStr.length; i++) {
    if (nexIndex === romanStr.length) break;

    const currentValue = romanObj[romanStr[nexIndex]];
    const nextValue = romanObj[romanStr[nexIndex + 1]];

    if (currentValue < nextValue) {
      number += nextValue - currentValue;
      nexIndex += 2;
    } else {
      number += romanObj[romanStr[nexIndex]];
      nexIndex++;
    }
  }

  return number;
};
console.log(romanInt("XXI"));
