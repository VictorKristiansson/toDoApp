let addTaskButton = document.getElementById("add-task-btn");
let writeTaskInput = document.getElementById("write-task");
let taskList = document.getElementById("task-list");
let errorMsg = document.getElementById("error-msg");
let taskText = document.getElementById("task-text");
let taskCounterElement = document.getElementById("task-remaining-counter");



// UPDATE INSTRUCTION TEXT
const updateInstructions = () => {
  if (taskList.children.length === 0) {
    taskText.textContent = "Type below to add a task";
  } else {
    taskText.textContent = "Add another task?";
  }
};



// MARK TASK AS DONE
const markTaskAsDone = (li) => {
  li.remove();
  updateInstructions();
  taskCounterFunction();
};



// DELETE TASK
const deleteTask = (li) => {
  li.remove();
  updateInstructions();
  taskCounterFunction();
};



// TASK COUNTER
const taskCounterFunction = () => {
  let taskCount = taskList.children.length;
  taskCounterElement.textContent = `You currently have ${taskCount} remaining tasks!`;
};



// ADD TASK
addTaskButton.onclick = () => {
  errorMsg.textContent = "";

  if (writeTaskInput.value.trim() === "") {
    errorMsg.textContent = "Your task can't be empty!";
  } else if (writeTaskInput.value.length > 50) {
    errorMsg.textContent = "Your task can't longer than 50 characters!";
  } else {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = writeTaskInput.value;

    let markAsCompleteBtn = document.createElement("button");
    markAsCompleteBtn.textContent = "✔";
    markAsCompleteBtn.onclick = () => {
      markTaskAsDone(li);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => {
      deleteTask(li);
    };

    li.appendChild(span);
    li.appendChild(markAsCompleteBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    writeTaskInput.value = "";
    updateInstructions();
    taskCounterFunction();
  }
};



// RESET INSTRUCTIONS AND TASK COUNTER
updateInstructions();
taskCounterFunction();
