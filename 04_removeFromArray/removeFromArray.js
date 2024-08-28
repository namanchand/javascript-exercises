const removeFromArray = function (arr1, ...arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let addIt = true;

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        addIt = false;
        break;
      }
    }
    if (addIt) newArr.push(arr1[i]);
  }
  console.log(newArr);
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
