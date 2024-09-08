const getTheTitles = function (array) {
    let titles = []
    array.forEach(function (index) {
        titles.push(index.title)
        console.log(titles);
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
