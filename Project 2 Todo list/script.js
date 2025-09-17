function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <div>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  document.getElementById('task-list').appendChild(li);
  input.value = '';
}

function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
}

function editTask(btn) {
  const li = btn.parentElement.parentElement;
  const span = li.querySelector('span');
  const newTask = prompt("Edit your task:", span.textContent);
  if (newTask) {
    span.textContent = newTask;
  }
}
