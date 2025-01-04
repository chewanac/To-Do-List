// // Step 1: Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// // Step 2: Add event listener to the "Add Task" button
addTaskButton.addEventListener("click", function () 
{
    const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

    if (taskText !== "") 
        {
        addTask(taskText); // Call the addTask function
        taskInput.value = ""; // Clear the input field
    } else 
    {
        alert("Please enter a task!"); // Show an alert if the input is empty
    }
});

// // Step 3: Define the addTask function
function addTask(taskText) 
{
    const taskItem = document.createElement("li"); // Create a new list item
    taskItem.textContent = taskText; // Set its text content

    const deleteButton = document.createElement("button"); // Create a delete button
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        taskItem.remove(); // Remove the task when the delete button is clicked
    });

    taskItem.appendChild(deleteButton); // Add the delete button to the list item
    taskList.appendChild(taskItem); // Add the list item to the task list
}

