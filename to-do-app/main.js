let addTaskButton = document.getElementById("add-task-btn");
let writeTaskInput = document.getElementById("write-task");
let taskList = document.getElementById("task-list");

addTaskButton.onclick = () => {
  if (writeTaskInput.value.trim() || writeTaskInput.value > 50 === "") {
    alert("Your task can't be empty or longer than 50 characters!")
  }

  else {
    let li = document.createElement("li");
    li.textContent = writeTaskInput.value;
    taskList.appendChild(li);
    writeTaskInput.value = "";
  }
};