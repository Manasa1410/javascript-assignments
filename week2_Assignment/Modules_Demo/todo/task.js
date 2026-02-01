import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

const tasks = [];
let taskIdCounter = 1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    return "Error: Title must be at least 3 characters long.";
  }

  if (!validatePriority(priority)) {
    return "Error: Priority must be low, medium, or high.";
  }

  if (!validateDueDate(dueDate)) {
    return "Error: Due date must be a future date.";
  }

  const newTask = {
    id: taskIdCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(newTask);
  return "Task added successfully.";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Error: Task not found.";
  }

  task.completed = true;
  return "Task marked as completed.";
}

// Export task functions
export { addTask, getAllTasks, completeTask };