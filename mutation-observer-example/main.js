const todos = [
    {
      id: "1",
      text: "Learn HTML"
    },
    {
      id: "2",
      text: "Learn CSS"
    },
    {
      id: "3",
      text: "Learn JavaScript"
    },
    {
      id: "4",
      text: "Stay alive"
    }
  ];
  
  const Item = (todo) => `
  <li class="item" id="${todo.id}">
    <span class="text"}">
      ${todo.text}
    </span>
    <button class="btn danger" ata-type="delete">Delete</button>
  </li>
  `;
  
  const Template = `
  <form id="form" class="form">
      <input type="text" class="input" id="input">
      <button class="btn" data-type="add">Add</button>
  </form>
  <ul id="list" class="list">
      ${todos.reduce((html, todo) => (html += `${Item(todo)}`), "")}
    </ul>
  `;
  
  (() => {
    box.innerHTML = `
      <h1 id="counter" class="counter">
        ${todos.length} todo(s) left
      </h1>
      ${Template}
    `;
  
    input.focus();
  
    const observer = new MutationObserver(() => {
      const count = todos.length;
  
      counter.textContent = `
        ${count > 0 ? `${count} todo(s) left` : "There are no todos"}
      `;
    });
  
    observer.observe(list, {
      childList: true
    });
  
    const addTodo = () => {
      if (!input.value.trim()) return;
  
      const todo = {
        id: Date.now().toString().slice(-4),
        text: input.value
      };
  
      list.insertAdjacentHTML("beforeend", Item(todo));
  
      todos.push(todo);
  
      input.value = "";
      input.focus();
    };
  
    const deleteTodo = (item) => {
      const index = todos.findIndex((todo) => todo.id === item.id);
      
      item.remove();
  
      todos.splice(index, 1);
    };
  
    form.onsubmit = (e) => e.preventDefault();
  
    box.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
  
      const { type } = e.target.dataset;
      const item = e.target.parentElement;
  
      switch (type) {
        case "add":
          addTodo();
          break;
        default:
          deleteTodo(item);
          break;
      }
    });
  })();
  