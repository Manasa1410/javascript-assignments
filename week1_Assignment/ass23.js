/*HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message*/

   let hasPaid = true;
    let hasCompletedBasics = false;

    //if(hasPaid===true && hasCompletedBasics===true) console.log("Enroll Now")//If both conditions are true → "Enroll Now"
      //  else console.log("Complete Requirements") //Otherwise → "Complete Requirements"

/*Use ternary operator
Store result in enrollMessage
 Print message*/
 let enrollMessage=(hasPaid===true && hasCompletedBasics===true)?"Enroll Now":"Complete Requirements"
console.log(enrollMessage)