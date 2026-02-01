/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid*/

  let enrollmentDeadline = new Date("2026-01-20");
  if(Date.now()>enrollmentDeadline)
  {
    console.log("Enrollment Closed")
  }
  else{
    console.log("Enrollment Open")
  }

  function isValidDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

console.log(isValidDate("2026-02-30")); 

  
