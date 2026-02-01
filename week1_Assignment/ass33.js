/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/

    //filter() marks ≥ 40 (pass marks)
    const marks = [78, 92, 35, 88, 40, 67];

    let res1=marks.filter(function(element){
        return element>=40
    })
    console.log(res1)

    // map() to add 5 grace marks to each student
    let res2=marks.map(function(element){
        return element+5
    })
    console.log(res2)

    //reduce() to find highest mark
    let res3=marks.reduce((accumulator,element)=>accumulator>element?accumulator:element)
    console.log(res3)

    //find() first mark below 40
    let res4=marks.find(element=>element<40)
    console.log(res4)

    //findIndex() of mark 92
    let res5=marks.findIndex(element=>element===92)
    console.log(res5)