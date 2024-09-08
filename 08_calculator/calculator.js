const add = function (a, b) {
  return a + b
};

const subtract = function (b, a) {
  return b - a
};

const sum = function (a) {
  return a.reduce((total, current) => total + current, 0)
};

const multiply = function (a) {
  return a.reduce((total, current) => total * current, 1);

};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  let sum = a

  if (a) {
    for (let i = 1; i < a; i++) {
      sum = sum * (a - i)
    }
  } else sum = 1;
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
