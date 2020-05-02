// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true



let arr = [12, 4, 50, 1, 0, 18, 40];
arr.forEach(function (item) {
    if (item == 0) {
        console.log(true); //true 

    }
});






let arr2 = ['yes', 'hello', 'no', 'easycode', 'what'];
arr2.forEach(function (entry) {
    if (entry.length > 3)
        console.log(true); // true true true 
});