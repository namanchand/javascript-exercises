const repeatString = function (string, number) {
  let result = "";
  if (number < 0) {
    result = `ERROR`;
  } else {
    for (let i = 0; i < number; i++) {
      result = string + result;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
