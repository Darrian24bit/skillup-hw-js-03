//На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:

//[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

let arr = [1, 2, 3, 5, 8, 9, 10];
let newArr = [];



newArr = arr.map(function (item) {
    let odd = item % 2 ? true : false;
    return {
        item,
        odd,
    };
});
console.log(newArr); //  [
//    { item: 1, odd: true },
//    { item: 2, odd: false },
//    { item: 3, odd: true },
//    { item: 5, odd: true },
//    { item: 8, odd: false },
//    { item: 9, odd: true },
//    { item: 10, odd: false }
// ]