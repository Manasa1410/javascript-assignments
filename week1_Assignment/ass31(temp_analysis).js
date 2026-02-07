/*Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/

    const temperatures = [32, 35, 28, 40, 38, 30, 42];
    let res1=temperatures.filter(function(element){
        return element>35
    })
    console.log(res1)

    let res2=temperatures.map(function(element){
        return (element*1.8)+32
    })
    console.log(res2)

    let res=temperatures.reduce((accumulator,element)=>accumulator+element)
   let res3=res/temperatures.length
   console.log(res3)

   let res4=temperatures.find(element=>element>40)
   console.log(res4)

   let res5=temperatures.findIndex(element=>element===28)
   console.log(res5)
