document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskName = document.getElementById('taskName').value;
        const status = document.getElementById('taskStatus').value;
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div class="task">
                <label>${taskName}</label>
                <span>${status}</span>
                <button onclick="changeStatus(this)">Change Status</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskForm.reset();
    });
});

// Function to change the status of a task
function changeStatus(button) {
    const task = button.closest('.task');
    const statusSpan = task.querySelector('span');
    const currentStatus = statusSpan.textContent;

    if (currentStatus === 'Pending') {
        statusSpan.textContent = 'In Progress';
    } else if (currentStatus === 'In Progress') {
        statusSpan.textContent = 'Completed';
    } else {
        statusSpan.textContent = 'Pending';
    }
}
// Function to delete a task
function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}