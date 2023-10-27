document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const todos = document.getElementById("todos");

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit-button");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove";
    deleteButton.classList.add("delete-button");

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    todos.appendChild(taskItem);

    input.value = "";
  }

  
  todos.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
      event.target.parentElement.remove();
    }
  });

 
  todos.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-button')) {
      const taskTextElement = event.target.parentElement.querySelector('span');
      const taskText = taskTextElement.innerText;
      const updatedText = prompt('Edit task:', taskText);
      if (updatedText !== null) {
        taskTextElement.innerText = updatedText;
      }
    }
  });

  
  input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const taskText = input.value.trim();
      if (taskText !== '') {
        addTask(taskText);
      }
    }
  });
});
