const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput= document.querySelector("#task")

loadEventListeners();

function loadEventListeners(){
    form.addEventListener("submit", addTask);
}

function addTask(event){
    if (taskInput.value === "") alert("Add a task")
    event.preventDefault();
}