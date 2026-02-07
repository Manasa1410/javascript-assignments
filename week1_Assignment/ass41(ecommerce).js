/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    
Use filter() to get only inStock products
Use map() to create a new array with:  { name, totalPrice }
Use reduce() to calculate grand total cart value
Use find() to get details of "Mouse"
Use findIndex() to find the position of "Keyboard"*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let res1=cart.filter(cartobj=>cartobj.inStock==true)
console.log(res1)

//Use map() to create a new array with:  { name, totalPrice }
let res2 = cart.map(cartobj => {
    return {
        name: cartobj.name,
        totalPrice: cartobj.price
    };
});

console.log(res2);

//Use reduce() to calculate grand total cart value
let res3=cart.reduce((acc,ele)=>acc+ele.price*ele.quantity,0)
console.log(res3)

//Use find() to get details of "Mouse"
let res4=cart.find(cartobj=>cartobj.name==="Mouse")
console.log(res4)

//Use findIndex() to find the position of "Keyboard"
let res5=cart.findIndex(cartobj=>cartobj.name==="Keyboard")
console.log(res5)
