'use strict';

document.onmousemove = function (ev) {
  let height = document.body.clientHeight / 2,
      width = document.body.clientWidth / 2,
      x = ev.x - width, // половина ширины глаза
      y = ev.y - height; // половина высоты глаза

  // 57.2958 - перевод в градусы (deg)
  document.querySelector('.eyes').style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + '45deg)';
  // 116 - толщина глаза + границы
  document.querySelector('.eyes-2').style.transform = 'rotate(' + 57.2958 * arcctg(x - 116, y) + '45deg)';

  function arcctg(x, y) {
    if (x > 0 && y > 0) {
      return Math.PI / 2 - Math.atan(x / y);
    }

    if (x < 0 && y > 0) {
      return Math.PI / 2 - Math.atan(x / y);
    }

    if (x < 0 && y < 0) {
      return Math.PI + Math.atan(y / x);
    }
      
    if (x > 0 && y < 0) {
      return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
  }
};