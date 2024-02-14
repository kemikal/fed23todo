import printTodos from "./printTodos.js";

export default function deleteTodo(todoId) {
    console.log("delete todo", todoId);

    fetch("http://localhost:3000/todo/" + todoId, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("raderad", data);
        printTodos();
    })
}