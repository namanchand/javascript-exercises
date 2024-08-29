const convertToCelsius = function (F) {
  let tempCelsius = Math.round((F - 32) * (5 / 9) * 10) / 10;
  return Number(tempCelsius);
};
const convertToFahrenheit = function (C) {
  let tempFahrenheit = Math.round(((9 / 5) * C + 32) * 10) / 10;
  return Number(tempFahrenheit);
};
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
