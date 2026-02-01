// Import task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn JavaScript", "high", "2026-01-20"));
console.log(addTask("Buy groceries", "medium", "2026-01-15"));
console.log(addTask("Go jogging", "low", "2026-01-10"));

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(2));

// 4. Display all tasks again
console.log("Tasks After Completion:");
console.log(getAllTasks());
