/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/


    //filter() courses with name length > 5
    const courses = ["javascript", "react", "node", "mongodb", "express"];

    let res1=courses.filter(function(element){
        return element.length>5
    })
    console.log(res1)

    //map() to convert course names to uppercase
    let res2=courses.map(function(element){
        return element.toUpperCase()
    })
    console.log(res2)

    //reduce() to generate a single string:
             // "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    let res3=courses.reduce((acc,ele)=>acc.toUpperCase() + ' | ' + ele.toUpperCase())
    console.log(res3)

    //find() the course "react"
    let res4=courses.find(element=>element==="react")
    console.log(res4)

    //findIndex() of "node"
    let res5=courses.findIndex(element=>element==="node")
    console.log(res5)