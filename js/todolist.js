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
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos()
}

function appendList(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
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
    const newTodo = {
        text: todo,
        id: Date.now(),
    }
    toDos.push(newTodo);
    appendList(newTodo);
    saveToDos();
}
todoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(appendList);
}