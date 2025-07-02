let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//converts string back to array


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dueDateInput = document.getElementById('dueDate');
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (taskText !== '') {
    tasks.push({ text: taskText, done: false, due: dueDate });
    taskInput.value = '';
    dueDateInput.value = '';
    saveTasks();
    renderTasks();
  }
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}
//converts JS array to string
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('taskList');
  const search = document.getElementById('search').value.toLowerCase();
  list.innerHTML = '';
  tasks
    .filter(task => task.text.toLowerCase().includes(search))
    .forEach((task, index) => {
      const li = document.createElement('li');
      li.className = task.done ? 'done' : '';
      li.innerHTML = `
        <span class="task-info" onclick="toggleDone(${index})">
          ${task.text} ${task.due ? `(Due: ${task.due})` : ''}
        </span>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
      list.appendChild(li);
    });
}

renderTasks();
