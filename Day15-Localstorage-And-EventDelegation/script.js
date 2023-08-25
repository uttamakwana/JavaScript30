// all the variables
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById("add-todo-btn");
const todoContainer = document.getElementById("todo-container");
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const deleteTodoButton = document.querySelector(".delete-todo");

function addTodo(e) {
    if (!todoInput.value) {
        alert("Please enter something!");
        return todoInput.focus();
    }

    const value = todoInput.value;
    todos.push({ value, checked: false });
    localStorage.setItem("todos", JSON.stringify(todos));
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `
        <div class="todo-content">
            <input type="checkbox" />
            <label>${value}</label>
        </div>
        <div class="delete-todo">
            <span>🗑️</span>
        </div>
    `;
    todoContainer.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
    const checkBoxs = document.querySelectorAll("input[type=checkbox]");
    // console.log(checkBoxs);
    // checkBoxs.forEach(box => box.addEventListener("change", (e) => {
    //     console.log(e);
    //     const todoIndex = Array.from(todoContainer.children).indexOf(todo);
    //     console.log(todoIndex);
    //     todos[todoIndex].checked = e.target.checked;
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // }));
    const checkbox = todo.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", function (e) {
        const todoIndex = Array.from(todoContainer.children).indexOf(todo);
        todos[todoIndex].checked = e.target.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    });
    const deleteTodoButton = todo.querySelector(".delete-todo");
    deleteTodoButton.addEventListener("click", function (e) {
        console.log(e);
        const todoIndex = Array.from(todoContainer.children).indexOf(todo);
        console.log(todoIndex);
        todos.splice(todoIndex, 1);
        todo.remove();
        localStorage.setItem("todos", JSON.stringify(todos));
    });
}

function addTodoOnDiffKey(e) {
    if (e.key === "Enter") {
        addTodo();
    }
}
function reloadTodo() {
    todoContainer.innerHTML = ""; // Clear the container
    todos.forEach(element => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = `
        <div class="todo-content">
            <input type="checkbox" ${element.checked ? "checked" : ""} />
            <label>${element.value}</label>
        </div>
        <div class="delete-todo">
            <span>🗑️</span>
        </div>
    `;
        todoContainer.appendChild(todo);
        // Attach event listener to each checkbox while reloading
        const checkbox = todo.querySelector("input[type=checkbox]");
        checkbox.addEventListener("change", function (e) {
            const todoIndex = Array.from(todoContainer.children).indexOf(todo);
            todos[todoIndex].checked = e.target.checked;
            localStorage.setItem("todos", JSON.stringify(todos));
        });

        const deleteTodoButtons = todo.querySelectorAll(".delete-todo");
        deleteTodoButtons.forEach(deleteTodoButton => deleteTodoButton.addEventListener("click", function (e) {
            console.log(e);
            const todoIndex = Array.from(todoContainer.children).indexOf(todo);
            console.log(todoIndex);
            todos.splice(todoIndex, 1);
            todo.remove();
            localStorage.setItem("todos", JSON.stringify(todos));
        }))
    });
}


// event listeners
window.addEventListener("load", reloadTodo);
window.addEventListener("keyup", addTodoOnDiffKey);
addTodoButton.addEventListener("click", addTodo);