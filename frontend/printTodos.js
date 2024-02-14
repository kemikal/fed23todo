import deleteTodo from "./deleteTodo.js";

let todoList = document.getElementById("todoList");

export default function printTodos() {
    fetch("http://localhost:3000/todo")
    .then(res => res.json())
    .then(data => {
        console.log("todos", data);

        todoList.innerHTML = "";

        data.map(todo => {
            let li = document.createElement("li")
            li.innerText = todo.todo;

            li.addEventListener("click", () => {
                deleteTodo(todo.id)
            })

            todoList.appendChild(li);
        })
    })
}