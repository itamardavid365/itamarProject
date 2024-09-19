import TaskManager from "./clasess/TaskManager.js";

let manager = new TaskManager();

manager.updateTasks(storageManage())

function storageManage() {
  let storageTasks = window.localStorage.getItem("storageTasks");
  storageTasks = JSON.parse(storageTasks);
  if (storageTasks == null) {
    return []
  } else {
    return storageTasks
  }

}



window.addNewTask = function addNewTask() {
  let description = document.getElementById("description").value;
  if (description !== "") {
    manager.addTask(description);
  } else {
    alert("empty task is not an option !")
  }
  showTasks();
};

function showTasks() {
  document.getElementById("activeTasks").innerHTML = "";
  document.getElementById("completedTasks").innerHTML = "";
  window.localStorage.setItem("storageTasks", JSON.stringify(manager.tasks))
  for (let task of manager.tasks) {
    if (task.completed) {
      document.getElementById(
        "completedTasks"
      ).innerHTML += `<div><li class='list-group-item d-inline-block w-50 text-decoration-line-through'> ${task.description}</li> <button disabled class='btn btn-success me-1' onclick='completeTask(${task.id})'> <i class="fa-solid fa-check"></i> </button><button disabled class='btn btn-primary me-1'> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button><button disabled class='btn btn-danger me-1'> <i class="fa-solid fa-trash"></i> </button </div>
    `;
    } else {
      document.getElementById(
        "activeTasks"
      ).innerHTML += `<div><li class='list-group-item d-inline-block w-50'> ${task.description}</li> <button class='btn btn-success me-1' onclick='completeTask(${task.id})'> <i class="fa-solid fa-check"></i> </button><button class='btn btn-primary me-1' onclick='updateTask(${task.id},"${task.description}")'> <i class="text-light fa-sharp fa-solid fa-pencil"></i> </button><button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'> <i class="fa-solid fa-trash"></i> </button </div>
    `;
    }
  }
}

showTasks();

window.completeTask = function completeTask(id) {
  manager.completeTask(id);
  showTasks();
};

window.updateTask = function updateTask(id, oldDis) {
  let newDescription = prompt("Pls enter new description:", oldDis);
  if (newDescription !== null && newDescription !== "") {
    manager.updateTaskDescription(id, newDescription);
    showTasks();
  } else {
    alert("Pls enter a valid input !");
  }
};

window.deleteTask = function deleteTask(id) {
  if (confirm("Are you sure ?")) {
    manager.deleteTask(id);
    showTasks()
  }
}


