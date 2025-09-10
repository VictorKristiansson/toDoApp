let addTaskButton = document.getElementById("add-task-btn");
let writeTaskInput = document.getElementById("write-task");
let taskList = document.getElementById("task-list");
let errorMsg = document.getElementById("error-msg");
let taskText = document.getElementById("task-text");


// UPDATE INSTRUCTION TEXT
const updateInstructions = () => {
  if (taskList.children.length === 0) {
    taskText.textContent = "Type below to add a task";
  }

  else {
    taskText.textContent = "Click on a task to mark as done!";
  }
};




// DELETE TASK
const deleteTask = (li) => {
  li.remove();
  updateInstructions();
}




//ADD TASK
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
    li.onclick = () => deleteTask(li);
    updateInstructions();
  }
};

updateInstructions();


