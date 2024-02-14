import printTodos from "./printTodos.js";

let newTodo = document.getElementById("newTodo");
let saveNewTodoBtn = document.getElementById("saveNewTodoBtn");

export default saveNewTodoBtn.addEventListener("click", () => {
    console.log("click");

    let saveTodo = {
        todo: newTodo.value,
        userId: 1
    }

    fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveTodo)
    })
    .then(res => res.json())
    .then(data => {
        console.log("spara todo", data);
        newTodo.value = "";

        printTodos();
    })

})