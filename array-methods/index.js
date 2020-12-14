// max num of array
let maxArray = [1, 3, 5, 1, 6, 8, 3, 2, 34, 67, 68];
let maxNum = maxArray.reduce((prev, item) => {
    if (prev < item) return item
    else return prev
});

console.log('max num => ', maxNum); // 68

// index element of max sum
let indexArr = [1, 3, 6, 11, 23, 13, 53, 12];
let indexEl = indexArr.reduce((prev, item, index) => {
    if (item > prev[1]) return [index, item]
    else return prev
}, [0, indexArr[0]]);

console.log('index max sum => ', indexEl); // [ 6, 53 ]

// sum of all numbers in the array
let sumArray = [1, 2, 3, 42];
let sum = sumArray.reduce((prev, item) => {
    return prev + item;
});

console.log('sum => ', sum); // 48

// one-dimensional array of arrays and sort
const data = [[4,5,6], [1,2,3], [7,8,9]];
let newArray = [];

data.forEach(el => {
    el.forEach(elA => {
        newArray.push(elA);
    })
});

console.log('newArray => ', newArray);
newArray.sort();
console.log('newArray SORT => ', newArray);
newArray.forEach(el => console.log('arrrrTest => ', el))

// one-dimensional array of arrays REDUCE
const dataReduce = [[4,5,6], [1,2,3], [7,8,9]];

const flat = dataReduce.reduce((prev, item) => {
    return prev.concat(item);
});

flat.sort();
console.log(flat);