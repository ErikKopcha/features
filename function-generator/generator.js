'use strict';

// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(7);

console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().value); // 4
console.log(counter.next().value); // 5
console.log(counter.next().value); // 6
console.log(counter.next().value); // undefined
console.log(counter.next().value); // undefined