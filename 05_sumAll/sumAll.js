const sumAll = function (num1, num2) {
  let output = 0;
  if (
    Number.isInteger(num1) &&
    num1 > 0 &&
    Number.isInteger(num2) &&
    num2 > 0
  ) {
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        output += i;
      }
    } else if (num1 > num2) {
      for (let i = num2; i <= num1; i++) {
        output += i;
      }
    }
  } else {
    output = "ERROR";
  }
  console.log(output);
  return output;
};

// Do not edit below this line
module.exports = sumAll;
