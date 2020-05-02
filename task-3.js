// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

let arr = [{
        char: "a",
        index: 12
    }, {
        char: "w",
        index: 8
    }, {
        char: "Y",
        index: 10
    }, {
        char: "p",
        index: 3
    }, {
        char: "p",
        index: 2
    },
    {
        char: "N",
        index: 6
    }, {
        char: " ",
        index: 5
    }, {
        char: "y",
        index: 4
    }, {
        char: "r",
        index: 13
    }, {
        char: "H",
        index: 0
    },
    {
        char: "e",
        index: 11
    }, {
        char: "a",
        index: 1
    }, {
        char: " ",
        index: 9
    }, {
        char: "!",
        index: 14
    }, {
        char: "e",
        index: 7
    }


];



arr.sort(function (a, b) {
    return a.index - b.index
})
const newArr = arr.map(names => {
    return names.char.toString()

})



console.log(newArr.toString());