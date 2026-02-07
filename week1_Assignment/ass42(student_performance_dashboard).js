/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    
filter() students who passed (marks ≥ 40)
map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D

   
reduce() to calculate average marks
find() the student who scored 92
findIndex() of student "Kiran"*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let res1=students.filter(stuobj=>stuobj.marks>=40)
console.log(res1)

/*map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D*/
let res2=students.map(stuobj=>{
    let grade
    if(stuobj.marks>=90) grade="A"
    else if(stuobj.marks>=75) grade="B"
    else if(stuobj.marks>=60) grade="C"
    else grade="D"
    return {
          id: stuobj.id,
          name: stuobj.name,
          marks: stuobj.marks,
          grade: grade
        };
})
console.log(res2)

//reduce() to calculate average marks
let total=students.reduce((acc,ele)=>acc+ele.marks,0)
let res3=total/students.length
console.log(res3)

//find() the student who scored 92
let res4=students.find(stuobj=>stuobj.marks===92)
console.log(res4)

//findIndex() of student "Kiran"
let res5=students.findIndex(stuobj=>stuobj.name==="Kiran")
console.log(res5)
