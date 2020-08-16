let start = false,
  t1,
  t2;
const engine = new Audio('./audio/engine.mp3');
const audio = new Audio('./audio/car.mp3');
engine.loop = true;
engine.volume = 0.3;

document.querySelector('.start').addEventListener('click', function () {
  if (start === false) {
    start = true;
    this.innerHTML = 'stop';
    engine.play();
    // событие на педаль
    document.querySelector('.treadle').addEventListener('click', pushTreadle);
    document.querySelector('.progress-line').style.width = '100px';
  } else {
    // глушим двигатель
    start = false;
    this.innerHTML = 'start';
    engine.pause();
    // событие на педаль
    document.querySelector('.treadle').removeEventListener('click', pushTreadle);
    document.querySelector('.progress-line').style.width = '0';
    document.querySelector('.treadle').classList.remove('treadle-push');
    document.querySelector('.progress-line').style.backgroundColor = 'green';
    t1 = clearTimeout(t1);
    t2 = clearTimeout(t2);
    audio.pause();
    audio.currentTime = 0;
  }
});

// газ
function pushTreadle() {
  t1 = clearTimeout(t1);
  t2 = clearTimeout(t2);
  this.classList.add('treadle-push');
  document.querySelector('.progress-line').style.width = '300px';
  document.querySelector('.progress-line').style.backgroundColor = 'red';
  audio.play();
  stopTreadle();
}

// отпускаем газ
function stopTreadle() {

  t1 = setTimeout(() => {
    document.querySelector('.treadle').classList.remove('treadle-push');
    document.querySelector('.progress-line').style.width = '100px';
    document.querySelector('.progress-line').style.backgroundColor = 'green';
  }, 1000);

  t2 = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 2000);
}
