const apiUrl = "http://localhost:5005/api/todos";

const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

async function loadTodos() {
  todoList.innerHTML = "";
  try {
    const response = await fetch(apiUrl);
    const todos = await response.json();

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${todo.title}
        <button onclick="deleteTodo('${todo._id}')">Delete</button>
      `;
      todoList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

addTodoBtn.addEventListener("click", async () => {
  const title = todoInput.value.trim();

  if (title) {
    try {
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      todoInput.value = "";
      loadTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }
});

async function deleteTodo(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    loadTodos();
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

loadTodos();
