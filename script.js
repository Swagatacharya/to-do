
// Get the input field and the task list
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add a task to the list
function addTask() {
  var task = taskInput.value;
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  var li = document.createElement("li");
  li.innerHTML = task;
  taskList.appendChild(li);
  taskInput.value = "";
}

// Remove a task from the list
// taskList.addEventListener("click", function(event) {
//   if (event.target.tagName === "LI") {
//     event.target.parentNode.removeChild(event.target);
//   }
// });