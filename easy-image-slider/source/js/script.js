'use scrict';

let img = document.querySelectorAll('.image'),
  btn = document.querySelector('.button'),
  // индекс первого элемента - активный
  active = 0;

btn.addEventListener('click', () => {
  // при клике удаляем активный класс
  img[active].classList.remove('active');

  // если длина коллекции заканчивается
  // то обнуляем индекс, иначе ++
  if (active + 1 == img.length) {
    active = 0;
  } else {
    active++;
  }

  img[active].classList.add('active');
});
