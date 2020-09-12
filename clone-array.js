let a = [1, 3, 4, [5, 7, 3]];
let b = JSON.parse(JSON.stringify(a));

a.push('test');
a[3].push(999);

console.log(a);
console.log(b);