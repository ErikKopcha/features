'use strict';

// var 1
const palindrom = str => {
  str = str.toLowerCase();
  return str == str.split('').reverse().join('');
};

console.log(palindrom('Abba'));

// var 2
function palindromTwo(str) {
  // нижний регистр
  str = str.toLowerCase();
  // строку в масив
  let str2 = str.split('');
  // развернуть масив
  str2 = str2.reverse();
  // объединяем в строку
  str2 = str2.join('');

  if (str == str2) return true;
  else return false;

  return str2;
}

console.log(palindromTwo('Abba1'));