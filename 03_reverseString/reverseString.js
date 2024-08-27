const reverseString = function (word) {
  let reverseString = "";
  for (let i = 0; i < word.length; i++) {
    reverseString += word[word.length - i - 1];
  }
  console.log(reverseString);
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
