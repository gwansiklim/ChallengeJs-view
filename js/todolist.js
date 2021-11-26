const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS = "todos";

function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function appendList(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todo;
    const button = document.createElement("button");
    button.innerText = "✖︎";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function toDoSubmit(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    toDos.push(todo);
    appendList(todo);
    saveToDos();
}
todoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(appendList);
}