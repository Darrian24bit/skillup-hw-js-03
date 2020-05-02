// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. 
// Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


let arr = [{
    char: "H",
    index: 0
}, {
    char: "i",
    index: 1
}, {
    char: "!",
    index: 2
}];


const newArr = arr.map(names => {
    return names.char

})



console.log(newArr.toString());