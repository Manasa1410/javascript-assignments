/* validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }*/
function validateTitle(title)
{
  return typeof title === "string" && title.trim().length >= 3;
}

function validatePriority(priority)
{
   const validPriorities = ["low", "medium", "high"];
  return validPriorities.includes(priority);                      
}

function validateDueDate(date)
 {
     const dueDate = new Date(date);
  const today = new Date();

  return dueDate instanceof Date && !isNaN(dueDate) && dueDate > today;
 }

 export { validateTitle, validatePriority, validateDueDate };
