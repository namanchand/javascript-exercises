const fibonacci = function (index) {
    let num = parseInt(index)
    let array = [0, 1];
    let result;

    if (num === 0) {
        return result = array[0]
    } else if (num < 0) {
        return result = "OOPS"
    } else if (num > 0) {
        for (let i = 0; i < num; i++) {
            result = (array[array.length - 1] + array[array.length - 2])
            array.push(result)
        } return array[num]
    }
    console.log(result);
};

// Do not edit below this line
module.exports = fibonacci;
