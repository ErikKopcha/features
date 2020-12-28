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

// index of, поиск значений в массиве
const a = [0,9,5,3,5];
a.indexOf(4); // -1
a.indexOf(5); // 2
if (a.indexOf(5) !== -1) { 
    // yes 
} else { 
    // no 
}

const b = ['Hi', 'hello'];
b.indexOf('Hi'); // 0
b.indexOf('Hello'); // -1

// includes
const incl = [1,2,3,4];
incl.includes(5); // false
incl.includes(2); // true

// push
let psh = [1,3,2];
psh.push(12); //  [1,3,2,12]

// pop
let pp = [1,3,2,4,2];
pp.pop(); // [1,3,2,4,2] 

// shift
let sft = [13,2,3];
let sftB = a.shift(); // 13

// unshift
let unsf = [1,32,11];
let unsfB = unsf.unshift(22); // [22,1,32,11]

// slice
let slc = [1,3,2,5,1,1,1];
let slcB = slc.slice(3); // [5,1,1,1]

// filter
let fltr = [1,3,2,5,61,12,5412,5,12];
let fltrB = fltr.filter(el => { // > 5
    if (el > 5) {
        return true;
    }
});

// concat
let cnc1 = [1,3,4];
let cnc2 = [1,2,3];
let cnct = cnc1.concat(cnc2); // [1,3,4,1,2,3]

// every
eve = [3,2,5,1];
let eveB = eve.every(item => {
    if (item > 3) return true; // false, если все числа > 3
});