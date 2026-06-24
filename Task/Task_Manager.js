const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const taskCount = document.getElementById("taskCount");
const pendingCount = document.getElementById("pendingCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCount() {

    taskCount.textContent = tasks.length;

    const pendingTasks = tasks.filter(task => !task.completed).length;

    pendingCount.textContent = pendingTasks;
}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const taskDiv = document.createElement("div");

        taskDiv.classList.add("task");

        if(task.completed){
            taskDiv.classList.add("completed");
        }

        taskDiv.innerHTML = `
            <span>${task.text}</span>

            <div class="actions">

                <button
                    class="complete-btn"
                    data-index="${index}">
                    ${task.completed ? "Undo" : "Done"}
                </button>

                <button
                    class="delete-btn"
                    data-index="${index}">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskDiv);
    });

    updateCount();
}

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
        addTask();
    }

});

taskList.addEventListener("click", (e) => {

    const index = e.target.dataset.index;

    if(e.target.classList.contains("delete-btn")){

        tasks.splice(index, 1);

        saveTasks();
        renderTasks();
    }

    if(e.target.classList.contains("complete-btn")){

        tasks[index].completed =
        !tasks[index].completed;

        saveTasks();
        renderTasks();
    }

});