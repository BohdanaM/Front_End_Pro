const form = document.querySelector(".js--form");
const formInput = document.querySelector(".js--form__input");
const tasksWrapper = document.querySelector(".js--todos-wrapper");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(task, index) {
  const createItem = document.createElement("li");
  createItem.className = `todo-item ${
    task.completed ? "todo-item--checked" : ""
  }`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveToLocalStorage();
    showTasks();
  });

  const description = document.createElement("span");
  description.className = "todo-item__description";
  description.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "todo-item__delete";
  deleteBtn.textContent = "Видалити";
  deleteBtn.addEventListener("click", () => {
    tasks.splice(index, 1);
    saveToLocalStorage();
    showTasks();
  });

  createItem.appendChild(checkbox);
  createItem.appendChild(description);
  createItem.appendChild(deleteBtn);

  return createItem;
}

function showTasks() {
  tasksWrapper.innerHTML = "";
  tasks.forEach((task, index) => {
    const createElement = createTask(task, index);
    tasksWrapper.appendChild(createElement);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = formInput.value;
  if (taskText === "") return;

  const newTask = {
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveToLocalStorage();
  showTasks();
  formInput.value = "";
});

showTasks();
