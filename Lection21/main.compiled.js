"use strict";

$(document).ready(function () {
  $(".js--form").on("submit", function (e) {
    e.preventDefault();
    var taskValue = $(".js--form__input").val().trim();
    var newTask = "\n            <li class=\"list-group-item d-flex justify-content-between align-items-center todo-item\">\n              <input type=\"checkbox\" class=\"me-2\" />\n              <span class=\"todo-item__description\">".concat(taskValue, "</span>\n              <button class=\"btn btn-danger btn-sm todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n            </li>");
    $(".js--todos-wrapper").append(newTask);
    $(".js--form__input").val("");
  });
  $(".js--todos-wrapper").on("click", ".todo-item__delete", function () {
    $(this).closest(".todo-item").remove();
  });
  $(".js--todos-wrapper").on("click", ".todo-item__description", function () {
    var taskText = $(this).text();
    $("#taskText").text(taskText);
    $("#taskModal").modal("show");
  });
});
