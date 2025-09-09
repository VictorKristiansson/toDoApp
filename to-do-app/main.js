let addTaskButton = document.getElementById("add-task-btn");
let writeTaskInput = document.getElementById("write-task");
let taskList = document.getElementById("task-list");
let errorMsg = document.getElementById("error-msg");

addTaskButton.onclick = () => {

errorMsg.textContent = "";

  if (writeTaskInput.value.trim() === "") {
    errorMsg.textContent = "Your task can't be empty!"
  }

  else if (writeTaskInput.value.length > 50) {
    errorMsg.textContent = "Your task can't longer than 50 characters!"
  }

  else {
    let li = document.createElement("li");
    li.textContent = writeTaskInput.value;
    taskList.appendChild(li);
    writeTaskInput.value = "";
  }
};