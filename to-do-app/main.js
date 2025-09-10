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
    taskText.textContent = "";
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

   // 👉 Här inne:
  let span = document.createElement("span");
  span.textContent = writeTaskInput.value;


  let markAsCompleteBtn = document.createElement("button");
  markAsCompleteBtn.textContent = "✔";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  
  li.appendChild(span);
  li.appendChild(markAsCompleteBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  writeTaskInput.value = "";
  updateInstructions();
}

};

updateInstructions();


