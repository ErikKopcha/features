class dragAndDrop {
  constructor(containerId, items) {
    this.container = document.getElementById(containerId);
    this.items = document.querySelectorAll(items);

    this.init();
  }

  init() {
    // В первую очередь присвоим элементам упомянутый ранее атрибут draggable со значением true, чтобы разрешить
    // задачам перемещаться. Это можно сделать прямо в разметке или с помощью JS.
    // Перебираем все элементы списка и присваиваем нужное значение для перетаскивания
    for (const task of this.items) {
      task.draggable = true;
    }

    // Будем отслеживать события dragstart и dragend на всём списке.
    // В начале перетаскивания будем добавлять класс selected элементу списка,
    // на котором было вызвано событие. После окончания перетаскивания будем удалять этот класс.
    this.container.addEventListener('dragstart', (evt) => {
      evt.target.classList.add('selected');
    });

    this.container.addEventListener('dragend', (evt) => {
      evt.target.classList.remove('selected');
    });

    // Реализуем логику перетаскивания
    // Будем отслеживать местоположение перемещаемого элемента относительно других, подписавшись на событие dragover.
    // Благодаря тому, что оно срабатывает очень часто, мы сможем на лету
    // вставлять элемент в нужное место в зависимости от положения курсора.
    // Для этого реализуем такую логику:
    // Делаем всю область списка доступной для сброса.
    // Находим выбранный элемент .selected и тот элемент,
    // на котором сработало событие dragover.
    // Проверяем, что событие dragover сработало не на выбранном элементе,
    // потому что иначе перемещать элемент нет смысла — он уже на нужном месте.
    // Также проверяем, что dragover сработало именно на одном из элементов списка.
    // Это важно, потому что курсор может оказаться и на пустом пространстве между элементами,
    // а оно нас не интересует. Находим элемент, перед которым нужно осуществить вставку.
    // Сделаем это, сравнив положение выбранного элемента и текущего, на который наведён курсор.
    // Вставляем выбранный элемент на новое место.
    this.container.addEventListener('dragover', (evt) => {
      // Разрешаем сбрасывать элементы в эту область
      evt.preventDefault();

      // Находим перемещаемый элемент
      const activeElement = this.container.querySelector('.selected');

      // Находим элемент, над которым в данный момент находится курсор
      const currentElement = evt.target;

      // Проверяем, что событие сработало:
      // 1. не на том элементе, который мы перемещаем,
      // 2. именно на элементе списка
      const isMoveable = activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);

      // Если нет, прерываем выполнение функции
      if (!isMoveable) {
        return;
      }

        // evt.clientY — вертикальная координата курсора в момент,
        // когда сработало событие
        const nextElement = getNextElement(evt.clientY, currentElement);

        // Проверяем, нужно ли менять элементы местами
        if (
          nextElement &&
          activeElement === nextElement.previousElementSibling ||
          activeElement === nextElement
        ) {
          // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
          return;
        }

      // Вставляем activeElement перед nextElement
      this.container.insertBefore(activeElement, nextElement);
    });

    const getNextElement = (cursorPosition, currentElement) => {
      // Получаем объект с размерами и координатами
      const currentElementCoord = currentElement.getBoundingClientRect();
      // Находим вертикальную координату центра текущего элемента
      const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

      // Если курсор выше центра элемента, возвращаем текущий элемент
      // В ином случае — следующий DOM-элемент
      const nextElement = (cursorPosition < currentElementCenter) ?
          currentElement :
          currentElement.nextElementSibling;

      return nextElement;
    };
  }
}
