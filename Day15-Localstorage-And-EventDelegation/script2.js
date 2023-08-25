// variables
const todoInput = document.querySelector("#todo-input");
const addTodoButton = document.querySelector("#add-todo-btn");
const todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);
const todosContainer = document.querySelector(".container-content");
const noTodoYet = document.querySelector(".no-todo-yet");
const content = document.querySelector(".container-content");
console.log(content);

// functions
function addTodo(e) {
    if (!todoInput.value) {
        alert("Enter something to add in todo!");
        return todoInput.focus();
    }

    const todo = {
        text: todoInput.value,
        completed: false
    }

    todos.push(todo);
    createTodo(todos, todosContainer);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.clear();
    console.table(todos);

    todoInput.value = "";
    todoInput.focus();
}

function createTodo(todos = [], listContainer) {
    if (todos.length === 0) {
        noTodoYet.innerHTML = `
        <h6>Add your todos😎</h6>
        `;
    }
    else {
        noTodoYet.innerHTML = `
        <h6>Best of luck to complete all❤️‍🔥</h6>
        `;
    }
    listContainer.innerHTML = todos.map((todo, index) => {
        return `
        <li>
            <div class="item-content">
            <input type="checkbox" data-index=${index}
            id="todo-item${index}"
            ${todo.completed ? "checked" : ""}
            />
            <label for="todo-item${index}">${todo.text}</label>
            </div>
            <div class="delete-todo" data-index=${index}>
                🗑️
            </div>
        </li>
        <hr size="2" noshade color="#fff">
    `
    }).join("");
}

todosContainer.innerHTML = `<h6>loading...</h6>`
setTimeout(() => {
    createTodo(todos, todosContainer);
}, 500)

function updateTodo(e) {
    // console.log(e.target.nodeName);
    if (e.target.nodeName !== "INPUT") return;
    console.log(e.target.dataset.index);
    const index = e.target.dataset.index;
    todos[index].completed = !todos[index].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
    // console.log(e.target.nodeName);
    if (e.target.nodeName !== "DIV") return;
    console.log(e.target.dataset.index);
    const index = e.target.dataset.index;
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    todosContainer.innerHTML = `<h6>loading...</h6>`
    setTimeout(() => {
        createTodo(todos, todosContainer);
    }, 500)

}

function applyBoxShadow(e) {
    content.classList.add("active");
    return () => {
        setTimeout(() => {
            content.classList.remove('active')
        }, 200);
    }
}


// event listeners
window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
})
addTodoButton.addEventListener("click", addTodo);
todosContainer.addEventListener("click", updateTodo);
todosContainer.addEventListener("click", deleteTodo);
content.addEventListener("scroll", applyBoxShadow);
