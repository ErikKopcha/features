document.querySelectorAll('.select__item').forEach(el => {
  el.addEventListener('click', () => {
    select(el);
  });
});

function select(element) {
  var value = element.getAttribute("data-value"); // Считываем значение выбранного элемента
  var nodes = element.parentNode.childNodes; // Получаем все остальные элементы
  for (var i = 0; i < nodes.length; i++) {
    /* Отфильтровываем посторонние элементы text и input */
    if (nodes[i] instanceof HTMLParagraphElement) {
      /* Добавляем active у выбранного элемента, стирая данный класс у всех остальных */
      if (value == nodes[i].getAttribute("data-value")) nodes[i].className = "active";
      else nodes[i].className = "";
    }
  }
  document.getElementById("my_select").value = value; // Устанавливаем в hidden-поле выбранное значение
}