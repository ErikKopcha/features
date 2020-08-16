class Content {
  constructor(baseContainerId) {
    this.mainContent = baseContainerId;
    this.init();
  }

  init() {
    //  this.topArray();
    //  this.bestJsCode();
    //  this.topObject();
  }

  // Топ-12 фишек программирования на JavaScript с массивами
  topArray() {
    let cars = ['Honda', 'Toyota', 'Seat', 'Opel', 'VW', 'BMW', 'Audi'];
    let nums = [1,1,1,2,3,1,2,1,1,2,2,3,4,5,5,6,6,6,6,7,8,8,9,8]; // 98
    let nums2 = [1,4,55,6,8,11,22,55,67];
    let arr = [false, 'red', 0, 2, '', null, true, NaN, undefined];

    // просуммировать все значения в массиве
    let sum = nums.reduce((x, y) => x + y);
    console.log(sum); // 98

    // удалить ложное значение из массива - false, 0, '', null, NaN, undefined
    let newArr = arr.filter(Boolean);
    console.log(newArr); // only true ('red', 2, true)

    // конвертировать массив в обьект
    let obj = {...cars};
    console.log(cars); // array
    console.log(obj);  // jbject

    // удалить повторяющиеся елементы в массиве
    let uniNums = [...new Set(nums)];
    let uniNumsTwo = Array.from(new Set(nums));
    console.log(uniNums); // 1, 2, 3, 4, 5, 6, 7, 8, 9
    console.log(uniNumsTwo); // 1, 2, 3, 4, 5, 6, 7, 8, 9

    // замена конкретного значения в массиве
    cars.splice(0, 2, 'Nissan', 'Tesla');
    console.log(cars); // ["Nissan", "Tesla", "Seat", "Opel", "VW", "BMW", "Audi"]

    // перебор массива
    let newCars = [
      {car: 'Honda', color: 'Red'},
      {car: 'Nissan', color: 'Yellow'},
      {car: 'Tesla', color: 'Green'},
      {car: 'BMW', color: 'Blue'}
    ];

    // выводим название машины
    let carName = Array.from(newCars, ({car}) => car);
    console.log(carName); // ["Honda", "Nissan", "Tesla", "BMW"]

    // найти пересичение двух массивов
    let newNums = [...new Set(nums)].filter(item => nums2.includes(item));
    console.log(newNums);

    // последний индекс единицы из единиц
    let lastIndex = nums.lastIndexOf(1);
    console.log(lastIndex);

    // получить случайные елемент массива
    let randomNum = nums2[(Math.floor(Math.random() * (nums2.length)))];
    console.log(randomNum);

    // заполняем данные в новом массиве
    let addArr = new Array(10).fill(1);
    console.log(addArr);

    // как перевернуть массив
    let reverseArr = nums.reverse();
    console.log(reverseArr);

    // очищение массива
    nums = [];
    nums.splice(0, nums.length);
  }

  // Топ-10 фишек программирование на JavaScript ОБЪЕКТЫ
  topObject() {
    // создание обьекта
    let person = Object.assign({
      name: 'Erik',
      id: 23,
      sname: 'Kopcha'
    });

    Object.assign(person, {
      name: 'kirE'
    });

    let newPerson = {
      ...person,
      address: 'USA'
    };

    // obj в массив + перебор
    let prsn = {
      name: 'Erik',
      sname: 'Kopcha',
      age: 23
    };

    const entries = Object.entries(prsn);

    for (const [key, val] of entries) {
      console.log(`${key} : ${val}`);
    }

    console.log(person);
    console.log(newPerson);
    console.log(Object.entries(person));
  }

  // 8 способов улучшить свой JavaScript код 
  bestJsCode() {
    // шаблонные строки
    let name = 'Erik';
    let hello = `Hello, ${name}!`;
    console.log(hello);

    // тернарный оператор
    let num = 11;
    // if (num > 10) {
    //   msg = 'Logged in';
    // } else {
    //   msg = 'Error';
    // }
    let msg = num > 10 ? 'Logged in' : 'Error';
    console.log(msg);

    // стрелочные ф-ции
    // let sum = function (a, b) {
    //   return a + b;
    // };
    let sum = (a, b) => a + b;
    console.log(sum(4,5));

    // спред оператор
    // конкатинация массивов
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    //arr1 = arr1.concat(arr2);
    arr1 = [...arr1, ...arr2];
    console.log(arr1);

    // ф-ция для реверса строки
    let srtReverce = str => str.split('').reverse().join('');
    console.log(srtReverce('Erik'));
  }
}
