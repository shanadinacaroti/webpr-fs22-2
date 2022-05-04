const item = document.getElementById("todoItem");
const numOfTask = document.getElementById("numberOfTasks");
const openTasks = document.getElementById("openTasks");
let taskCounter;
let openTaskCounter;

function startTodo() {
 taskCounter = 0;
 openTaskCounter = 0;
 item.value = "";
}

function addTodo() {
    const container = document.getElementById("todoContainer");
    container.innerHTML += `
    <tr>
        <td><input type="text" value="${item.value}"></td>
    </tr>`;

    // increment number of tasks and open tasks
    taskCounter++;
    openTaskCounter++;
    numOfTask.innerHTML = taskCounter;
    openTasks.innerHTML = openTaskCounter;

    // clear input field
    item.value = "";
}
