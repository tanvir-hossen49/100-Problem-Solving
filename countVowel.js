//Write a code on how to calculate the number of vowels and consonants in a string?

const countVowelsAndConsonants = str => {
  str = str.toLowerCase().trim();

  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwsyz";

  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (consonants.includes(char)) {
      consonantCount++;
    }
  }

  return {
    vowelCount,
    consonantCount,
  };
};

const count = countVowelsAndConsonants("hello my name is golam aziz tanvir");
console.log(count);
