class Declension {
  constructor() {
    this.init();
  }

  init() {
    this.declension();
  }

  declension() {
    // number - это число для которого нужно выполнить склонение окончания у существительного
    // txt - массив строк с выриантами склонений: ['вариант1', 'вариант2', 'вариант3'].
    const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    
    let apple = 1;
    let pieces = 3;
    let ruble = 10;

    let a = sklonenie(apple, ['яблоко', 'яблока', 'яблок']); // яблоко
    let b = 'Мне нужно ' + pieces + ' ' + sklonenie(pieces, ['штука', 'штуки', 'штук']); // Мне нужно 3 штуки
    let c = `Мы потратили ${ruble} ${sklonenie(ruble, ['рубль', 'рубля', 'рублей'])}`; // Мы потратили 10 рублей
  }
}