const findTheOldest = function (array) {
    console.log(Array.isArray(array));
    console.log(array);

    array.sort((a, b) => ((a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)))
    console.log(array);
    console.log(array[array.length - 1]);
    return array[array.length - 1]
};

// console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
