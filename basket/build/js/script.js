'use scrict';

let cart = {
  'sisls23': {
    'name': 'lol',
    'count': 3
  },
  'pqwe28': {
    'name': 'lololo',
    'count': 2
  }
};

let mainInner = document.querySelector('.main__inner');
mainInner.addEventListener('click', ev => {
  if (ev.target.classList.contains('plus')) {
    // берем значение data-id, чтобы получить товар
    plusFunction(ev.target.dataset.id);
  }

  if (ev.target.classList.contains('minus')) {
    minusFunction(ev.target.dataset.id);
  }
});

// уведичение количества товара
const plusFunction = id => {
  cart[id]['count']++;
  renderCart();
};

// уменьшение количества товара
const minusFunction = id => {
  if (cart[id]['count']-1 == 0) {
    deleteFunction(id);
    return true;
  }
  cart[id]['count']--;
  renderCart();
};

// удаление товара
const deleteFunction = id => {
  delete cart[id];
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};

renderCart();
