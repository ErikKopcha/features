// создание списка имён
class renderUsers {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    let users = [
      {
        name: 'Alex',
      },
      {
        name: 'Ivan',
      },
      {
        name: 'Petya',
      },
      {
        name: 'Erik',
      },
      {
        name: 'Vasya',
      },
      {
        name: 'Alexis',
      },
      {
        name: 'Oddi',
      },
      {
        name: 'Igor',
      },
      {
        name: 'Constantin',
      },
      {
        name: 'Kire',
      },
      {
        name: 'Kolya',
      },
      {
        name: 'Alexandr',
      },
      {
        name: 'Tetyana',
      }
    ];

    // для сортировки по алфавиту
    let sortUsers = [];

    users.forEach(el => {
      sortUsers.push(el.name);
    });

    sortUsers.sort();
    sortUsers.forEach(name => {
      let li = document.createElement('li'),
      p = document.createElement('p');

      p.innerHTML = `
        ${name}
      `;

      li.classList.add('search__user');
      li.appendChild(p);

      this.container.appendChild(li);
    });
  }
}

// поиск
class Search {
  constructor(inputId, items) {
    this.searchInput = document.getElementById(inputId);
    this.items = document.querySelectorAll(items);
    this.init();
  }

  init() {
    this.search();
  }

  search() {
    // event на поле поиска
    this.searchInput.addEventListener('keyup', () => {
      // получаем информацию с поиска и убираем пробелы
      let value = this.searchInput.value.toLowerCase().trim();

      if (value != '') {
        this.items.forEach(el => {
          // получаем только текст, без тегов.
          // search - ищет подстроку в строке и возвращает номер подстроки / -1 (если нет)
          if (el.innerText.toLowerCase().search(value) == -1) {
            this.hideElement(el);
          } else {
            this.showElement(el);
          }
        });
      } else {
        this.items.forEach(el => {
          this.showElement(el);
        });
      }
    });
  }

  showElement(el) {
    el.style.display = 'block';

    setTimeout(() => {
      el.style.transform = 'translateX(0)';
    }, 200);
  }

  hideElement(el) {
    el.style.transform = 'translateX(-1000px)';

    setTimeout(() => {
      el.style.display = 'none';
    }, 200);
  }
}
