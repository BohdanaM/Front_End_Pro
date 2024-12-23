$(document).ready(function () {
  $(".js--form").on("submit", function (e) {
    e.preventDefault();
    const taskValue = $(".js--form__input").val().trim();
    const newTask = `
          <li class="list-group-item d-flex justify-content-between align-items-center todo-item">
            <input type="checkbox" class="me-2" />
            <span class="todo-item__description">${taskValue}</span>
            <button class="btn btn-danger btn-sm todo-item__delete">Видалити</button>
          </li>`;
    $(".js--todos-wrapper").append(newTask);
    $(".js--form__input").val("");
  });

  $(".js--todos-wrapper").on("click", ".todo-item__delete", function () {
    $(this).closest(".todo-item").remove();
  });

  $(".js--todos-wrapper").on("click", ".todo-item__description", function () {
    const taskText = $(this).text();
    $("#taskText").text(taskText);
    $("#taskModal").modal("show");
  });
});
