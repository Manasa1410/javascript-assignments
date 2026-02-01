/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/
let date1=new Date(Date.now())

console.log("year:",date1.getFullYear())
console.log("month:",date1.getMonth())
console.log("date:",date1.getDate())
console.log("day of week:",date1.getDay())
console.log("hours,minutes,seconds:",date1.getHours(),date1.getMinutes(),date1.getSeconds())

console.log(date1.toString())
