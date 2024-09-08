const palindromes = function (string) {
    const normalString = string.toLowerCase().split(/[, .!]/).join("")

    const newStringReverse = normalString.split("").reverse().join("")

    return normalString === newStringReverse
};

// Do not edit below this line
module.exports = palindromes;
